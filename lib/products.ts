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
    name: 'MengMengDa III',
    image: '/images/products/mengmengda-front.png',
    bestFor: 'Malls, family entertainment centers',
    description:
      'A compact, eye-catching claw cabinet with clear acrylic panels, bold LED signage, and playful character graphics — sized to fit tight footprints without losing shelf appeal.',
    dimensions: '81 × 85 × 201 cm',
    glow: '#f472b6',
    angles: [
      {
        src: '/images/products/mengmengda-front.png',
        alt: 'MengMengDa III claw machine viewed from the front',
      },
      {
        src: '/images/products/mengmengda-side.png',
        alt: 'MengMengDa III claw machine viewed from the side',
      },
    ],
    gallery: [
      {
        src: '/images/products/mengmengda-front.png',
        alt: 'MengMengDa III claw machine viewed from the front',
        caption:
          'Clear acrylic play chamber with a fine-grid interior for easy prize visibility from every angle.',
      },
      {
        src: '/images/products/mengmengda-side.png',
        alt: 'MengMengDa III claw machine viewed from the side',
        caption:
          'Slim side profile makes it easy to fit against a wall or between neighboring machines.',
      },
      {
        src: '/images/products/mengmengda-dims.jpg',
        alt: 'MengMengDa III dimension diagram, 81 by 85 by 201 centimeters',
        caption: 'Full cabinet footprint: 81 × 85 × 201 cm.',
      },
    ],
  },
  {
    slug: 'roll2win',
    name: 'Roll2Win Prize Roller',
    image: '/images/products/roll2win-front.jpg',
    bestFor: 'Arcades, family entertainment centers',
    description:
      'A dual-player roll-and-win prize machine stocked with plush toys and novelty prizes, built for side-by-side play and steady repeat engagement.',
    dimensions: '113 × 180 × 247 cm',
    glow: '#38bdf8',
    angles: [
      {
        src: '/images/products/roll2win-left.jpg',
        alt: 'Roll2Win prize roller viewed from the left side',
      },
      {
        src: '/images/products/roll2win-front.jpg',
        alt: 'Roll2Win prize roller viewed from the front',
      },
      {
        src: '/images/products/roll2win-right.jpg',
        alt: 'Roll2Win prize roller viewed from the right side',
      },
    ],
    gallery: [
      {
        src: '/images/products/roll2win-left.jpg',
        alt: 'Roll2Win prize roller viewed from the left side',
        caption:
          'Twin roll lanes each stock plush toys, novelties, and a lucky-ball prize wheel.',
      },
      {
        src: '/images/products/roll2win-front.jpg',
        alt: 'Roll2Win prize roller viewed from the front',
        caption:
          'Bright marquee lighting and dual coin/bill acceptors keep two players moving at once.',
      },
      {
        src: '/images/products/roll2win-right.jpg',
        alt: 'Roll2Win prize roller viewed from the right side',
        caption: 'Side branding panel and prize-out chutes on both lanes.',
      },
      {
        src: '/images/products/roll2win-dims.jpg',
        alt: 'Roll2Win dimension diagram, 113 by 180 by 247 centimeters',
        caption: 'Full cabinet footprint (2-player version): 113 × 180 × 247 cm.',
      },
    ],
  },
  {
    slug: 'colorful-alliance',
    name: 'Colorful Alliance Crane',
    image: '/images/products/alliance-front.jpg',
    bestFor: 'Arcades, malls, claw machine stores',
    description:
      'A full-size crane with holographic rainbow panels and a spacious prize bed, designed to be a bold visual anchor on any showroom floor.',
    dimensions: '85 × 80 × 205 cm',
    glow: '#f472b6',
    angles: [
      {
        src: '/images/products/alliance-front.jpg',
        alt: 'Colorful Alliance claw machine viewed from the front',
      },
      {
        src: '/images/products/alliance-angle.jpg',
        alt: 'Colorful Alliance claw machine viewed from an angle',
      },
    ],
    gallery: [
      {
        src: '/images/products/alliance-front.jpg',
        alt: 'Colorful Alliance claw machine viewed from the front',
        caption:
          'Holographic rainbow side panels shift color as guests walk past, drawing attention from across the floor.',
      },
      {
        src: '/images/products/alliance-angle.jpg',
        alt: 'Colorful Alliance claw machine viewed from an angle',
        caption:
          'Wide prize bed and single-joystick control panel with a lit "Prize Out" chute.',
      },
      {
        src: '/images/products/alliance-dims.jpg',
        alt: 'Colorful Alliance dimension diagram, 85 by 80 by 205 centimeters',
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
