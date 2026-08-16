// -----------------------------------------------------------------------------
// EDIT YOUR PRODUCTS HERE
// Add, remove, or edit machines below. To add a new machine:
//   1. Drop your photos in /public/images/products/ (e.g. my-machine.jpg)
//   2. Copy one of the objects below and update the fields.
// The product grid and each product's detail page update automatically.
// -----------------------------------------------------------------------------
export type GalleryImage = {
  src: string
  alt: string
  caption: string
}

export type Product = {
  slug: string
  name: string
  image: string
  bestFor: string
  description: string
  dimensions?: string
  angles?: { src: string; alt: string }[]
  gallery?: GalleryImage[]
  // A single representative LED color, used for the tilt/rotate viewer's
  // light-sweep highlight.
  glow: string
}

export const products: Product[] = [
  {
    slug: 'mengmengda-iii',
    name: 'Vega Claw – Nice Day',
    image: '/images/products/mengmengda-front.png',
    bestFor: 'Malls, family entertainment centers',
    description:
      'A clean, bright single-player Vega Claw cabinet with a playful "Nice Day" mascot graphic and a clear acrylic play chamber — an approachable, family-friendly look that fits tight footprints without losing shelf appeal.',
    dimensions: '81 × 85 × 201 cm',
    glow: '#f472b6',
    angles: [
      {
        src: '/images/products/mengmengda-front.png',
        alt: 'Vega Claw Nice Day machine viewed from the front',
      },
      {
        src: '/images/products/mengmengda-side.png',
        alt: 'Vega Claw Nice Day machine viewed from an angle',
      },
    ],
    gallery: [
      {
        src: '/images/products/mengmengda-front.png',
        alt: 'Vega Claw Nice Day machine viewed from the front',
        caption:
          'Clear acrylic play chamber with a fine-grid interior and a bright "Nice Day" mascot graphic for easy prize visibility.',
      },
      {
        src: '/images/products/mengmengda-side.png',
        alt: 'Vega Claw Nice Day machine viewed from an angle',
        caption:
          'Slim footprint makes it easy to fit against a wall or between neighboring machines.',
      },
      {
        src: '/images/products/mengmengda-dims.jpg',
        alt: 'Vega Claw Nice Day dimension diagram, 81 by 85 by 201 centimeters',
        caption: 'Full cabinet footprint: 81 × 85 × 201 cm.',
      },
    ],
  },
  {
    slug: 'roll2win',
    name: 'Roll2Win Vega Claw',
    image: '/images/products/roll2win-front.jpg',
    bestFor: 'Arcades, family entertainment centers',
    description:
      'A dual-player roll-and-win Vega Claw prize machine stocked with plush toys and novelty prizes, built for side-by-side play and steady repeat engagement.',
    dimensions: '113 × 180 × 247 cm',
    glow: '#38bdf8',
    angles: [
      {
        src: '/images/products/roll2win-front.jpg',
        alt: 'Roll2Win Vega Claw machine viewed from the front',
      },
      {
        src: '/images/products/roll2win-left.jpg',
        alt: 'Roll2Win Vega Claw machine viewed from an angle',
      },
    ],
    gallery: [
      {
        src: '/images/products/roll2win-front.jpg',
        alt: 'Roll2Win Vega Claw machine viewed from the front',
        caption:
          'Twin roll lanes each stock plush toys, novelties, and a lucky-ball prize wheel, with bright marquee lighting up top.',
      },
      {
        src: '/images/products/roll2win-left.jpg',
        alt: 'Roll2Win Vega Claw machine viewed from an angle',
        caption:
          'Dual coin/bill acceptors and side branding keep two players moving at once.',
      },
      {
        src: '/images/products/roll2win-dims.jpg',
        alt: 'Roll2Win Vega Claw dimension diagram, 113 by 180 by 247 centimeters',
        caption: 'Full cabinet footprint (2-player version): 113 × 180 × 247 cm.',
      },
    ],
  },
  {
    slug: 'colorful-alliance',
    name: 'Vega Claw – Colorful Sky',
    image: '/images/products/alliance-front.jpg',
    bestFor: 'Arcades, malls, claw machine stores',
    description:
      'A full-size Vega Claw cabinet with a vivid rainbow-lit play chamber and a spacious prize bed, designed to be a bold visual anchor on any showroom floor.',
    dimensions: '85 × 80 × 205 cm',
    glow: '#f472b6',
    angles: [
      {
        src: '/images/products/alliance-front.jpg',
        alt: 'Vega Claw Colorful Sky machine viewed from the front',
      },
      {
        src: '/images/products/alliance-angle.jpg',
        alt: 'Vega Claw Colorful Sky machine viewed from an angle',
      },
    ],
    gallery: [
      {
        src: '/images/products/alliance-front.jpg',
        alt: 'Vega Claw Colorful Sky machine viewed from the front',
        caption:
          'Rainbow-lit play chamber shifts color as guests walk past, drawing attention from across the floor.',
      },
      {
        src: '/images/products/alliance-angle.jpg',
        alt: 'Vega Claw Colorful Sky machine viewed from an angle',
        caption:
          'Wide prize bed and single-joystick control panel with a lit "Prize Out" chute.',
      },
      {
        src: '/images/products/alliance-dims.jpg',
        alt: 'Vega Claw Colorful Sky dimension diagram, 85 by 80 by 205 centimeters',
        caption: 'Full cabinet footprint: 85 × 80 × 205 cm.',
      },
    ],
  },
  {
    slug: 'whac-a-mole',
    name: 'Whac-A-Mole Challenge',
    image: '/images/products/whac-a-mole-front.png',
    bestFor: 'Family entertainment centers, trampoline parks',
    description:
      'A two-player, light-up Whac-A-Mole cabinet with ticket rewards — a high-energy attraction that keeps groups playing together.',
    glow: '#38bdf8',
    angles: [
      {
        src: '/images/products/whac-a-mole-left.png',
        alt: 'Whac-A-Mole cabinet viewed from the left side',
      },
      {
        src: '/images/products/whac-a-mole-front.png',
        alt: 'Whac-A-Mole cabinet viewed from the front',
      },
      {
        src: '/images/products/whac-a-mole-right.png',
        alt: 'Whac-A-Mole cabinet viewed from the right side',
      },
    ],
    gallery: [
      {
        src: '/images/products/whac-a-mole-left.png',
        alt: 'Whac-A-Mole cabinet viewed from the left side',
        caption:
          'Eight light-up mole holes with padded mallets for two players to compete side by side.',
      },
      {
        src: '/images/products/whac-a-mole-front.png',
        alt: 'Whac-A-Mole cabinet viewed from the front',
        caption:
          'Digital scoreboard and licensed character graphics add extra draw for younger guests.',
      },
      {
        src: '/images/products/whac-a-mole-right.png',
        alt: 'Whac-A-Mole cabinet viewed from the right side',
        caption: 'Ticket dispenser and coin mechanism built into the side panel.',
      },
    ],
  },
]

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}
