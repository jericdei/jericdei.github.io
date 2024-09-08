<script setup lang="ts">
const props = defineProps<{
  to: string
}>()

function scroll() {
  document
    .getElementById(props.to)
    ?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="flex transform animate-bounce cursor-pointer flex-col text-center transition-transform">
    <i class="ri-arrow-down-double-line ri-4x" @click="scroll"></i>
  </div>
</template>
