/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        // The top card of the Climate Connect deck being dealt away, leaving the
        // next one underneath. The tilt is what sells it as a card rather than a
        // panel sliding sideways.
        // `--deal-from` / `--deal-tilt` are where the finger let go, so a swiped
        // card carries on from there instead of snapping back to centre first.
        // They default to zero for the arrows and the keyboard.
        'deal-left': {
          from: {
            transform: 'translateX(var(--deal-from, 0px)) rotate(var(--deal-tilt, 0deg))',
            opacity: '1',
          },
          to: { transform: 'translateX(-118%) rotate(-8deg)', opacity: '0' },
        },
        // Going back is not the mirror of going on: the card that was dealt away
        // is picked up and put back on top of the deck, so it comes in from the
        // same side it left by. `--deal-from` is how far a drag already pulled it.
        'return-left': {
          from: {
            transform:
              'translateX(calc(-118% + var(--deal-from, 0px))) rotate(var(--deal-tilt, -8deg))',
          },
          to: { transform: 'translateX(0) rotate(0deg)' },
        },
      },
      animation: {
        'deal-left': 'deal-left 320ms cubic-bezier(0.32, 0, 0.35, 1) forwards',
        // Landing a card back on the deck settles rather than flies: ease-out.
        'return-left': 'return-left 320ms cubic-bezier(0.16, 0.8, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
};
