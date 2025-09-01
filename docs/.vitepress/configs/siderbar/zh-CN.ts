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
            {
              text: "语言",
              collapsed: false,
              items:
              [ {text: "zh_CN.yml", link: "/AstraXHero/配置/语言/zh_CN.yml"} ]
            },
            { text: "config.yml", link: `/AstraXHero/配置/config.yml` },
            { text: "settings.yml", link: `/AstraXHero/配置/setting.yml` },
          ],
        },
        {
          text: "属性系统",
          collapsed: false,
          items: [
            { text: "属性类型", link: `/AstraXHero/属性系统/属性类型` },
            {
              text: "脚本教学",
              collapsed: false,
              items: [
                {text: "前言", link: `/AstraXHero/属性系统/脚本教学/前言`},
                {text: "ATTACK", link: `/AstraXHero/属性系统/脚本教学/ATTACK`},
                {text: "DEFENSE", link: `/AstraXHero/属性系统/脚本教学/DEFENSE`},
                {text: "UPDATE  ", link: `/AstraXHero/属性系统/脚本教学/UPDATE`},
                {text: "RUNTIME  ", link: `/AstraXHero/属性系统/脚本教学/RUNTIME`},
              ]
            },
          ],
        },
        {
          text: "条件系统",
          collapsed: false,
          items: [
            { text: "物品槽条件", link: `/AstraXHero/条件系统/物品槽条件` },
            { text: "脚本条件", link: `/AstraXHero/条件系统/脚本条件` },
          ],
        },
        {
          text: "MythicMobs",
          collapsed: false,
          items: [
            {
              text: "MythicMobs兼容",
              link: `/AstraXHero/MythicMobs/MythicMobs兼容`,
            },
          ],
        },
        {
          text: "开发者文档",
          collapsed: false,
          items: [
            { text: "Manager", 
              collapsed: false,  
              items: [
                { text: "待完善", link: `/AstraXHero/开发者文档/Manager/待完善` },
              ]
            },
            { text: "AttributeAPI", link: `/AstraXHero/开发者文档/AttributeAPI` },
            { text: "CalculateUtils", link: `/AstraXHero/开发者文档/CalculateUtils` },
            { text: "Coerce", link: `/AstraXHero/开发者文档/Coerce` },
            { text: "Color", link: `/AstraXHero/开发者文档/Color` },
            { text: "Log", link: `/AstraXHero/开发者文档/Log` },
            { text: "NumberUtils", link: `/AstraXHero/开发者文档/NumberUtils` },
            { text: "ScriptTool", link: `/AstraXHero/开发者文档/ScriptTool` },
          ],
        },
        { text: "更新记录", link: `/AstraXHero/更新记录` },
      ],
    },
  ],
};
