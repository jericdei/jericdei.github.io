<script setup lang="ts">
import type { CollectionEntry } from 'astro:content'
import Divider from 'primevue/divider'
import Rating from 'primevue/rating'

defineProps<{
    technology: CollectionEntry<'technologies'>
}>()
</script>

<template>
    <div
        class="card relative min-h-[250px] min-w-[250px] cursor-pointer overflow-hidden rounded-xl p-4 transition-all duration-700"
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

            <div class="hidden space-y-2 lg:block">
                <Rating
                    v-model="technology.data.interest"
                    readonly
                    :cancel="false"
                    :stars="10"
                    :pt="{
                        onicon: '!text-yellow-500',
                        root: '!gap-0',
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

                <Rating
                    v-model="technology.data.skill"
                    readonly
                    :cancel="false"
                    :stars="10"
                    :pt="{
                        onicon: '!text-yellow-500',
                        root: '!gap-0',
                    }"
                    :pt-options="{
                        mergeProps: true,
                    }"
                >
                    <template #onicon>
                        <i class="ri-star-fill ri-lg text-yellow-500"></i>
                    </template>

                    <template #officon>
                        <i class="ri-star-line ri-lg"></i>
                    </template>
                </Rating>
            </div>

            <div class="flex w-full items-center justify-around lg:hidden">
                <p class="text-center font-bold">
                    {{ technology.data.interest }}
                    / 10
                    <i class="ri-heart-fill ri-lg text-red-500"></i>
                </p>

                <p class="text-center font-bold">
                    {{ technology.data.skill }}
                    / 10
                    <i class="ri-star-fill ri-lg text-yellow-500"></i>
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
