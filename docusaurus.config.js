// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "tauOS Documentation Portal",
  tagline: "Learn more about your tauOS system",
  url: "https://docs.tauos.co",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",
  organizationName: "tau-OS",
  projectName: "docs",
  deploymentBranch: "gh-pages",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/tau-OS/docs/blob/main/",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/main.css"),
            require.resolve("./src/css/fonts.css"),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "tauOS Documentation Portal",
        logo: {
          alt: "tauOS Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://tauos.co",
            label: "tauos.co",
            position: "left",
          },
          {
            href: "https://github.com/tau-OS",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Human Interface Guidelines",
                to: "/docs/hig",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/5fdPuxTg5Q",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/tauOS_",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/tau-OS",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fyra Labs. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ini", "vala"],
      },
    }),
};

module.exports = config;
