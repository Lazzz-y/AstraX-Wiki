<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
import pet from './fantastic/pet.vue'
import { useData } from 'vitepress'
import { toggleDark } from './Dark'
const { isDark } = useData()
// 实现切换主题过渡动画
toggleDark(isDark)
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <div class="busuanzi-container">
        <div class="busuanzi">
          本站访客数 <span id="busuanzi_value_site_uv" /> 人次 本站总访问量
          <span id="busuanzi_value_site_pv" /> 次
        </div>
        <pet />
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.busuanzi-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}

.busuanzi {
  font-size: 15px;
  color: var(--vp-c-text-2);
  text-align: center;
  margin-bottom: 10px;
}
</style>
