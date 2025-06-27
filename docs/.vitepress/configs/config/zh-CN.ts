import { zhCNNav } from "../navbar";
import { zhCNSidebar } from "../siderbar";
import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const zhCNConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    lastUpdated: {
      text: "最后更新时间",
    },
    returnToTopLabel: "返回顶部",
    darkModeSwitchLabel: "外观",
    sidebarMenuLabel: "菜单",
    langMenuLabel: "语言",
    // 导航栏
    nav: zhCNNav,
    // 侧边栏
    sidebar: zhCNSidebar,
    logo: "/images/homelogo.png",
    outline: {
      level: [2, 3],
      label: "目录",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
};
