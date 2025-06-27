import { defineConfig } from "vitepress";
import { sharedConfig } from "./configs/config";
import { zhCNConfig } from "./configs/config/zh-CN";
import { enUSConfig } from "./configs/config/en-US";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...sharedConfig,
  locales: {
    // 多语言
    root: {
      title: "AstraX 帮助手册",
      label: "简体中文",
      lang: "zh-CN",
      ...zhCNConfig,
    },
    "en-US": {
      title: "AstraX Help Manual",
      label: "English",
      lang: "en-US",
      link: "/en-US/",
      ...enUSConfig,
    },
  },
});
