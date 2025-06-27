<script lang="ts" setup>
import { useData } from 'vitepress'
const { site } = useData()
const base = site.value.base
const stages = [{ type: 'loop', start: 0, end: 39 }]
</script>

<template>
  <ClientOnly>
      <px-animation-frame
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
    width: 100px;
    height: 105px;
    bottom: 10px;
    right: 10px;
  }
}
</style>
