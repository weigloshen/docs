import { defineConfig } from "vitepress";
import { editLink } from "./editLink";
import { nav } from "./nav";
import { sidebar } from "./sidebar";
import { footer } from "./footer";
import { docFooter } from "./docFooter";
// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  base:"/docs/",
  title: "海绵宝宝的博客",
  titleTemplate: false,
  head: [
    ["link", { rel: "icon", href: "/spongebob.svg" }],
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ],
  lastUpdated: true,
  description: "vitePress blog vite vue3 typescript",
  themeConfig: {
    siteTitle: "Wss Custom",
    logo: "/spongebob.svg",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ZhouYue8/myvitepress",
      },
      { icon: "twitter", link: "..." },
    ],
    docFooter,
    nav,
    sidebar,
    editLink,
    lastUpdatedText: "最近更新时间",
    footer,
    algolia: {
      appId: "WAULINOZOU", // 需要替换
      apiKey: "9f92305e48b858b922300967ccde9b23", // 需要替换
      indexName: "SpongeBob", // 需要替换
      placeholder: "请输入关键词",
    },
  },
});
