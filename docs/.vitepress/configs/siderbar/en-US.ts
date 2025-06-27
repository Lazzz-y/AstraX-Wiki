import {DefaultTheme} from "vitepress";

export const enUSSidebar: DefaultTheme.Sidebar = {
  '/en-US/': [
    {
      text: 'Components',
      collapsed: false,
      items: [
        { text: 'button', link: `/en-US/components/button` }
      ]
    }
  ]
}

