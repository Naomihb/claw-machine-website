// -----------------------------------------------------------------------------
// EDIT YOUR PRODUCTS HERE
// Add, remove, or edit machines below. To add a new machine:
//   1. Drop your photo in /public/images/ (e.g. my-machine.png)
//   2. Copy one of the objects below and update the fields.
// The product grid on the site updates automatically.
// -----------------------------------------------------------------------------
export type Product = {
  slug: string
  name: string
  image: string
  bestFor: string
  description: string
}

export const products: Product[] = [
  {
    slug: 'colorful-sky-crane',
    name: 'Colorful Sky Crane',
    image: '/images/machine-colorful-sky.jpg',
    bestFor: 'Arcades, malls, family entertainment centers',
    description:
      'A commercial claw machine with a bright iridescent cabinet and full LED lighting, designed for guest entertainment and revenue generation. Available in different styles and configurations.',
  },
  {
    slug: 'prize-crane-lineup',
    name: 'Prize Crane Lineup',
    image: '/images/machines-row.jpg',
    bestFor: 'Family entertainment centers, trampoline parks',
    description:
      'Build an eye-catching wall of cranes for high-traffic locations, keeping more guests engaged and playing across multiple machines at once.',
  },
  {
    slug: 'plush-prize-crane',
    name: 'Plush Prize Crane',
    image: '/images/girl-prize.jpg',
    bestFor: 'Restaurants, bowling centers, retail spaces',
    description:
      'A guest-favorite plush crane that adds an exciting attraction and extra revenue stream, drawing families in to play and win.',
  },
  {
    slug: 'player-controls',
    name: 'Operator-Ready Controls',
    image: '/images/controls-closeup.jpg',
    bestFor: 'Claw machine stores, large arcades',
    description:
      'Intuitive joystick and button controls with vivid LED feedback make every play feel premium, keeping guests coming back to your floor.',
  },
]
