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
 *   Deck cover      CLIMATE-CONNECT-cover.webp
 *   (one)           The plain card the visitor lands on, before the deck opens.
 *
 *   Theme fronts    EXPLORE-front.webp   CARE-front.webp   CONNECT-front.webp
 *   (one each)      BELONG-front.webp    ACT-front.webp
 *
 *   Card backs      EXPLORE-01-back.webp   EXPLORE-02-back.webp   ...
 *   (one per card)  CARE-01-back.webp      CARE-02-back.webp      ...
 *
 * These were split from "PRIME Climate Connect Prototype_19Aug.pdf" at 780x1275px,
 * WebP quality 82. Pages 1-8 of that PDF are front matter; each theme is one front
 * page followed by nine card backs. The cover is page 2 of that front matter.
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
 * Add or remove a line in the theme's `titles` list below. The deck's length is
 * that list's length, so the count and the copy can never drift apart.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * CARD TITLES
 * ─────────────────────────────────────────────────────────────────────────────
 * Transcribed by eye from the title bar printed on each card back in
 * "PRIME Climate Connect Prototype_19Aug.pdf" — they are not machine-readable
 * text in that file, so they were read off the artwork. Two to double-check with
 * the designers if anything looks off:
 *
 *   BELONG-01  "Notice the wonder"  — the only title not in Title Case
 *   CONNECT-01 "Communication Styles Check-In" — capital I in "Check-In"
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
  /** Card titles in deck order. The deck's length is this list's length. */
  titles: string[];
  /** Optional one-line deck description. Left empty until real copy arrives. */
  description?: string;
}

export interface ClimateConnectCard {
  /** e.g. 'ACT-01' */
  id: string;
  theme: string;
  /** 1-based position within its deck. */
  number: number;
  /** The title printed on the card's back, e.g. 'Mapping My Influences'. */
  title: string;
  /** Shared across the deck — every card in a theme shows the same illustration. */
  front: string;
  /** Unique to this card: the content revealed on flipping. */
  back: string;
}

const IMAGE_DIR = '/Images/ClimateConnect';

/** Page intro. Left empty until real copy arrives — nothing renders while it is blank. */
export const climateConnectIntro = '';

/**
 * The deck's cover — the plain Climate Connect card the visitor lands on, before
 * any theme is chosen. It stands in for the physical deck sitting face-up on a
 * table: one tap on it opens the deck. Exported from page 2 of the prototype PDF.
 */
export const climateConnectCover = `${IMAGE_DIR}/CLIMATE-CONNECT-cover.webp`;

export const climateConnectThemes: ClimateConnectTheme[] = [
  {
    id: 'EXPLORE',
    name: 'EXPLORE',
    titles: [
      'What Makes Me, Me?',
      'Who I Am, Where I’m Going',
      'My Climate Moment',
      'A Letter to My Future Self',
      'Climate Archetypes',
      'Role Model Reflection',
      'Mapping My Influences',
      'Strengths Spotlight',
      'My Role in Change',
    ],
  },
  {
    id: 'CARE',
    name: 'CARE',
    titles: [
      'Check In With Your Body',
      'My Wellbeing Ecosystem',
      'Creating a Grief Ritual',
      'Connections that Support Me',
      'Reaching Out',
      'Looking Through Lenses',
      'Exploring My Climate Emotions',
      'Wellbeing Recipe',
      'Circle of Care',
    ],
  },
  {
    id: 'CONNECT',
    name: 'CONNECT',
    titles: [
      'Communication Styles Check-In',
      'Before You Respond',
      'A Better Way to Say It',
      'Repairing the Conversation',
      'Starting the Conversation',
      'When Family Disagrees',
      'Speaking Up',
      'Respectful Debate',
      'Supporting Climate Emotions',
    ],
  },
  {
    id: 'BELONG',
    name: 'BELONG',
    titles: [
      'Notice the wonder',
      'Build a Nature Habit',
      'Meet Your Local Wildlife',
      'Explore Your Local Ecosystem',
      'Nature Art',
      'Nature Scavenger Hunt',
      'Nature Explorer Showcase',
      'Design a New Earth Day',
      'Mini Nature Documentary',
    ],
  },
  {
    id: 'ACT',
    name: 'ACT',
    titles: [
      'One Small Action',
      'Finding Your Next Step',
      'Learning from Change Makers',
      'From Problem to Action',
      'Design a Climate Poster',
      'Investigating Climate Decisions',
      'Plan a Community Action',
      'Climate Solutions Challenge',
      'Climate Action Pitch',
    ],
  },
];

/**
 * 'EXPLORE' is right on a filter chip and reads as shouting inside a sentence,
 * so the card caption uses the sentence-case form.
 */
export const themeLabel = (themeId: string): string =>
  themeId.charAt(0) + themeId.slice(1).toLowerCase();

/** Real alt text, keyed by image id (e.g. 'ACT-01-front'). Empty until supplied. */
export const altText: Record<string, string> = {};

/** Falls back to a factual label when no real alt text has been written yet. */
export const getAltText = (imageId: string, fallback: string): string =>
  altText[imageId] || fallback;

/** The one illustration shared by every card in a theme. */
export const getThemeFront = (themeId: string): string =>
  `${IMAGE_DIR}/${themeId}-front.webp`;

const buildDeck = (theme: ClimateConnectTheme): ClimateConnectCard[] =>
  theme.titles.map((title, index) => {
    const number = index + 1;
    const id = `${theme.id}-${String(number).padStart(2, '0')}`;
    return {
      id,
      theme: theme.id,
      number,
      title,
      front: getThemeFront(theme.id),
      back: `${IMAGE_DIR}/${id}-back.webp`,
    };
  });

