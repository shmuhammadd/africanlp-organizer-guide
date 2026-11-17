// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const repo = 'https://github.com/shmuhammadd/africanlp-organizer-guide';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Organising AfricaNLP',
  tagline: 'How to run the AfricaNLP workshop, from proposal to proceedings.',
  favicon: 'img/logo.svg',

  url: 'https://shmuhammadd.github.io',
  baseUrl: '/africanlp-organizer-guide/',
  organizationName: 'shmuhammadd',
  projectName: 'africanlp-organizer-guide',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {onBrokenMarkdownLinks: 'warn'},
  },

  i18n: {defaultLocale: 'en', locales: ['en']},

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: `${repo}/tree/main/`,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {respectPrefersColorScheme: true},
      navbar: {
        title: 'Organising AfricaNLP',
        logo: {alt: 'Organising AfricaNLP', src: 'img/logo.svg'},
        items: [
          {type: 'docSidebar', sidebarId: 'guide', position: 'left', label: 'Chapters'},
          {to: '/chapters/timeline', label: 'Timeline', position: 'left'},
          {to: '/templates/', label: 'Templates', position: 'left'},
          {href: repo, label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Guide',
            items: [
              {label: 'Start here', to: '/'},
              {label: 'Timeline', to: '/chapters/timeline'},
              {label: 'OpenReview setup', to: '/chapters/openreview'},
            ],
          },
          {
            title: 'AfricaNLP',
            items: [
              {label: 'AfricaNLP 2027', href: 'https://africanlp.github.io/2027/home'},
              {label: 'Masakhane', href: 'https://www.masakhane.io'},
              {label: 'ACL Anthology', href: 'https://aclanthology.org'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AfricaNLP organisers. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['json', 'bash'],
      },
    }),
};

export default config;
