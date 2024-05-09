<script setup lang="ts">
import type { CollectionEntry } from 'astro:content'
import Rating from 'primevue/rating'
import Tag from 'primevue/tag'
import { computed, ref } from 'vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const props = defineProps<{
    technologies: CollectionEntry<'technologies'>[]
}>()

const breakpoints = useBreakpoints(breakpointsTailwind)

const types = Array.from(
    new Set(props.technologies.flatMap((technology) => technology.data.type)),
)

const selected = ref<string | null>(null)

const technologyList = computed(() => {
    if (selected.value === null) {
        return props.technologies
    }

    return props.technologies.filter((technology) =>
        technology.data.type.includes(selected.value as string),
    )
})
</script>

<template>
    <div
        class="grid gap-4 rounded-lg bg-gray-300 p-4 lg:grid-cols-6 dark:bg-surface-700"
    >
        <div
            class="flex flex-col justify-between gap-2 rounded-lg p-4 lg:col-span-1 dark:bg-surface-900"
        >
            <Tag
                v-for="itm in types"
                :key="itm"
                :value="itm"
                :severity="selected === itm ? 'warning' : 'primary'"
                class="cursor-pointer"
                :pt="{ value: 'text-lg' }"
                @click="() => (selected = selected === itm ? null : itm)"
            />
        </div>

        <div class="lg:col-span-5">
            <TransitionGroup
                :name="breakpoints.greaterOrEqual('lg').value ? 'list' : ''"
                tag="ul"
                class="flex h-[40rem] flex-wrap items-center justify-center gap-4 overflow-y-auto"
            >
                <div
                    v-for="tech in technologyList"
                    :key="tech.id"
                    class="card relative min-h-[200px] min-w-[250px] cursor-pointer overflow-hidden rounded-xl p-4 transition-all duration-700"
                >
                    <div
                        class="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-gray-300 transition-all delay-200 duration-100 hover:opacity-0 dark:bg-surface-600"
                    >
                        <img
                            :src="tech.data.logo"
                            :alt="tech.data.name"
                            class="h-24 max-w-36"
                        />

                        <p class="text-center font-bold">
                            {{ tech.data.name }}
                        </p>

                        <div>
                            <Rating
                                class="hidden lg:block"
                                v-model="tech.data.level"
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
                                    <i
                                        class="ri-heart-fill ri-lg text-red-500"
                                    ></i>
                                </template>

                                <template #officon>
                                    <i class="ri-heart-line ri-lg"></i>
                                </template>
                            </Rating>

                            <p class="text-center font-bold lg:hidden">
                                {{ tech.data.level }}
                                / 10
                                <i class="ri-heart-fill ri-lg text-red-500"></i>
                            </p>
                        </div>
                    </div>

                    <div
                        class="card-back absolute inset-0 z-10 flex items-center bg-gray-300 p-4 text-sm transition-all delay-200 duration-100 hover:opacity-0 dark:bg-surface-900"
                    >
                        <p
                            class="text-center text-slate-800 dark:text-slate-300"
                        >
                            {{ tech.data.opinion }}
                        </p>
                    </div>
                </div>
            </TransitionGroup>
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
