// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
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

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ProBotOrg', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'fr', 'tr'],
    localeConfigs: {
      en: {
        htmlLang: 'en',
      },
      // You can omit a locale (e.g. ar) if you don't need to override the defaults
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ProBotOrg/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ProBotOrg/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'Z27HQGOQQQ',
        apiKey: '2d6650a9a6362a5661c602fe41e1f013',
        indexName: 'ProBot-Docs',
      },
      navbar: {
        title: 'ProBot Docs',
        logo: {
          alt: 'ProBot Docs',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
