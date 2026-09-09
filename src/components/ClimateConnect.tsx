import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  Grid3x3,
  ImageIcon,
  Layers,
  MessageSquare,
  RotateCcw,
  RotateCw,
  Shuffle,
} from 'lucide-react';
import {
  climateConnectIntro,
  climateConnectThemes,
  climateConnectCards,
  climateConnectCover,
  climateConnectNotes,
  climateConnectSurvey,
  cardLabel,
  getAltText,
} from '../data/climateConnectCards';
import type {
  ClimateConnectCard,
  ClimateConnectNote,
} from '../data/climateConnectCards';

/**
 * Once the deck is open the letter has been read or skipped, so only the
 * acknowledgements follow the visitor to the foot of the page.
 */
const DECK_OPEN_NOTES = climateConnectNotes.filter((note) => note.id !== 'letter');

/** A swipe must travel this far, and be more horizontal than vertical, to turn the page. */
const SWIPE_THRESHOLD = 50;

/** How long the dealt card takes to clear the deck. Must match the Tailwind keyframes. */
const DEAL_MS = 320;

/** A drag past either end of the deck is damped rather than blocked, so it feels sprung. */
const OVERSCROLL_DAMPING = 4;

/**
 * How wide a card is allowed to get. Three caps, whichever bites first: the
 * column, a 32rem ceiling so it never gets silly on a monitor, and the card's own
 * 312x510 shape held inside the height the page furniture leaves it.
 *
 * The subtracted figure is that furniture — header, title, chips, prompt, caption
 * and pager. It is larger on a phone, where the deck has to fit on one screen
 * together with its instructions, and smaller from `lg` up, where there is height
 * to spare.
 *
 * The `max(...)` floor is what governs on a short phone: below it the card would
 * shrink past the point where its own body copy can be read, so it holds its
 * width and lets the page scroll instead.
 */
const CARD_BOX =
  'max-w-[min(100%,max(17rem,calc((100svh-25rem)*312/510)))] ' +
  'lg:max-w-[min(34rem,calc((100svh-17rem)*312/510))]';

/** The cards a theme selection shows, in the order the deck was printed in. */
const cardsForThemes = (themes: Set<string>) =>
  themes.size === 0
    ? climateConnectCards
    : climateConnectCards.filter((card) => themes.has(card.theme));

/**
 * Fisher-Yates over the activities alone. Every order is equally likely, and
 * because it only swaps positions no card is lost or dealt twice.
 *
 * A card with no theme is an invitation, not an activity: it has a fixed seat
 * at the head of the printed deck, and dealing it into a random position would
 * be shuffling in a different kind of thing. So a shuffle leaves it out
 * entirely — 45 cards while Shuffle is on, 46 again once it is switched off.
 */
