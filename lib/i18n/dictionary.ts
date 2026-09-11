import type { Language } from '@/lib/i18n/language-context'

export const NAV_ITEMS = [
  { href: '/#home', key: 'navHome' },
  { href: '/#machines', key: 'navMachines' },
  { href: '/#business', key: 'navBusiness' },
  { href: '/#about', key: 'navAbout' },
  { href: '/#contact', key: 'navContact' },
] as const

export type NavKey = (typeof NAV_ITEMS)[number]['key']

export const dictionary = {
  en: {
    header: {
      navHome: 'Home',
      navMachines: 'Machines',
      navBusiness: 'Business Opportunity',
      navAbout: 'About',
      navContact: 'Contact',
      requestInfo: 'Request Info',
      menu: 'Menu',
    },
    hero: {
      badge: 'Commercial claw machines · United States',
      headingPrefix: 'Claw machines built to',
      headingHighlight: 'keep your floor busy',
      subheading:
        'Commercial-grade cranes for arcades, malls, and family entertainment centers — reliable, eye-catching, and easy to run.',
      ctaPrimary: 'Request Product Information',
      ctaSecondary: 'Contact Us',
    },
    about: {
      heading: 'Claw Machines Built for Commercial Use',
      description:
        'Our claw machines are designed for high-traffic commercial locations, including arcades, malls, family entertainment centers, trampoline parks, bowling centers, restaurants, and entertainment venues. We focus on machines that are attractive, reliable, and easy for operators to manage.',
      points: [
        'Commercial-grade machines',
        'Attractive LED design',
        'Multiple machine styles available',
        'Suitable for arcades, malls, and indoor entertainment centers',
        'Great for increasing guest engagement and extra revenue',
        'Product photos and renderings available upon request',
      ],
    },
    machines: {
      heading: 'Available Claw Machine Options',
      description:
        'A selection of commercial machines for different locations and budgets. Reach out for full specs, photos, and pricing.',
      bestFor: 'Best for',
      dimensions: 'Dimensions',
      seeMore: 'See More',
    },
    business: {
      heading: 'Start or Expand Your Claw Machine Business',
      description:
        'Claw machines are a popular attraction for entertainment venues and retail spaces. They can help create repeat play, increase guest spending, and add visual energy to your location. We can support operators who want to open a claw machine store or add machines to an existing business.',
      audiences: [
        'Mall owners',
        'Arcade operators',
        'Family entertainment centers',
        'Trampoline parks',
        'Restaurant owners',
        'Bowling centers',
        'Retail space operators',
        'Investors interested in claw machine stores',
      ],
      cta: 'Talk to Us About Your Location',
    },
    whyUs: {
      heading: 'Why Choose Us',
      reasons: [
        {
          title: 'Commercial Focus',
          body: 'We understand indoor entertainment, arcade operations, and guest experience.',
        },
        {
          title: 'U.S. Market Support',
          body: 'We help operators understand what types of claw machines may work for their business.',
        },
        {
          title: 'Multiple Machine Options',
          body: 'Different sizes, styles, and layouts are available depending on the location.',
        },
        {
          title: 'Operator-Friendly Setup',
          body: 'Our goal is to make the buying process simple and clear for business owners.',
        },
      ],
    },
    contact: {
      heading: 'Request Claw Machine Information',
      description:
        'Tell us about your location and what type of claw machine setup you are looking for. We will contact you with more information.',
      servingPrefix: 'Serving the',
      formName: 'Name',
      formCompany: 'Company Name',
      formPhone: 'Phone Number',
      formEmail: 'Email Address',
      formLocation: 'City / State',
      formBusinessType: 'Business Type',
      formBusinessTypePlaceholder: 'Select business type',
      formQuantity: 'How many machines are you interested in?',
      formMessage: 'Message',
      formMessagePlaceholder:
        "Tell us about your location and the type of setup you're looking for.",
      submit: 'Submit Request',
      submitting: 'Submitting…',
      successToast:
        'Thank you. We received your request and will contact you soon.',
      genericErrorToast: 'Something went wrong. Please try again or call us.',
      businessTypes: [
        'Arcade',
        'Mall / Shopping Center',
        'Family Entertainment Center',
        'Trampoline Park',
        'Restaurant',
        'Bowling Center',
        'Investor / New Business',
        'Other',
      ],
    },
    footer: {
      explore: 'Explore',
      contact: 'Contact',
      requestInformation: 'Request information',
      serviceArea: 'Service area',
      backToTop: 'Back to top',
      rightsReserved: 'All rights reserved.',
    },
    productPage: {
      backToMachines: '← Back to all machines',
      bestFor: 'Best for',
      dimensions: 'Dimensions',
      askForDetails: 'Ask for Details',
      photosAndSpecs: 'Photos & Specs',
      interestedInPrefix: 'Interested in the',
      interestedInSuffix: '?',
      followUp:
        'Tell us about your location and we will follow up with full specs, pricing, and lead times.',
    },
  },
  zh: {
    header: {
      navHome: '首页',
      navMachines: '娃娃机',
      navBusiness: '商业合作',
      navAbout: '关于我们',
      navContact: '联系我们',
      requestInfo: '获取信息',
      menu: '菜单',
    },
    hero: {
      badge: '商用娃娃机 · 美国',
      headingPrefix: '商用娃娃机，助您',
      headingHighlight: '持续吸引顾客',
      subheading:
        '专为街机厅、商场和家庭娱乐中心打造的商用级抓娃娃机——坚固耐用、吸睛亮眼、操作简单。',
      ctaPrimary: '获取产品资料',
      ctaSecondary: '联系我们',
    },
    about: {
      heading: '专为商业场所打造的娃娃机',
      description:
        '我们的娃娃机专为高客流商业场所设计，包括街机厅、商场、家庭娱乐中心、蹦床公园、保龄球馆、餐厅和娱乐场所。我们专注于打造美观、可靠且便于运营方管理的机器。',
      points: [
        '商用级机器',
        '吸睛的 LED 灯光设计',
        '多种机型可选',
        '适用于街机厅、商场和室内娱乐中心',
        '有效提升顾客互动与额外收入',
        '可提供产品照片和效果图',
      ],
    },
    machines: {
      heading: '可选娃娃机型号',
      description:
        '为不同场地和预算提供多种商用机型。欢迎联系获取完整规格、照片和报价。',
      bestFor: '适用于',
      dimensions: '尺寸',
      seeMore: '查看更多',
    },
    business: {
      heading: '开启或扩展您的娃娃机业务',
      description:
        '娃娃机是娱乐场所和零售空间深受欢迎的项目，能够带来重复消费、提升顾客消费金额，并为场地增添视觉活力。无论您是想开设娃娃机专卖店，还是在现有业务中增设机器，我们都能提供支持。',
      audiences: [
        '商场业主',
        '街机厅经营者',
        '家庭娱乐中心',
        '蹦床公园',
        '餐厅业主',
        '保龄球馆',
        '零售空间经营者',
        '有意投资娃娃机店的投资者',
      ],
      cta: '咨询您的场地合作方案',
    },
    whyUs: {
      heading: '为什么选择我们',
      reasons: [
        {
          title: '专注商业领域',
          body: '我们深刻理解室内娱乐、街机运营和顾客体验。',
        },
        {
          title: '美国市场支持',
          body: '我们帮助运营方了解哪种娃娃机型号最适合自身业务。',
        },
        {
          title: '多种机型可选',
          body: '根据场地不同，提供多种尺寸、风格和布局的机型。',
        },
        {
          title: '运营方友好的购买流程',
          body: '我们致力于让购买流程对业主来说简单清晰。',
        },
      ],
    },
    contact: {
      heading: '获取娃娃机详细信息',
      description:
        '请告诉我们您的场地情况以及所需的娃娃机配置，我们会尽快与您联系并提供详细信息。',
      servingPrefix: '服务范围：',
      formName: '姓名',
      formCompany: '公司名称',
      formPhone: '电话号码',
      formEmail: '电子邮箱',
      formLocation: '所在城市/州',
      formBusinessType: '业务类型',
      formBusinessTypePlaceholder: '请选择业务类型',
      formQuantity: '您需要多少台机器？',
      formMessage: '留言',
      formMessagePlaceholder: '请告诉我们您的场地情况以及所需的配置类型。',
      submit: '提交请求',
      submitting: '提交中…',
      successToast: '感谢您的提交，我们已收到您的请求，将尽快与您联系。',
      genericErrorToast: '出现错误，请重试或直接致电我们。',
      businessTypes: [
        '街机厅',
        '商场/购物中心',
        '家庭娱乐中心',
        '蹦床公园',
        '餐厅',
        '保龄球馆',
        '投资者/新业务',
        '其他',
      ],
    },
    footer: {
      explore: '快速链接',
      contact: '联系方式',
      requestInformation: '获取信息',
      serviceArea: '服务范围',
      backToTop: '返回顶部',
      rightsReserved: '版权所有。',
    },
    productPage: {
      backToMachines: '← 返回所有机型',
      bestFor: '适用于',
      dimensions: '尺寸',
      askForDetails: '咨询详情',
      photosAndSpecs: '照片与规格',
      interestedInPrefix: '对',
      interestedInSuffix: '感兴趣？',
      followUp:
        '请告诉我们您的场地情况，我们会跟进提供完整规格、报价和交付时间。',
    },
  },
} as const satisfies Record<Language, unknown>

export type Dictionary = (typeof dictionary)['en']
