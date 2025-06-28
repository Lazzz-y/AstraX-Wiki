<script lang="ts" setup>
import { useData } from 'vitepress'
import { ref, onMounted } from 'vue'

const { site } = useData()
const base = site.value.base
const stages = [{ type: 'loop', start: 0, end: 39 }]
const isMobile = ref(false)

// 检测是否为移动设备
onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 768
  }
  
  checkMobile() // 初始检查
  window.addEventListener('resize', checkMobile) // 监听窗口大小变化
  
  // 组件卸载时移除事件监听
  return () => {
    window.removeEventListener('resize', checkMobile)
  }
})
</script>

<template>
  <ClientOnly>
    <px-animation-frame
      v-if="!isMobile"
      :src="`${base}images/taffy.gif`"
      :stages="stages"
      width="300"
      height="310"
      overflow
      class="pet"
    />
  </ClientOnly>
</template>

<style scoped>
.pet {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  width: 300px;
  height: 310px;
}

.fallback img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .pet {
    display: none !important; /* 在移动端隐藏 */
  }
}
</style>
