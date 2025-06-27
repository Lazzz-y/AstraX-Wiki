import { enUSNav } from "../navbar";
import { enUSSidebar } from "../siderbar";
import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const enUSConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    lastUpdated: {
      text: "last updated",
    },
    returnToTopLabel: "Return to top",
    darkModeSwitchLabel: "Appearance",
    sidebarMenuLabel: "Menu",
    langMenuLabel: "Language",
    // 导航栏
    nav: enUSNav,
    // 侧边栏
    sidebar: enUSSidebar,
    logo: "/images/homelogo.png",
    outline: {
      level: [2, 3],
      label: "CONTENTS",
    },
    docFooter: {
      prev: "Previous page",
      next: "Next page",
    },
  },
};
