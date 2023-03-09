import { DefaultTheme } from "vitepress";
import HTMLitem from "../front/html";
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
};