const shuffleIds = (cards: ClimateConnectCard[]) => {
  const ids = cards.filter((card) => card.theme).map((card) => card.id);
  for (let i = ids.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids;
};

/**
 * Shuffle, See all and Start over have to fit one phone row together, so they
 * are sized down below `sm` and only reach their full padding on a wider screen.
 */
const DECK_ACTION =
  'inline-flex items-center gap-1.5 px-2.5 py-2 text-sm rounded-lg border-2 font-semibold ' +
  'transition-all duration-200 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-base';

/** Resting state for all three. */
const DECK_ACTION_IDLE =
  ' border-gray-200 text-gray-700 hover:border-[#F4B43D] hover:text-[#F4B43D]';

/** Shuffle is a mode, so it lights up the way a selected theme chip does. */
const DECK_ACTION_ON = ' bg-[#F4B43D] border-[#F4B43D] text-gray-900';

/** Shuffle is also the only one of the three that can be unavailable. */
const DECK_ACTION_DISABLED =
  ' disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 ' +
  'disabled:hover:text-gray-700';

/** How far off the deck a card sits, as a fraction of its width. Matches the keyframes. */
const OFF_DECK = 1.18;

/** The tilt a card rests at while it is off the deck, in degrees. Matches the keyframes. */
const OFF_DECK_TILT = 8;

/**
 * Artwork that has not landed yet renders as a placeholder naming the file it
 * is waiting for, rather than a broken image.
 */
const CardImage = ({
  src,
  alt,
  label,
  missing,
  onMissing,
}: {
  src: string;
  alt: string;
  label: string;
  missing: boolean;
  onMissing: (src: string) => void;
}) => {
  if (missing) {
    return (
      <div className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-500 p-4 text-center">
        <ImageIcon className="w-8 h-8 mb-3" aria-hidden="true" />
        <span className="text-xs font-mono break-all leading-relaxed">{label}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => onMissing(src)}
      // Without this the browser starts its own image drag, which fires
      // pointercancel and aborts the swipe half a centimetre in.
      draggable={false}
      className="w-full h-full object-cover rounded-xl"
    />
  );
};

/**
 * Draws the edges of the cards sitting underneath the top one, so a single card
 * on screen still reads as a physical stack. Purely decorative: the layers carry
 * no artwork and are hidden from screen readers.
 *
 * `remaining` is how many cards are still to come. The stack thins out as the
 * visitor works through the deck, and the last card sits on the table alone.
 */
const DeckStack = ({
  remaining,
  beneath,
  cardClassName = '',
  cardStyle,
  children,
}: {
  remaining: number;
  /**
   * Artwork for the card lying directly under the top one. It is hidden while the
   * top card covers it and shows through as that card is pushed aside, so sliding
   * one off reveals a real card rather than a blank.
   */
  beneath?: string;
  /** Applied to the top card only — the stack underneath never moves. */
  cardClassName?: string;
  cardStyle?: React.CSSProperties;
  children: React.ReactNode;
}) => {
  // Two edges is enough to read as "a stack"; more just muddies the corner.
  const layers = Math.min(Math.max(remaining, 0), 2);

  return (
    <div className="relative">
      {Array.from({ length: layers }, (_, index) => {
        const depth = layers - index;
        return (
          <div
            key={depth}
            aria-hidden="true"
            className="absolute inset-0 rounded-xl bg-gray-50 border border-gray-300 shadow-sm"
            // Offset mostly sideways: a deep vertical offset puts the lowest
            // edge, and its shadow, right on top of the card's title.
            style={{ transform: `translate(${depth * 10}px, ${depth * 5}px)` }}
          />
        );
      })}

      {beneath && (
        <div aria-hidden="true" className="absolute inset-0">
          <img
            src={beneath}
            alt=""
            draggable={false}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )}

      {/* The focus ring lives here rather than on the button, so it traces the card
          itself instead of boxing in the caption sitting underneath it. */}
      <div
        className={`relative shadow-xl rounded-xl ring-[#F4B43D] ring-offset-2 group-focus-visible:ring-2 ${cardClassName}`}
        style={cardStyle}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * The deck's front matter, lifted out of the cards. Closed it costs one
 * line, which is what keeps the card itself on screen on a phone.
 *
 * Which note is open is the caller's to hold: the notes move down the page
 * when the deck opens, and that move has to close them.
 */
const FrontMatterNotes = ({
  notes,
  className,
  openNote,
  onToggle,
}: {
  notes: ClimateConnectNote[];
  className: string;
  openNote: string | null;
  onToggle: (noteId: string | null) => void;
}) => {
  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {notes.map((note) => {
          const open = openNote === note.id;

          return (
            <button
              key={note.id}
              onClick={() => onToggle(open ? null : note.id)}
              aria-expanded={open}
              aria-controls={`note-${note.id}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-[#2D6AA3] hover:text-[#1e4d73] transition-colors"
            >
              {note.title}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 motion-reduce:transition-none ${
                  open ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>

      {notes.map((note) => (
        <div
          key={note.id}
          id={`note-${note.id}`}
          hidden={openNote !== note.id}
          className="mt-5 text-left text-gray-600 leading-relaxed space-y-4 border-t border-gray-200 pt-5"
        >
          {note.blocks.map((block, index) => {
            if (block.kind === 'action') {
              return (
                <a
                  key={index}
                  href={block.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={DECK_ACTION + DECK_ACTION_IDLE}
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  {block.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              );
            }

            if (block.kind === 'list') {
              return (
                <ul key={index} className="list-disc pl-5 space-y-1.5">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }

            // Production credits stay small and muted; a letter sign-off
            // opts into running-text size so it reads as part of the letter.
            if (block.kind === 'credits') {
              const body = block.tone === 'body';

              return (
                <p key={index} className={body ? undefined : 'text-sm text-gray-500'}>
                  {block.lines.map((line) => (
                    <span
                      key={line.text}
                      className={`block ${
                        line.strong ? `font-semibold ${body ? 'text-gray-800' : 'text-gray-700'}` : ''
                      } ${line.italic ? 'italic' : ''}`}
                    >
                      {line.text}
                    </span>
                  ))}
                </p>
              );
            }

            // The printed pages set some runs bold; keep that emphasis rather
            // than flattening the whole note to one weight.
            return (
              <p key={index}>
                {block.runs.map((run, runIndex) =>
                  typeof run === 'string' ? (
                    <React.Fragment key={runIndex}>{run}</React.Fragment>
                  ) : (
                    <strong key={runIndex} className="font-semibold text-gray-800">
                      {run.strong}
                    </strong>
                  )
                )}
              </p>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const ClimateConnect = () => {
  const navigate = useNavigate();
  // React Router stamps 'default' on the first entry in the history stack, so a
  // key of anything else means the visitor navigated here from another page.
  const cameFromInsideSite = useLocation().key !== 'default';

  // The visitor lands on the plain cover card, as they would on a physical deck
  // sitting on a table; one tap on it opens the deck.
  const [deckOpen, setDeckOpen] = useState(false);

  // The flat lay: the whole deck face up at once, for browsing rather than dealing.
  const [flatLay, setFlatLay] = useState(false);

  // The letter and the acknowledgements, one open at a time. Closed by default:
  // they belong to the deck but nobody arrives wanting to read them first.
  const [openNote, setOpenNote] = useState<string | null>(null);

  // Multi-select: an empty selection means every deck is showing.
  const [activeThemes, setActiveThemes] = useState<Set<string>>(new Set());

  // Shuffle is a mode, not a jump: this holds the whole deck in its shuffled
  // order, by card id. Null means the deck is in its printed order.
  const [shuffledIds, setShuffledIds] = useState<string[] | null>(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState<Set<string>>(new Set());
  const [missingImages, setMissingImages] = useState<Set<string>>(new Set());

  // How far the card has been dragged from its resting place, in pixels. Zero
  // whenever a finger is not on it.
  const [drag, setDrag] = useState(0);

  // The card that has just been dealt away. It keeps rendering, on top and inert,
  // until its animation finishes — that is what reveals the next card underneath.
  const [moving, setMoving] = useState<{
    id: string;
    /** 'deal' throws the top card off; 'return' puts the last one back on top. */
    kind: 'deal' | 'return';
    /** The card in flight. */
    image: string;
    /** On a return, the card being covered — it stays put until the other lands. */
    covered?: string;
    /** Where a drag released it, in pixels. Zero for arrows and the keyboard. */
    from: number;
  } | null>(null);

  // Measured so a drag can be expressed as a fraction of the card, not guessed.
  const cardArea = useRef<HTMLDivElement>(null);

  // A rightward drag that falls short still has to slide the card it pulled in
  // back off the left edge, so it stays mounted for the length of that spring.
  const [settling, setSettling] = useState(false);
  const settleTimer = useRef<number>();
  const moveTimer = useRef<number>();

  useEffect(
    () => () => {
      window.clearTimeout(moveTimer.current);
      window.clearTimeout(settleTimer.current);
    },
    []
  );

  const markMissing = useCallback((src: string) => {
    setMissingImages((current) => (current.has(src) ? current : new Set(current).add(src)));
  }, []);

  const ordered = cardsForThemes(activeThemes);

  // Everything downstream — the arrows, a swipe, the counter, the flat lay —
  // reads this one list, so reordering it here is all that shuffling takes.
  const deck = shuffledIds
    ? shuffledIds
        .map((id) => ordered.find((card) => card.id === id))
        .filter((card): card is ClimateConnectCard => card !== undefined)
    : ordered;

  // Clamp rather than store: narrowing the themes can shrink the deck out from under us.
  const currentIndex = Math.min(cardIndex, Math.max(deck.length - 1, 0));
  const card = deck[currentIndex];

  // Moving to another card or switching decks always shows the front again. The
  // card being left behind is dealt off the top of the deck rather than swapped
  // out, so the next one reads as having been underneath it all along.
  const goToCard = useCallback(
    /** `from` is where a swipe released the card, so the motion carries on from
        there rather than snapping back first. Zero for arrows and keys. `motion`
        overrides the direction rule: a shuffle deals whichever way it lands. */
    (next: number, from = 0, motion?: 'deal' | 'return') => {
      const clamped = Math.min(Math.max(next, 0), Math.max(deck.length - 1, 0));
      const leaving = deck[currentIndex];
      const arriving = deck[clamped];
      if (clamped === currentIndex || !leaving || !arriving) return;

      // Whichever face was showing is the one that moves.
      const faceOf = (c: typeof leaving) => (flipped.has(c.id) ? c.back : c.front);

      setMoving(
        (motion ?? (clamped > currentIndex ? 'deal' : 'return')) === 'deal'
          ? // Going on deals the top card away, uncovering the one beneath it.
            { id: leaving.id, kind: 'deal', image: faceOf(leaving), from }
          : // Going back picks the last card up and lays it on top of this one.
            {
              id: arriving.id,
              kind: 'return',
              image: arriving.front,
              covered: faceOf(leaving),
              from,
            }
      );
      setCardIndex(clamped);
      setFlipped(new Set());
      setDrag(0);

      window.clearTimeout(moveTimer.current);
      moveTimer.current = window.setTimeout(() => setMoving(null), DEAL_MS);
    },
    [deck, currentIndex, flipped]
  );

  const goPrev = useCallback(() => goToCard(currentIndex - 1), [goToCard, currentIndex]);
  const goNext = useCallback(() => goToCard(currentIndex + 1), [goToCard, currentIndex]);

  /**
   * Switching between the deck and the flat lay changes the page's length by a
   * factor of twenty, so whatever you were scrolled to no longer exists. Jump to
   * the top rather than leaving the visitor somewhere arbitrary — instantly,
   * because smooth-scrolling 30,000px is not a nicety.
   */
  const showFlatLay = (open: boolean) => {
    setFlatLay(open);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  /**
   * Picking a card out of the flat lay. It was the activity side that was on
   * show there, so the card opens on that same side rather than making the
   * visitor flip it again to get back to what they just chose.
   */
  const openFromFlatLay = (index: number) => {
    const chosen = deck[index];
    if (!chosen) return;
    window.clearTimeout(moveTimer.current);
    setMoving(null);
    setDrag(0);
    setCardIndex(index);
    setFlipped(new Set([chosen.id]));
    showFlatLay(false);
  };

  /**
   * Shuffle as a mode rather than a jump, and deliberately asymmetric.
   *
   * Turning it on re-deals: the deck is shuffled and the visitor is put at the
   * top of it, which is what the counter dropping back to 1 tells them. Turning
   * it off keeps their place instead — the card they are looking at has an id,
   * and that id is where it sits in the printed order, so they carry on from
   * the same card rather than being sent back to the start.
   *
   * Only the re-deal turns the card face down, and only because it is a
   * different card: the deck's fronts are deliberately identical, so dealing
   * one already turned over would give away what is about to be read. Turning
   * shuffle off leaves the card, and therefore the side it is showing, alone.
   */
  const toggleShuffle = () => {
    if (ordered.length < 2) return;

    if (shuffledIds) {
      const staying = card?.id;
      setShuffledIds(null);
      setCardIndex(Math.max(staying ? ordered.findIndex((one) => one.id === staying) : 0, 0));
      return;
    }

    setShuffledIds(shuffleIds(ordered));
    setCardIndex(0);
    setFlipped(new Set());
  };

  /**
   * The only way into the deck. Opening it moves the front matter to the foot
   * of the page, so whatever the visitor left open on the cover is closed here
   * rather than reappearing somewhere else already expanded.
   */
  const openDeck = useCallback(() => {
    setDeckOpen(true);
    setOpenNote(null);
  }, []);

  /**
   * The way back out, and the mirror of openDeck: everything the visitor did
   * inside the deck is undone, so the cover they land on is the one they first
   * arrived at. Timers are cleared first — a card in flight would otherwise
   * land on a deck that is no longer open. The missing-image cache is the one
   * thing kept, because a broken file does not un-break itself.
   */
  const startOver = useCallback(() => {
    window.clearTimeout(moveTimer.current);
    window.clearTimeout(settleTimer.current);
    setMoving(null);
    setSettling(false);
    setDrag(0);
    setFlipped(new Set());
    setCardIndex(0);
    setActiveThemes(new Set());
    setShuffledIds(null);
    setOpenNote(null);
    setFlatLay(false);
    setDeckOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      // On the cover there is nowhere to page to — the right arrow opens the deck.
      if (!deckOpen) {
        if (event.key === 'ArrowRight') openDeck();
        return;
      }
      // The flat lay has no current card, so there is nothing to step through.
      if (flatLay) {
        if (event.key === 'Escape') showFlatLay(false);
        return;
      }
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goPrev, goNext, deckOpen, flatLay, openDeck]);

  /**
   * Changing the themes changes which cards are in the deck, so a shuffle made
   * for the old selection no longer describes it — deal a fresh one.
   */
  const applyThemes = (next: Set<string>) => {
    setActiveThemes(next);
    if (shuffledIds) setShuffledIds(shuffleIds(cardsForThemes(next)));
    setCardIndex(0);
    setFlipped(new Set());
  };

  const toggleTheme = (themeId: string) => {
    const next = new Set(activeThemes);
    if (next.has(themeId)) next.delete(themeId);
    else next.add(themeId);
    applyThemes(next);
  };

  const clearThemes = () => applyThemes(new Set());

  const toggleFlip = (cardId: string) => {
    setFlipped((current) => {
      const next = new Set(current);
      if (next.has(cardId)) next.delete(cardId);
      else next.add(cardId);
      return next;
    });
  };

  /* ── Swipe ────────────────────────────────────────────────────────────────
     The card tracks the finger while it is held, so it behaves like a card
     being pushed across a table. Letting go past the threshold deals it away;
     anything shorter springs back and falls through to the card's own click
     handler, which flips it instead.                                       */
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const didSwipe = useRef(false);
  // Mirrors `dragging` for logic that has to act within the gesture, before the
  // re-render that the state change schedules.
  const draggingNow = useRef(false);
  const [dragging, setDragging] = useState(false);

  const onPointerDown = (event: React.PointerEvent) => {
    if (moving) return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
    didSwipe.current = false;
    draggingNow.current = false;
  };

  const onPointerMove = (event: React.PointerEvent) => {
    const start = pointerStart.current;
    if (!start) return;

    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;

    if (!draggingNow.current) {
      // Until the drag is clearly horizontal, leave it alone — it may be a scroll.
      if (Math.abs(dx) < 8 || Math.abs(dx) <= Math.abs(dy)) return;

      draggingNow.current = true;
      setDragging(true);
      // Capture only once the drag is real: capturing on pointerdown would
      // retarget the click that follows a plain tap, and the card would stop
      // flipping.
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    // There is nothing beyond either end of the deck, so pushing that way is damped.
    const pastEnd = (dx < 0 && atEnd) || (dx > 0 && atStart);
    setDrag(pastEnd ? dx / OVERSCROLL_DAMPING : dx);
  };

  const endDrag = (event: React.PointerEvent) => {
    const start = pointerStart.current;
    pointerStart.current = null;

    const wasDragging = draggingNow.current;
    draggingNow.current = false;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (!start) return;

    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;

    // Vertical drags belong to the page scroll, not to us.
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) {
      // A drag the card visibly followed was a deliberate push, not a tap, even
      // if it fell short — springing back should not also flip the card.
      didSwipe.current = wasDragging;
      if (wasDragging && dx > 0 && !atStart) {
        setSettling(true);
        window.clearTimeout(settleTimer.current);
        settleTimer.current = window.setTimeout(() => setSettling(false), 220);
      }
      setDrag(0);
      return;
    }

    didSwipe.current = true;
    goToCard(currentIndex + (dx < 0 ? 1 : -1), dx);
    // goToCard clears the drag on a real move; this covers a swipe off either end.
    setDrag(0);
  };

  const onCardClick = (cardId: string) => {
    if (didSwipe.current) {
      didSwipe.current = false;
      return;
    }
    toggleFlip(cardId);
  };

  const atStart = currentIndex === 0;
  const atEnd = currentIndex >= deck.length - 1;
  const position = deck.length === 0 ? 0 : currentIndex + 1;

  /* Dragging right reaches back for the card already dealt away, so it is that
     card that follows the finger, sliding in from the left — the one on the deck
     stays where it is and gets covered. Dragging left pushes the top card off,
     so there it is the top card that moves. */
  const pulling = !atStart && (drag > 0 || settling) ? deck[currentIndex - 1] : null;

  /* The next card lies under this one all along, so pushing the top card aside
     uncovers real artwork instead of a blank. Rendered even at rest, where it is
     completely hidden, so its image is already loaded when the drag starts. */
  const beneath = atEnd ? undefined : deck[currentIndex + 1]?.front;
  const cardWidth = cardArea.current?.offsetWidth ?? 384;
  const offDeck = cardWidth * OFF_DECK;
  const pullProgress = Math.min(drag / offDeck, 1);

  return (
    <section className="py-6 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation — this page is reachable from more than one place,
            so follow the visitor's own history rather than a fixed parent.
            A visitor arriving on a shared link has none, so fall back to Resources. */}
        <button
          onClick={() => (cameFromInsideSite ? navigate(-1) : navigate('/resources'))}
          className="flex items-center text-[#2D6AA3] hover:text-[#1e4d73] font-semibold mb-4 lg:mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        {/* Header */}
        <div className="text-center mb-3 lg:mb-8">
          {/* Once the deck is open the title is out of the way, but it stays in
              the document as the page's only heading. */}
          <h2
            className={
              deckOpen
                ? 'sr-only'
                : 'text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-6'
            }
          >
            Climate Connect
          </h2>
          {climateConnectIntro && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {climateConnectIntro}
            </p>
          )}
        </div>

        {/* Before the deck is opened both notes sit under the title. */}
        {!deckOpen && (
          <FrontMatterNotes
            notes={climateConnectNotes}
            className="mb-3 lg:mb-8"
            openNote={openNote}
            onToggle={setOpenNote}
          />
        )}

        {!deckOpen ? (
          /* Cover — the plain deck card the visitor lands on. Nothing else is on
             screen yet: no themes, no pager, just the deck waiting to be opened. */
          <div className={`mx-auto ${CARD_BOX}`}>
            <button
              onClick={openDeck}
              aria-label="Open the Climate Connect deck"
              className="group w-full rounded-xl transition-transform duration-200 hover:-translate-y-1 focus:outline-none"
            >
              <DeckStack remaining={2}>
                <div className="w-full aspect-[312/510]">
                  <CardImage
                    src={climateConnectCover}
                    alt={getAltText('CLIMATE-CONNECT-cover', 'The Climate Connect deck')}
                    label="CLIMATE-CONNECT-cover.webp"
                    missing={missingImages.has(climateConnectCover)}
                    onMissing={markMissing}
                  />
                </div>
              </DeckStack>
            </button>

            <p className="text-center text-sm text-gray-500 mt-4 lg:mt-6 flex items-center justify-center gap-2">
              <Layers className="w-4 h-4" aria-hidden="true" />
              Tap the deck to open
            </p>

            {/* The survey also closes the acknowledgements, but a visitor who
                never opens the deck would never reach it there. */}
            <div className="mt-4 lg:mt-6 flex justify-center">
              <a
                href={climateConnectSurvey}
                target="_blank"
                rel="noopener noreferrer"
                className={DECK_ACTION + DECK_ACTION_IDLE}
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                Share your thoughts
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        ) : (
          <>
            {/* Deck selector — themes combine, so several decks can be shown at once */}
            <div className="mb-5 lg:mb-8">
              <div
                className="flex flex-wrap justify-center gap-2 sm:gap-3"
                role="group"
                aria-label="Filter cards by theme. Themes combine, and All clears the filter."
              >
                {/* All is the resting state, so it reads as one of the options
                    rather than an escape hatch buried in the sentence below. */}
                <button
                  onClick={clearThemes}
                  aria-pressed={activeThemes.size === 0}
                  className={`shrink-0 px-3 py-1.5 text-sm sm:px-5 sm:py-2.5 sm:text-base rounded-lg font-semibold tracking-wide border-2 transition-all duration-200 ${
                    activeThemes.size === 0
                      ? 'bg-[#F4B43D] border-[#F4B43D] text-gray-900'
                      : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-[#F4B43D]'
                  }`}
                >
                  All
                </button>

                {climateConnectThemes.map((theme) => {
                  const selected = activeThemes.has(theme.id);

                  return (
                    <button
                      key={theme.id}
                      onClick={() => toggleTheme(theme.id)}
                      aria-pressed={selected}
                      className={`shrink-0 px-3 py-1.5 text-sm sm:px-5 sm:py-2.5 sm:text-base rounded-lg font-semibold tracking-wide border-2 transition-all duration-200 ${
                        selected
                          ? 'bg-[#F4B43D] border-[#F4B43D] text-gray-900'
                          : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-[#F4B43D]'
                      }`}
                    >
                      {theme.name}
                    </button>
                  );
                })}
              </div>

              {/* With All selected the chips already say what is showing, so this
                  line stays out of the way — which is also the room item 10 needs. */}
              {activeThemes.size > 0 && (
                <p className="text-center text-sm text-gray-500 mt-3">
                  Showing {activeThemes.size} of {climateConnectThemes.length} themes
                </p>
              )}

              {/* Descriptions of the selected decks, once real copy exists */}
              {climateConnectThemes
                .filter((theme) => activeThemes.has(theme.id) && theme.description)
                .map((theme) => (
                  <p
                    key={theme.id}
                    className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mt-4"
                  >
                    {theme.description}
                  </p>
                ))}
            </div>

            {flatLay ? (
              <>
                {/* The flat lay runs to 36 screens on a phone, so the way out has
                    to travel with you. It sticks under the site header, and carries
                    the count and the hint that used to sit above and below the grid,
                    so it costs no height of its own. */}
                <div className="sticky top-16 z-20 mb-6 bg-white border-y border-gray-200">
                  <div className="flex items-center justify-between gap-4 py-3">
                    <p className="flex items-center gap-2 min-w-0 text-sm text-gray-500">
                      <Layers className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span className="truncate">
                        <span className="tabular-nums">{deck.length}</span> cards
                        <span className="hidden sm:inline"> · tap any card to open it</span>
                      </span>
                    </p>

                    <button
                      onClick={() => showFlatLay(false)}
                      className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-200 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-[#F4B43D] hover:text-[#F4B43D]"
                    >
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                      Back to the deck
                    </button>
                  </div>
                </div>

                {/* A gallery, so the point is seeing cards together: two across
                    even on a phone. The tiles keep the card's own 312x510 shape
                    rather than being cropped square — a card is recognised by its
                    proportions as much as its picture. */}
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                  {deck.map((flat, index) => (
                    <li key={flat.id}>
                      <button
                        onClick={() => openFromFlatLay(index)}
                        aria-label={`Open ${cardLabel(flat)}`}
                        className="group w-full text-left focus:outline-none"
                      >
                        <div className="w-full aspect-[312/510] rounded-xl shadow-md transition-transform duration-200 group-hover:-translate-y-1 motion-reduce:transition-none group-focus-visible:ring-2 group-focus-visible:ring-[#F4B43D] group-focus-visible:ring-offset-2">
                          <CardImage
                            src={flat.back}
                            alt=""
                            label={`${flat.id}-back.webp`}
                            missing={missingImages.has(flat.back)}
                            onMissing={markMissing}
                          />
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
              {/* How to use the deck, above the card — it is an instruction to read
                  before touching anything, not a caption on what just happened. */}
              {/* Deliberately not a flex row: as flex items the icon and the two
                  spans wrap independently, which on a phone splits one sentence
                  into two narrow columns. Inline keeps it a single sentence that
                  breaks wherever it runs out of room. */}
              <p className="text-center text-xs text-gray-500 mb-3 lg:mb-5">
                <RotateCw
                  className="inline-block align-[-0.2em] w-3.5 h-3.5 mr-1.5"
                  aria-hidden="true"
                />
                Tap to flip
                <span className="hidden sm:inline"> · Swipe or use the arrows for next</span>
                <span className="sm:hidden"> · Swipe for next</span>
              </p>

              {/* Card — one at a time, tap to flip, swipe to move through the deck */}
              <div
                ref={cardArea}
                className={`relative mx-auto mb-3 lg:mb-6 touch-pan-y select-none ${CARD_BOX}`}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onDragStart={(event) => event.preventDefault()}
              >
                {/* On a return, the card being covered holds its place until the
                    other one lands on it — the deck underneath has already moved on. */}
                {moving?.kind === 'return' && moving.covered && (
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 z-[5] pointer-events-none">
                    <div className="w-full aspect-[312/510] shadow-xl rounded-xl">
                      <CardImage
                        src={moving.covered}
                        alt=""
                        label=""
                        missing={missingImages.has(moving.covered)}
                        onMissing={markMissing}
                      />
                    </div>
                  </div>
                )}

                {/* The card in flight: either the top card clearing the deck, or the
                    last one being laid back on top of it. Always inert. */}
                {moving && (
                  <div
                    key={`${moving.kind}-${moving.id}`}
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 z-10 pointer-events-none motion-reduce:hidden ${
                      moving.kind === 'deal' ? 'animate-deal-left' : 'animate-return-left'
                    }`}
                    style={
                      {
                        '--deal-from': `${moving.from}px`,
                        '--deal-tilt':
                          moving.kind === 'deal'
                            ? `${moving.from / 45}deg`
                            : `${-OFF_DECK_TILT * (1 - Math.min(moving.from / offDeck, 1))}deg`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="w-full aspect-[312/510] shadow-xl rounded-xl">
                      <CardImage
                        src={moving.image}
                        alt=""
                        label=""
                        missing={missingImages.has(moving.image)}
                        onMissing={markMissing}
                      />
                    </div>
                  </div>
                )}

                {/* Dragging right: the previous card follows the finger in from the
                    left, so letting go simply carries on from where it has got to. */}
                {pulling && (
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 z-10 pointer-events-none ${
                      dragging ? '' : 'transition-transform duration-200 ease-out'
                    }`}
                    style={{
                      transform: `translateX(${drag - offDeck}px) rotate(${
                        -OFF_DECK_TILT * (1 - pullProgress)
                      }deg)`,
                    }}
                  >
                    <div className="w-full aspect-[312/510] shadow-xl rounded-xl">
                      <CardImage
                        src={pulling.front}
                        alt=""
                        label=""
                        missing={missingImages.has(pulling.front)}
                        onMissing={markMissing}
                      />
                    </div>
                  </div>
                )}

                {card && (
                  <button
                    key={card.id}
                    onClick={() => onCardClick(card.id)}
                    aria-pressed={flipped.has(card.id)}
                    aria-label={`${cardLabel(card)} — showing the ${
                      flipped.has(card.id) ? 'activity' : 'illustration'
                    }. Activate to flip.`}
                    className="group w-full [perspective:1200px] focus:outline-none rounded-xl"
                  >
                    {/* The cards still to come sit under this one, so a single card
                        on screen still reads as a deck rather than a lone picture. */}
                    <DeckStack
                      remaining={deck.length - 1 - currentIndex}
                      beneath={beneath}
                      cardClassName={
                        dragging ? '' : 'transition-transform duration-200 ease-out motion-reduce:transition-none'
                      }
                      cardStyle={
                        drag === 0 || pulling
                          ? undefined
                          : { transform: `translateX(${drag}px) rotate(${drag / 45}deg)` }
                      }
                    >
                      <div
                        className={`relative w-full aspect-[312/510] [transform-style:preserve-3d] transition-transform duration-500 motion-reduce:transition-none ${
                          flipped.has(card.id) ? '[transform:rotateY(180deg)]' : ''
                        }`}
                      >
                        {/* Front — the theme illustration, shared across the deck */}
                        <div className="absolute inset-0 [backface-visibility:hidden]">
                          <CardImage
                            src={card.front}
                            alt={getAltText(`${card.theme}-front`, `${card.theme} deck illustration`)}
                            label={`${card.theme}-front.webp`}
                            missing={missingImages.has(card.front)}
                            onMissing={markMissing}
                          />
                        </div>

                        {/* Back */}
                        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                          <CardImage
                            src={card.back}
                            alt={getAltText(
                              `${card.id}-back`,
                              `${cardLabel(card)} — the activity on the back of the card`
                            )}
                            label={`${card.id}-back.webp`}
                            missing={missingImages.has(card.back)}
                            onMissing={markMissing}
                          />
                        </div>
                      </div>
                    </DeckStack>

                  </button>
                )}
              </div>

              {/* Deck Controls */}
              <div className="flex items-center justify-center gap-4 sm:gap-6">
                <button
                  onClick={goPrev}
                  disabled={atStart}
                  aria-label="Previous card"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-gray-200 flex items-center justify-center text-gray-700 transition-all duration-200 hover:border-[#F4B43D] hover:text-[#F4B43D] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-700"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <p className="text-gray-600 font-medium tabular-nums" aria-live="polite">
                  {position} of {deck.length}
                </p>

                <button
                  onClick={goNext}
                  disabled={atEnd}
                  aria-label="Next card"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-gray-200 flex items-center justify-center text-gray-700 transition-all duration-200 hover:border-[#F4B43D] hover:text-[#F4B43D] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-700"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Below the pager rather than in it: these are ways into the deck,
                  not more ways of stepping through it. The way back out lives at
                  the top of the flat lay instead, because that page is 36 screens
                  long and this one is barely two. */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
                <button
                  onClick={toggleShuffle}
                  disabled={deck.length < 2}
                  aria-pressed={shuffledIds !== null}
                  className={
                    DECK_ACTION +
                    (shuffledIds ? DECK_ACTION_ON : DECK_ACTION_IDLE) +
                    DECK_ACTION_DISABLED
                  }
                >
                  <Shuffle className="w-4 h-4" aria-hidden="true" />
                  Shuffle
                </button>

                <button
                  onClick={() => showFlatLay(true)}
                  className={DECK_ACTION + DECK_ACTION_IDLE}
                >
                  <Grid3x3 className="w-4 h-4" aria-hidden="true" />
                  See all
                </button>

                <button
                  onClick={startOver}
                  className={DECK_ACTION + DECK_ACTION_IDLE}
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  Start over
                </button>
              </div>
              </>
            )}

          </>
        )}

        {/* An opened deck sends the acknowledgements to the foot of the page,
            out of the way of the cards but still reachable. */}
        {deckOpen && (
          <FrontMatterNotes
            notes={DECK_OPEN_NOTES}
            className="mt-8 lg:mt-12"
            openNote={openNote}
            onToggle={setOpenNote}
          />
        )}
      </div>
    </section>
  );
};

export default ClimateConnect;
