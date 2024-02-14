import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Docs | Marktag SDK",
  description: "The documentation site for marktag sdk ",
  base: "/marktag-docs/",
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: "https://markopolo-inc.github.io/marktag-docs",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is MarkTag?", link: "/introduction/introduction" },
          { text: "Getting started", link: "/introduction/getting-started" },
        ],
      },
      {
        text: "Log Events",
        items: [
          { text: "Identify user", link: "/log-events/identify-user" },
          { text: "Automatic logging", link: "/log-events/automatic-logging" },
          { text: "Manual logging", link: "/log-events/manual-logging" },
        ],
      },
      {
        text: "Compliance",
        items: [
          {
            text: "Data collection and usage",
            link: "/compliance/data-collection-and-usage.md",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/markopolo-inc/marktag-docs" },
    ],
  },
});
