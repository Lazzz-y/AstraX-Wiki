import { type App, watch } from "vue";
import { type Router } from "vitepress";
import { ElementPlusContainer } from "../../../libs/vitepress-preview-component";
import { NProgress } from "nprogress-v2";
import { inBrowser } from "vitepress";
import bsz, { globals } from "../vitepress";
import busuanzi from "busuanzi.pure.js";
import DefaultTheme from "vitepress/theme";
import PixelUI from "@mmt817/pixel-ui";
import "@mmt817/pixel-ui/dist/index.css";
import "./style.css";
import "./style/custom-block.css";
import "./style/hidden.css";
import "./style/rainbow.css";
import "./style/dark.css";
import "./style/search.css";
import "./style/responsive.css";
import "./style/code-fix.css";
import "./style/dracula-theme.css";

let homePageStyle: HTMLStyleElement | undefined;
export default {
  ...DefaultTheme,
  enhanceApp({ app, router }: { app: App; router: Router }) {
    // 注册Pixel UI组件库
    app.use(PixelUI);

    app.component("demo-preview", ElementPlusContainer);

    // 注册全局组件
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });

    // 彩虹背景动画样式
    if (typeof window !== "undefined") {
      watch(
        () => router.route.data.relativePath,
        (path) => {
          // 根据不同语言判断首页路径
          const isHomePage =
            location.pathname.endsWith("/") ||
            location.pathname.endsWith("/en-US/");
          updateHomePageStyle(isHomePage);
        },
        { immediate: true }
      );
    }

    // 页面切换进度条
    if (inBrowser) {
      NProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => {
        NProgress.start(); // 开始进度条
      };
      router.onAfterRouteChanged = () => {
        busuanzi.fetch();
        NProgress.done(); // 停止进度条
      };
    }
  },
  Layout: bsz,
};

// 彩虹背景动画样式控制
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return;

    homePageStyle = document.createElement("style");
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`;
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle) return;

    homePageStyle.remove();
    homePageStyle = undefined;
  }
}
