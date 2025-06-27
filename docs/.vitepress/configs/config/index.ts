import { defineConfig } from "vitepress";
import { head } from "../head";
import timeline from "vitepress-markdown-timeline";

import { loadEnv } from "vite";

const mode = process.env.NODE_ENV || "development";
const { VITE_BASE_URL } = loadEnv(mode, process.cwd());

export const sharedConfig = defineConfig({
  // 设置默认首页重定向
  rewrites: {
    // "index.md": "zh/index.md",
    "zh-CN/:rest*": ":rest*",
  },

  description: "AstraX 帮助文档",
  base: VITE_BASE_URL,
  appearance: true,
  head,
  lastUpdated: true,
  vite: {
    build: {
      chunkSizeWarningLimit: 1600,
    },
    plugins: [],
    server: {
      port: 18089,
    },
  },
  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    config: (md) => {
      md.use(timeline);
    },
  },
  themeConfig: {
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Search",
                buttonAriaLabel: "Search",
              },
              modal: {
                displayDetails: "Display detailed list",
                resetButtonTitle: "Reset search",
                backButtonTitle: "Close search",
                noResultsText: "No results for",
                footer: {
                  selectText: "to select",
                  selectKeyAriaLabel: "enter",
                  navigateText: "to navigate",
                  navigateUpKeyAriaLabel: "up arrow",
                  navigateDownKeyAriaLabel: "down arrow",
                  closeText: "to close",
                  closeKeyAriaLabel: "escape",
                },
              },
            },
          },
        },
      },
    },
    logo: "/images/homelogo.png",
  },
});
