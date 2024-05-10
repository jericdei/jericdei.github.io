<script setup lang="ts">
import type { CollectionEntry } from 'astro:content'
import Rating from 'primevue/rating'

defineProps<{
    technology: CollectionEntry<'technologies'>
}>()
</script>

<template>
    <div
        class="card relative min-h-[200px] min-w-[250px] cursor-pointer overflow-hidden rounded-xl p-4 transition-all duration-700"
    >
        <div
            class="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-gray-300 transition-all delay-200 duration-100 hover:opacity-0 dark:bg-surface-600"
        >
            <img
                :src="technology.data.logo"
                :alt="technology.data.name"
                class="h-24 max-w-36"
            />

            <p class="text-center font-bold">
                {{ technology.data.name }}
            </p>

            <div>
                <Rating
                    class="hidden lg:block"
                    v-model="technology.data.level"
                    readonly
                    :cancel="false"
                    :stars="10"
                    :pt="{
                        onicon: '!text-yellow-500',
                    }"
                    :pt-options="{
                        mergeProps: true,
                    }"
                >
                    <template #onicon>
                        <i class="ri-heart-fill ri-lg text-red-500"></i>
                    </template>

                    <template #officon>
                        <i class="ri-heart-line ri-lg"></i>
                    </template>
                </Rating>

                <p class="text-center font-bold lg:hidden">
                    {{ technology.data.level }}
                    / 10
                    <i class="ri-heart-fill ri-lg text-red-500"></i>
                </p>
            </div>
        </div>

        <div
            class="card-back absolute inset-0 z-10 flex items-center bg-gray-300 p-4 text-sm transition-all delay-200 duration-100 hover:opacity-0 dark:bg-surface-900"
        >
            <p class="text-center text-slate-800 dark:text-slate-300">
                {{ technology.data.opinion }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.card:hover {
    transform: rotateY(180deg);
    transform-style: preserve-3d;
}

.card-back {
    transform: rotateY(180deg);
}
</style>
