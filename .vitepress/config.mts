import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Markopolo Documentation",
  description: "Documentation for MarkTag SDK and Partners API",
  base: "/marktag-docs/",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  sitemap: {
    hostname: "https://markopolo-inc.github.io/marktag-docs",
  },
  head: [['link', { rel: 'icon', href: '/marktag-docs/logo.svg' }]],
  transformHead: (ctx) => {
      ctx.pageData.frontmatter.head ??= []
      ctx.pageData.frontmatter.head.push([
        'meta',
        {
          name: 'og:image',
          content: 'https://i.ytimg.com/vi/bj9MFc6p3uM/maxresdefault.jpg'
        }
    ])
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "MarkTag SDK", link: "/sdk/" },
      { text: "Partners API", link: "/partners-api/" }
    ],
    search: {
      provider: "local",
    },
    logo: {
      src: "/logo.svg",
      width: 24,
      height: 24,
    },
    editLink: {
      pattern: "https://github.com/markopolo-inc/marktag-docs/edit/main/:path",
      text: "Edit this page on GitHub",
    },
    // Multiple sidebars based on path
    sidebar: {
      // SDK Documentation Sidebar
      '/sdk/': [
        {
          text: "Getting Started",
          items: [
            { text: "Overview", link: "/sdk/" },
            { text: "What is MarkTag?", link: "/sdk/introduction/introduction" },
            { text: "Quick Start", link: "/sdk/introduction/getting-started" },
          ],
        },
        {
          text: "Web SDK",
          collapsed: false,
          items: [
            { text: "Installation", link: "/sdk/web-sdk/installation" },
            { text: "Usage", link: "/sdk/web-sdk/usage" },
          ],
        },
        {
          text: "Mobile SDKs",
          collapsed: false,
          items: [
            {
              text: "React Native",
              collapsed: true,
              items: [
                { text: "Installation", link: "/sdk/react-native/installation" },
                { text: "Identify User", link: "/sdk/react-native/identify-user" },
                { text: "Usage", link: "/sdk/react-native/usage" },
              ],
            },
            {
              text: "Flutter",
              collapsed: true,
              items: [
                { text: "Installation", link: "/sdk/flutter/installation" },
                { text: "Identify User", link: "/sdk/flutter/identify-user" },
                { text: "Usage", link: "/sdk/flutter/usage" },
              ],
            },
          ],
        },
        {
          text: "Game SDKs",
          collapsed: false,
          items: [
            {
              text: "Unity",
              collapsed: true,
              items: [
                { text: "Installation", link: "/sdk/unity-sdk/installation" },
                { text: "Identify User", link: "/sdk/unity-sdk/identify-user" },
                { text: "Usage", link: "/sdk/unity-sdk/usage" },
              ],
            },
          ],
        },
        {
          text: "Server Integration",
          collapsed: false,
          items: [
            {
              text: "REST API",
              collapsed: true,
              items: [
                { text: "Prerequisites", link: "/sdk/rest-api/prerequisites" },
                { text: "Example", link: "/sdk/rest-api/example" },
                { text: "Usage", link: "/sdk/rest-api/usage" },
              ],
            },
          ],
        },
      ],

      // Partners API Documentation Sidebar
      '/partners-api/': [
        {
          text: "Getting Started",
          items: [
            { text: "Welcome", link: "/partners-api/" },
            { text: "Overview", link: "/partners-api/overview" },
            { text: "Authentication", link: "/partners-api/authentication" },
            { text: "Quick Start", link: "/partners-api/getting-started" },
          ],
        },
        {
          text: "API Reference",
          collapsed: false,
          items: [
            { text: "Overview", link: "/partners-api/endpoints/" },
            { text: "Merchants", link: "/partners-api/endpoints/merchants" },
            { text: "MarkTag", link: "/partners-api/endpoints/marktag" },
            { text: "Events", link: "/partners-api/endpoints/events" },
          ],
        },
        {
          text: "Resources",
          collapsed: false,
          items: [
            { text: "Code Examples", link: "/partners-api/examples" },
          ],
        },
      ],

      // Default sidebar for other pages (if any)
      '/': [
        {
          text: "Documentation",
          items: [
            { text: "Home", link: "/" },
            { text: "MarkTag SDK", link: "/sdk/" },
            { text: "Partners API", link: "/partners-api/" },
          ],
        },
      ],
    },
    footer: {
      copyright: "Copyright © 2019-present Markopolo AI",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/markopolo-inc/marktag-docs" },
    ],
  },
});