<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, Transition } from 'vue';

const props = withDefaults(defineProps<{
	texts: string[]
	interval?: number
}>(), {
	interval: 3000
})

const currentIndex = ref(0)

let intervalId: number | undefined

onMounted(() => {
	intervalId = setInterval(() => {
		currentIndex.value = (currentIndex.value + 1) % props.texts.length
	}, props.interval)
})

onBeforeUnmount(() => clearInterval(intervalId))
</script>

<template>
	<Transition name="fade" mode="out-in">
		<span :key="currentIndex">{{ props.texts[currentIndex] }}</span>
	</Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

