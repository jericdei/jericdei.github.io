<script setup lang="ts">
import type { CollectionEntry } from 'astro:content'
import Tag from 'primevue/tag'

const props = defineProps<{
    technologies: CollectionEntry<'technologies'>[]
}>()

const types = Array.from(
    new Set(props.technologies.flatMap((technology) => technology.data.type)),
)
</script>

<template>
    <div>
        <div class="flex flex-wrap justify-center gap-2">
            <Tag
                v-for="itm in types"
                :key="itm"
                :value="itm"
                :pt="{ value: 'text-lg' }"
            />
        </div>
    </div>
</template>
