/**
 * Climate Connect card decks — image-only.
 *
 * Every card is two artwork files: an illustrated front and a designed back.
 * No card copy lives in this file, so nothing here needs rewriting when the
 * real decks arrive — only the image files and the card counts.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHERE THE IMAGES GO
 * ─────────────────────────────────────────────────────────────────────────────
 *   public/Images/ClimateConnect/
 *
 * FILE NAMES  (case-sensitive — the deploy host is case-sensitive even though
 *              Windows is not, so keep the theme in CAPS exactly as below)
 *
 *   Theme fronts    EXPLORE-front.webp   CARE-front.webp   CONNECT-front.webp
 *   (one each)      BELONG-front.webp    ACT-front.webp
 *
 *   Card backs      EXPLORE-01-back.webp   EXPLORE-02-back.webp   ...
 *   (one per card)  CARE-01-back.webp      CARE-02-back.webp      ...
 *
 * These were split from "PRIME Climate Connect Prototype_19Aug.pdf" at 780x1275px,
 * WebP quality 82. Pages 1-8 of that PDF are front matter; each theme is one front
 * page followed by nine card backs.
 *
 * The front is the theme illustration and is shared by every card in that deck,
 * so there are five fronts in total. Each card has its own back, which carries
 * the content revealed when the card is flipped.
 *
 * Any missing file renders a grey placeholder showing which file it is
 * waiting for, so the page keeps working while artwork is still landing.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ADDING OR REMOVING CARDS
 * ─────────────────────────────────────────────────────────────────────────────
 * Change the `cardCount` on the theme below. The card list is generated from
 * it, so a deck of 12 needs one number changed, not twelve entries written.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ACCESSIBILITY
 * ─────────────────────────────────────────────────────────────────────────────
 * Image-only cards give screen readers nothing to read. Until real alt text is
 * supplied, each image falls back to a factual label ("ACT card 1, front").
 * To add proper descriptions, fill in `altText` below, keyed by image id:
 *
 *     export const altText: Record<string, string> = {
 *       'ACT-front': 'Illustration of a person lying down writing in a notebook',
 *       'ACT-01-back': 'One Small Action — choose one action to take this week…',
 *     };
 */

export interface ClimateConnectTheme {
  id: string;
  name: string;
  /** How many cards are in this deck. The card list is generated from it. */
  cardCount: number;
  /** Optional one-line deck description. Left empty until real copy arrives. */
  description?: string;
}

export interface ClimateConnectCard {
  /** e.g. 'ACT-01' */
  id: string;
  theme: string;
  /** 1-based position within its deck. */
  number: number;
  /** Shared across the deck — every card in a theme shows the same illustration. */
  front: string;
  /** Unique to this card: the content revealed on flipping. */
  back: string;
}

const IMAGE_DIR = '/Images/ClimateConnect';

/** Page intro. Left empty until real copy arrives — nothing renders while it is blank. */
export const climateConnectIntro = '';

export const climateConnectThemes: ClimateConnectTheme[] = [
  { id: 'EXPLORE', name: 'EXPLORE', cardCount: 9 },
  { id: 'CARE', name: 'CARE', cardCount: 9 },
  { id: 'CONNECT', name: 'CONNECT', cardCount: 9 },
  { id: 'BELONG', name: 'BELONG', cardCount: 9 },
  { id: 'ACT', name: 'ACT', cardCount: 9 },
];

/** Real alt text, keyed by image id (e.g. 'ACT-01-front'). Empty until supplied. */
export const altText: Record<string, string> = {};

/** Falls back to a factual label when no real alt text has been written yet. */
export const getAltText = (imageId: string, fallback: string): string =>
  altText[imageId] || fallback;

/** The one illustration shared by every card in a theme. */
export const getThemeFront = (themeId: string): string =>
  `${IMAGE_DIR}/${themeId}-front.webp`;

const buildDeck = (theme: ClimateConnectTheme): ClimateConnectCard[] =>
  Array.from({ length: theme.cardCount }, (_, index) => {
    const number = index + 1;
    const id = `${theme.id}-${String(number).padStart(2, '0')}`;
    return {
      id,
      theme: theme.id,
      number,
      front: getThemeFront(theme.id),
      back: `${IMAGE_DIR}/${id}-back.webp`,
    };
  });

export const climateConnectCards: ClimateConnectCard[] =
  climateConnectThemes.flatMap(buildDeck);

/** All cards belonging to a theme, in deck order. */
export const getCardsByTheme = (themeId: string): ClimateConnectCard[] =>
  climateConnectCards.filter((card) => card.theme === themeId);
