<script setup lang="ts">
import type { CollectionEntry } from 'astro:content'

defineProps<{
    technology: CollectionEntry<'technologies'>
}>()
</script>

<template>
    <div>
        <img
            :src="technology.data.logo"
            :alt="technology.data.name"
            :title="technology.data.name"
            class="h-8 w-8"
        />
    </div>
</template>
