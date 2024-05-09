<script setup lang="ts">
const props = defineProps<{
    label?: string
}>()
</script>

<template>
    <a
        class="w-full cursor-pointer rounded-xl py-2 transition-all hover:bg-gray-600 hover:text-slate-200"
        v-bind="$attrs"
    >
        <slot>
            <span>{{ props.label }}</span>
        </slot>
    </a>
</template>