export const climateConnectCards: ClimateConnectCard[] =
  climateConnectThemes.flatMap(buildDeck);

/* ───────────────────────────────────────────────────────────────────────────
 * FRONT MATTER
 * ───────────────────────────────────────────────────────────────────────────
 * The printed deck opens with a letter and an acknowledgements page. They are
 * pages 3-5 of "PRIME Climate Connect Prototype_19Aug.pdf", transcribed here
 * rather than shown as artwork so they are selectable, searchable and readable
 * by a screen reader. The bold runs match the printed pages: each note opens on a
 * bold paragraph, and the letter bolds its closing phrase and the sign-off.
 *
 * Transcribed as printed. One inconsistency carried over from the source: the
 * letter signs off "Platform for Research and Interventions in Youth Mental
 * health and the Environment", while the acknowledgements expand PRIME as
 * "Platform for Research and Intervention in Youth Mental Health". Worth a word
 * with the designers rather than a silent fix.
 * ─────────────────────────────────────────────────────────────────────────── */

export type NoteRun = string | { strong: string };

export type NoteBlock =
  | { kind: 'paragraph'; runs: NoteRun[] }
  | { kind: 'list'; items: string[] }
  /** Name-per-line credits, set tighter than running text. */
  | { kind: 'credits'; lines: { text: string; strong?: boolean }[] };

export interface ClimateConnectNote {
  id: string;
  title: string;
  blocks: NoteBlock[];
}

export const climateConnectNotes: ClimateConnectNote[] = [
  {
    id: 'letter',
    title: 'Letter from the Co-designers',
    blocks: [
      {
        kind: 'paragraph',
        runs: [
          {
            strong:
              'Whether you’re feeling worried about climate change, supporting someone else, or simply curious to learn more, welcome.',
          },
        ],
      },
      {
        kind: 'paragraph',
        runs: [
          'Climate Connect is here to help you explore the many thoughts and feelings that climate change can bring, from distress and frustration to curiosity and hope.',
        ],
      },
      {
        kind: 'paragraph',
        runs: [
          'These feelings are more common than you might think: we feel them too! That’s why we came together to create something supportive, practical, and a little different. Climate Connect was co-designed by young people from a range of backgrounds, cultures, genders, and lived experiences to create a space that is reflective, non-judgemental, and engaging.',
        ],
      },
      {
        kind: 'paragraph',
        runs: [
          'Instead of another workbook, we chose playing cards. They offer a fun, flexible way to learn, reflect, and connect, whether you’re on your own or with friends, family, or a community group.',
        ],
      },
      { kind: 'paragraph', runs: ['The deck is organised into five themes:'] },
      {
        kind: 'list',
        items: [
          'Explore: Discover your values, strengths, and what matters most to you',
          'Care: Build emotional awareness, coping skills, and wellbeing.',
          'Connect: Strengthen communication, empathy, and supporting others.',
          'Belong: Deepen your connection with nature and the world around you.',
          'Act: Turn your values and ideas into meaningful action.',
        ],
      },
      {
        kind: 'paragraph',
        runs: [
          'There is no right way to use these cards. Pick the activities that speak to you, take your time, and return whenever you need them. Think of it as a choose-your-own-adventure!',
        ],
      },
      {
        kind: 'paragraph',
        runs: [
          'We hope they help you better understand yourself, connect with others and nature, and discover meaningful ways to respond to climate change — ',
          { strong: 'one card at a time.' },
        ],
      },
      {
        kind: 'credits',
        lines: [
          { text: 'Sincerely,' },
          { text: 'PRIME and the Codesign Team', strong: true },
          {
            text: 'Platform for Research and Interventions in Youth Mental health and the Environment',
          },
        ],
      },
    ],
  },
  {
    id: 'acknowledgements',
    title: 'Acknowledgements',
    blocks: [
      {
        kind: 'paragraph',
        runs: [
          {
            strong:
              'PRIME (Platform for Research and Intervention in Youth Mental Health) is an initiative that supports young people’s mental health and wellbeing in a changing climate.',
          },
        ],
      },
      {
        kind: 'paragraph',
        runs: [
          'It is led by A/Prof Caroline Gao and A/Prof Rebecca Patrick from the University of Melbourne and Orygen Australia. PRIME is funded by the Australian Government through the National Health and Medical Research Council (NHMRC, Grant No. 2039730).',
        ],
      },
      {
        kind: 'paragraph',
        runs: [
          'Climate Connect is part of the PRIME Climate & Wellbeing Hub, directed by Samantha Julia L. Eala and Dr Hasini Gunasiri. We also thank Dr Jana Menssink, Sunny Nguyen, Neerja Singh, and the wider PRIME team for their support.',
        ],
      },
      {
        kind: 'paragraph',
        runs: [
          'Importantly, we thank our youth co-designers, whose ideas, experiences, and creativity shaped Climate Connect: Elly Lau, Nimisha Kulkarni, Skylar Klease, Chris Hatano, Ashana Mcgregor, Neerja Singh, Ezra Burnett, Janeeta Molla, Chloe Boric, Mannuo Zhu, and Fiona Jiang.',
        ],
      },
      {
        kind: 'credits',
        lines: [
          { text: 'Illustrations: Paola Santos' },
          { text: 'Design, layout, and editing: Samantha Julia L. Eala' },
          { text: 'Web design and development: Harry He' },
        ],
      },
    ],
  },
];

/** All cards belonging to a theme, in deck order. */
export const getCardsByTheme = (themeId: string): ClimateConnectCard[] =>
  climateConnectCards.filter((card) => card.theme === themeId);
