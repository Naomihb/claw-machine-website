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
  // Simplified Chinese translation of `caption`.
  captionZh: string
}

export type Product = {
  slug: string
  name: string
  image: string
  bestFor: string
  // Simplified Chinese translation of `bestFor`.
  bestForZh: string
  description: string
  // Simplified Chinese translation of `description`.
  descriptionZh: string
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
    bestForZh: '商场、家庭娱乐中心',
    description:
      'A clean, bright single-player Vega Claw cabinet with a playful "Nice Day" mascot graphic and a clear acrylic play chamber — an approachable, family-friendly look that fits tight footprints without losing shelf appeal.',
    descriptionZh:
      '简洁明亮的单人款 Vega Claw 娃娃机，搭配俏皮的 "Nice Day" 吉祥物图案与透明亚克力游戏舱——亲和的家庭友好外观，占地小巧也不失货架吸引力。',
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
        captionZh:
          '透明亚克力游戏舱配合细网格内饰，搭配明亮的 "Nice Day" 吉祥物图案，方便顾客清晰查看礼品。',
      },
      {
        src: '/images/products/mengmengda-side.png',
        alt: 'Vega Claw Nice Day machine viewed from an angle',
        caption:
          'Slim footprint makes it easy to fit against a wall or between neighboring machines.',
        captionZh: '纤薄机身便于靠墙摆放或与相邻机器紧密排列。',
      },
      {
        src: '/images/products/mengmengda-dims.jpg',
        alt: 'Vega Claw Nice Day dimension diagram, 81 by 85 by 201 centimeters',
        caption: 'Full cabinet footprint: 81 × 85 × 201 cm.',
        captionZh: '整机占地尺寸：81 × 85 × 201 厘米。',
      },
    ],
  },
  {
    slug: 'roll2win',
    name: 'Roll2Win Vega Claw',
    image: '/images/products/roll2win-front.jpg',
    bestFor: 'Arcades, family entertainment centers',
    bestForZh: '街机厅、家庭娱乐中心',
    description:
      'A dual-player roll-and-win Vega Claw prize machine stocked with plush toys and novelty prizes, built for side-by-side play and steady repeat engagement.',
    descriptionZh:
      '双人对战式 Vega Claw 滚球夺礼机，内置毛绒玩具和各类小礼品，支持双人并肩游戏，带来持续的重复消费。',
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
        captionZh:
          '双滚球赛道分别配备毛绒玩具、新奇礼品和幸运球礼品转盘，顶部灯箱招牌醒目明亮。',
      },
      {
        src: '/images/products/roll2win-left.jpg',
        alt: 'Roll2Win Vega Claw machine viewed from an angle',
        caption:
          'Dual coin/bill acceptors and side branding keep two players moving at once.',
        captionZh: '双投币/纸币收纳口设计，方便两名玩家同时游戏。',
      },
      {
        src: '/images/products/roll2win-dims.jpg',
        alt: 'Roll2Win Vega Claw dimension diagram, 113 by 180 by 247 centimeters',
        caption: 'Full cabinet footprint (2-player version): 113 × 180 × 247 cm.',
        captionZh: '整机占地尺寸（双人版）：113 × 180 × 247 厘米。',
      },
    ],
  },
  {
    slug: 'colorful-alliance',
    name: 'Vega Claw – Colorful Sky',
    image: '/images/products/alliance-front.jpg',
    bestFor: 'Arcades, malls, claw machine stores',
    bestForZh: '街机厅、商场、娃娃机专卖店',
    description:
      'A full-size Vega Claw cabinet with a vivid rainbow-lit play chamber and a spacious prize bed, designed to be a bold visual anchor on any showroom floor.',
    descriptionZh:
      '大型 Vega Claw 娃娃机，配备炫彩灯光游戏舱和宽敞的礼品仓，是卖场地板上引人注目的视觉焦点。',
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
        captionZh: '炫彩灯光游戏舱随顾客走动变换色彩，从远处就能吸引目光。',
      },
      {
        src: '/images/products/alliance-angle.jpg',
        alt: 'Vega Claw Colorful Sky machine viewed from an angle',
        caption:
          'Wide prize bed and single-joystick control panel with a lit "Prize Out" chute.',
        captionZh: '宽敞礼品仓与单摇杆控制面板，配备明亮的 "出礼口" 提示灯。',
      },
      {
        src: '/images/products/alliance-dims.jpg',
        alt: 'Vega Claw Colorful Sky dimension diagram, 85 by 80 by 205 centimeters',
        caption: 'Full cabinet footprint: 85 × 80 × 205 cm.',
        captionZh: '整机占地尺寸：85 × 80 × 205 厘米。',
      },
    ],
  },
  {
    slug: 'whac-a-mole',
    name: 'Whac-A-Mole Challenge',
    image: '/images/products/whac-a-mole-front.png',
    bestFor: 'Family entertainment centers, trampoline parks',
    bestForZh: '家庭娱乐中心、蹦床公园',
    description:
      'A two-player, light-up Whac-A-Mole cabinet with ticket rewards — a high-energy attraction that keeps groups playing together.',
    descriptionZh:
      '双人对战式打地鼠机，配备灯光效果与彩票奖励——高能量项目，让团体玩家一起畅玩。',
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
        captionZh: '八个灯光地鼠洞配软质锤子，双人可并肩竞技。',
      },
      {
        src: '/images/products/whac-a-mole-front.png',
        alt: 'Whac-A-Mole cabinet viewed from the front',
        caption:
          'Digital scoreboard and licensed character graphics add extra draw for younger guests.',
        captionZh: '数字计分板与授权卡通图案，更能吸引年轻顾客。',
      },
      {
        src: '/images/products/whac-a-mole-right.png',
        alt: 'Whac-A-Mole cabinet viewed from the right side',
        caption: 'Ticket dispenser and coin mechanism built into the side panel.',
        captionZh: '彩票出票口与投币装置内置于侧面板。',
      },
    ],
  },
]

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}
