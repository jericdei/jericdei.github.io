<script setup lang="ts">
import { ref, Transition } from 'vue';
import MenuListItem from './MenuListItem.vue';

const menuVisible = ref(false)
</script>

<template>
	<Transition>
		<div>
			<button @click="menuVisible = !menuVisible">
				<i class="ri-xl transition-all" :class="menuVisible ? 'ri-close-line' : 'ri-menu-line'"></i>
			</button>

			<ul class="absolute flex flex-col gap-4 left-0 text-slate-900 w-full text-center bg-gray-400 my-4 py-4 rounded-xl" :class="{ hidden: !menuVisible }">
				<MenuListItem label="Home" href="/" />
				<MenuListItem label="Blog" href="/blog" />
				<MenuListItem label="Contact" href="/contact" />
			</ul>
		</div>
	</Transition>
</template>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity 0.8s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>