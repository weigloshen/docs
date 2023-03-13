import { DefaultTheme } from "vitepress";
import HTMLitem from "../front/html";
import JavascriptItem from "../front/javascript"
import Vue2Item from "../front/vue2";
import Vue3Item from "../front/vue3";
import RustItem from "../rust/md"
export const sidebar: DefaultTheme.Sidebar = {
  "/front/": [
    {
      text: "前言",
      items: [],
    },
    {
      text: "基础面试题",
      items: [
        HTMLitem,
        {
          text: "CSS",
          link: "/front/css/",
        },
        JavascriptItem,
        Vue2Item,
        Vue3Item
      ],
    },
  ],
  // This sidebar gets displayed when user is under `config` directory.
  "/menu/item-1": [
    {
      text: "Config",
      items: [
        // This shows `/config/index.md` page.
        { text: "Index", link: "/config/" }, // /config/index.md
        { text: "Three", link: "/config/three" }, // /config/three.md
        { text: "Four", link: "/config/four" }, // /config/four.md
      ],
    },
  ],
  "/rust/":[
    {
      text: "前言",
      items:[]
    },
    {
      text: "Rust基础学习",
      items:RustItem
    },
  ]
};
