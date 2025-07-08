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
          ],
        },
        {
          text: "属性系统",
          collapsed: false,
          items: [
            { text: "属性类型", link: `/AstraXHero/属性系统/属性类型` },
            { text: "伤害体系", link: `/AstraXHero/属性系统/伤害体系` },
            { text: "脚本系统", link: `/AstraXHero/属性系统/脚本系统` },
            { text: "属性实现", link: `/AstraXHero/属性系统/属性实现` },
          ],
        },
        {
          text: "条件系统",
          collapsed: false,
          items: [
            { text: "物品槽条件", link: `/AstraXHero/条件系统/物品槽条件` },
          ],
        },
        { text: "Placeholder", link: `/AstraXHero/Placeholder` },
      ],
    },
  ],
};
