import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Incio',
      href: getPermalink('/'),
      // links: [
      //   {
      //     text: 'SaaS',
      //     href: getPermalink('/homes/saas'),
      //   },
      //   {
      //     text: 'Startup',
      //     href: getPermalink('/homes/startup'),
      //   },
      //   {
      //     text: 'Mobile App',
      //     href: getPermalink('/homes/mobile-app'),
      //   },
      //   {
      //     text: 'Personal',
      //     href: getPermalink('/homes/personal'),
      //   },
      // ],
    },
    {
      text: 'Sobre Nosotros',
      href: getPermalink('/sobre-nosotros'),
    },
    {
      text: 'Servicios',
      href: getPermalink('/servicios'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
        
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
        
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  actions: [{ text: '!Contacta ahora!', href: '/contacto', target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Servicios Contables',
      links: [
        { text: 'Asesoría Contable', href: '#' },
        { text: 'Asesoría Tributaria', href: '#' },
        { text: 'Elaboración de Estados Financienros', href: '#' },
        { text: 'Declaración de IGV y Renta', href: '#' },
        { text: 'Declaración de Planillas', href: '#' },
      ],
    },
    {
      title: 'Servicios Legales',
      links: [
        { text: 'Constitución de Empresas', href: '#' },
        { text: 'Asesoría Laboral', href: '#' },
        { text: 'Elaboración de Cartas', href: '#' },
        { text: 'Cobranzas  judiciales', href: '#' },
      ],
    },
    {
      title: 'Asesoría Financiera',
      links: [
        { text: 'Elaboracion de Balances Financieros', href: '#' },
        { text: 'Declaración Anual del Impuesto a la Renta', href: '#' },
        { text: 'Declaracion ITAN', href: '#' },
        { text: 'Tramites de fiscalizacion de SUNAFIL', href: '#' },
        { text: 'Representación ante fiscalizaciones tributarias y laboral', href: '#' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'Jr. Cidras 1233 Urb. Los Jardines, San Juan de Lurigancho, Lima, Perú', href: '#' },
        { text: '+51 958 826 413', href: '#' },
        { text: '+51 959 965 937', href: '#' },
        { text: '+51 994 544 208', href: '#' },
        { text: '+51 908 847 946', href: '#' },
        { text: 'info@dajhorsaperu.com', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="Kodepe logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" target="_blank" href="https://kodepe.com/"> KodePe</a> · All rights reserved.
  `,
};
