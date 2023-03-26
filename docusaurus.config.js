const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ProBot Docs',
  tagline: 'ProBot Docs',
  url: 'https://docs.probot.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ProBotOrg',
  projectName: 'docs',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'fr', 'tr', 'vi', 'ru'],
    localeConfigs: {
      ar: {
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/ProBotOrg/docs/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false,
        gtag: {
          trackingID: 'G-D4J7KG79HW',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: 'BWE1MS63HY',
        apiKey: '815249683b18febc9f81ffb305465b9f',
        indexName: 'probot',
        contextualSearch: true,
        aggregateContent: true,
      },
      image: 'img/probot_docs.png',
      navbar: {
        title: 'ProBot Docs',
        logo: {
          alt: 'ProBot Docs',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Introduction',
          },
          {to: 'https://probot.io/dashboard', label: 'Dashboard', position: 'left'},
          {to: 'https://discord.com/invite/ProBot', label: 'Contact support', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'ProBot brand logo',
          src: 'img/logo.png',
          width: 130,
          height: 130,
        },

        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/probot',
              },
              {
                label: 'Reddit',
                href: 'https://reddit.com/r/probot',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/intent/follow?screen_name=tryProBot',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Commands',
                href: 'https://probot.io/commands',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ProBot, Inc. Built with Docusaurus.`,
      },
      prism: {
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;