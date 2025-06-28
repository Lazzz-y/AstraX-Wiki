---
layout: home

hero:
  name: "AstraX"
  text: "Help Manual"
  tagline: Powerful Minecraft Plugin System
  image:
    src: /images/homelogo.png
    alt: AstraX
  actions:
    - theme: brand
      text: Getting Started
      link: /en-US/get-started

features:
---

<style>
.VPHomeHero .image-container {
  filter: drop-shadow(0 0 30px rgba(0, 128, 255, 0.5));
}

/* 首页响应式样式 */
@media (max-width: 960px) {
  .VPHomeHero .container {
    flex-direction: column !important;
  }
  
  .VPHomeHero .image {
    margin: 0 auto !important;
  }
  
  /* 确保Logo居中显示 */
  .VPHomeHero .image-container {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    width: 100% !important;
  }
}

@media (max-width: 640px) {
  .VPHomeHero .name,
  .VPHomeHero .text {
    font-size: 1.5rem !important;
  }
  
  /* 确保Logo居中显示 */
  .VPHomeHero .image-container {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    width: 100% !important;
  }
}

@media (max-width: 420px) {
  .VPHomeHero .name,
  .VPHomeHero .text {
    font-size: 1.2rem !important;
  }
  
  .VPHomeHero .image-container {
    transform: scale(0.8);
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    width: 100% !important;
    margin: 0 auto !important;
  }
}
</style> 