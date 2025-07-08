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
          items: [
            { text: "config.yml", link: `/AstraXHero/配置/config.yml` },
            { text: "settings.yml", link: `/AstraXHero/配置/setting.yml` },
            { text: "message.yml", link: `/AstraXHero/配置/message.yml` },
            { text: "slots.yml", link: `/AstraXHero/配置/slots.yml` },
          ],
        },
        {
          text: "属性系统",
          collapsed: false,
          items: [
            { text: "属性类型", link: `/AstraXHero/属性系统/属性类型` },
            { text: "伤害体系", link: `/AstraXHero/属性系统/伤害体系` },
          ],
        },
      ],
    },
  ],
};
