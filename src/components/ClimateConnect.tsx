import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, ImageIcon, RotateCw } from 'lucide-react';
import {
  climateConnectIntro,
  climateConnectThemes,
  climateConnectCards,
  getAltText,
} from '../data/climateConnectCards';

interface ClimateConnectProps {
  setCurrentPage: (page: string) => void;
}

/** A swipe must travel this far, and be more horizontal than vertical, to turn the page. */
const SWIPE_THRESHOLD = 50;

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
      className="w-full h-full object-cover rounded-xl"
    />
  );
};

const ClimateConnect = ({ setCurrentPage }: ClimateConnectProps) => {
  // Multi-select: an empty selection means every deck is showing.
  const [activeThemes, setActiveThemes] = useState<Set<string>>(new Set());
  const [pageIndex, setPageIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);
  const [flipped, setFlipped] = useState<Set<string>>(new Set());
  const [missingImages, setMissingImages] = useState<Set<string>>(new Set());

  // Two cards side by side from the lg breakpoint up, one below it.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');
    const sync = () => setCardsPerPage(query.matches ? 2 : 1);

    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  const markMissing = useCallback((src: string) => {
    setMissingImages((current) => (current.has(src) ? current : new Set(current).add(src)));
  }, []);

  const deck =
    activeThemes.size === 0
      ? climateConnectCards
      : climateConnectCards.filter((card) => activeThemes.has(card.theme));

  const pageCount = Math.max(1, Math.ceil(deck.length / cardsPerPage));
  // Clamp rather than store: the viewport can shrink the deck out from under us.
  const currentPage = Math.min(pageIndex, pageCount - 1);
  const firstCard = currentPage * cardsPerPage;
  const pageCards = deck.slice(firstCard, firstCard + cardsPerPage);

  // Turning the page or switching decks always shows fronts again.
  const goToPage = useCallback(
    (next: number) => {
      const clamped = Math.min(Math.max(next, 0), pageCount - 1);
      setPageIndex(clamped);
      setFlipped(new Set());
    },
    [pageCount]
  );

  const goPrev = useCallback(() => goToPage(currentPage - 1), [goToPage, currentPage]);
  const goNext = useCallback(() => goToPage(currentPage + 1), [goToPage, currentPage]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goPrev, goNext]);

  const toggleTheme = (themeId: string) => {
    setActiveThemes((current) => {
      const next = new Set(current);
      if (next.has(themeId)) next.delete(themeId);
      else next.add(themeId);
      return next;
    });
    setPageIndex(0);
    setFlipped(new Set());
  };

  const clearThemes = () => {
    setActiveThemes(new Set());
    setPageIndex(0);
    setFlipped(new Set());
  };

  const toggleFlip = (cardId: string) => {
    setFlipped((current) => {
      const next = new Set(current);
      if (next.has(cardId)) next.delete(cardId);
      else next.add(cardId);
      return next;
    });
  };

  /* ── Swipe ────────────────────────────────────────────────────────────────
     A drag that clears the threshold turns the page; anything shorter falls
     through to the card's own click handler and flips it instead.          */
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const didSwipe = useRef(false);

  const onPointerDown = (event: React.PointerEvent) => {
    pointerStart.current = { x: event.clientX, y: event.clientY };
    didSwipe.current = false;
  };

  const onPointerUp = (event: React.PointerEvent) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;

    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;

    // Vertical drags belong to the page scroll, not to us.
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) return;

    didSwipe.current = true;
    if (dx < 0) goNext();
    else goPrev();
  };

  const onCardClick = (cardId: string) => {
    if (didSwipe.current) {
      didSwipe.current = false;
      return;
    }
    toggleFlip(cardId);
  };

  const atStart = currentPage === 0;
  const atEnd = currentPage >= pageCount - 1;

  const firstShown = deck.length === 0 ? 0 : firstCard + 1;
  const lastShown = firstCard + pageCards.length;
  const range = firstShown === lastShown ? `${firstShown}` : `${firstShown}–${lastShown}`;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <button
          onClick={() => setCurrentPage('resources-schools')}
          className="flex items-center text-[#2D6AA3] hover:text-[#1e4d73] font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Schools &amp; Communities
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Climate Connect
          </h2>
          {climateConnectIntro && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {climateConnectIntro}
            </p>
          )}
        </div>

        {/* Deck selector — themes combine, so several decks can be shown at once */}
        <div className="mb-10">
          <div
            className="flex flex-wrap justify-center gap-3"
            role="group"
            aria-label="Filter cards by theme. Themes combine; with none selected every deck is shown."
          >
            {climateConnectThemes.map((theme) => {
              const selected = activeThemes.has(theme.id);

              return (
                <button
                  key={theme.id}
                  onClick={() => toggleTheme(theme.id)}
                  aria-pressed={selected}
                  className={`px-5 py-2.5 rounded-lg font-semibold tracking-wide border-2 transition-all duration-200 ${
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

          <p className="text-center text-sm text-gray-500 mt-4">
            {activeThemes.size === 0 ? (
              'Showing every deck — select one or more themes to narrow it down'
            ) : (
              <>
                Showing {activeThemes.size} of {climateConnectThemes.length} decks
                <button
                  onClick={clearThemes}
                  className="ml-3 font-semibold text-[#2D6AA3] hover:text-[#1e4d73] underline transition-colors"
                >
                  Show all
                </button>
              </>
            )}
          </p>

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

        {/* Cards — tap to flip, swipe to turn the page */}
        <div
          className="grid gap-8 lg:grid-cols-2 mb-8 touch-pan-y select-none"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          {pageCards.map((card) => {
            const isFlipped = flipped.has(card.id);

            return (
              <button
                key={card.id}
                onClick={() => onCardClick(card.id)}
                aria-pressed={isFlipped}
                aria-label={`${card.theme} card ${card.number}, showing the ${
                  isFlipped ? 'back' : 'front'
                }. Activate to flip.`}
                className="w-full [perspective:1200px] focus:outline-none focus:ring-2 focus:ring-[#F4B43D] focus:ring-offset-4 rounded-xl"
              >
                <div
                  className={`relative w-full aspect-[312/510] [transform-style:preserve-3d] transition-transform duration-500 motion-reduce:transition-none ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
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
                      alt={getAltText(`${card.id}-back`, `${card.theme} card ${card.number}, back`)}
                      label={`${card.id}-back.webp`}
                      missing={missingImages.has(card.back)}
                      onMissing={markMissing}
                    />
                  </div>
                </div>

                {/* Fronts are identical within a deck, so label which card this is */}
                <span className="block mt-3 text-sm font-medium text-gray-500 tracking-wide">
                  {card.theme} · Card {card.number}
                </span>
              </button>
            );
          })}
        </div>

        {/* Hint */}
        <p className="text-center text-sm text-gray-500 mb-6 flex items-center justify-center gap-2">
          <RotateCw className="w-4 h-4" aria-hidden="true" />
          Tap a card to flip it
          <span className="hidden sm:inline">· swipe or use the arrows to move through the deck</span>
          <span className="sm:hidden">· swipe to move through the deck</span>
        </p>

        {/* Deck Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={goPrev}
            disabled={atStart}
            aria-label="Previous cards"
            className="w-12 h-12 rounded-lg border-2 border-gray-200 flex items-center justify-center text-gray-700 transition-all duration-200 hover:border-[#F4B43D] hover:text-[#F4B43D] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-700"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <p className="text-gray-600 font-medium tabular-nums" aria-live="polite">
            {range} of {deck.length}
          </p>

          <button
            onClick={goNext}
            disabled={atEnd}
            aria-label="Next cards"
            className="w-12 h-12 rounded-lg border-2 border-gray-200 flex items-center justify-center text-gray-700 transition-all duration-200 hover:border-[#F4B43D] hover:text-[#F4B43D] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-700"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClimateConnect;
