<script setup lang="ts">
import { ref, Transition } from 'vue'
import MenuListItem from './MenuListItem.vue'

const menuVisible = ref(false)

const props = defineProps<{
    items: {
        label: string
        path: string
    }[]
}>()
</script>

<template>
    <Transition>
        <div>
            <button @click="menuVisible = !menuVisible">
                <i
                    class="ri-xl transition-all"
                    :class="menuVisible ? 'ri-close-line' : 'ri-menu-line'"
                ></i>
            </button>

            <nav
                class="absolute left-1/2 top-48 w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gray-400 text-center text-slate-900"
            >
                <ul
                    class="flex flex-col gap-4 p-4"
                    :class="{ hidden: !menuVisible }"
                >
                    <MenuListItem
                        v-for="item in props.items"
                        :key="item.path"
                        :label="item.label"
                        :href="item.path"
                    />
                </ul>
            </nav>
        </div>
    </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.8s;
}
.v-enter,
.v-leave-to {
    opacity: 0;
}
</style>
