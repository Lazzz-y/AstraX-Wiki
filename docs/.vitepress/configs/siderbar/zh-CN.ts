import { DefaultTheme } from "vitepress";

export const zhCNSidebar: DefaultTheme.Sidebar = {
  "/": [
    {
      text: "AstraXHero",
      collapsed: false,
      items: [
        { text: "简介", link: `/AstraXHero/简介` },
        {
          text: "配置",
          collapsed: false,
          items: [{ text: "config.yml", link: `/AstraXHero/配置/config.yml` }],
        },
      ],
    },
  ],
};
