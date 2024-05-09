<script setup lang="ts">
function scrollToTechStack() {
    document
        .getElementById('tech-stack')
        ?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <div
        class="flex transform animate-bounce cursor-pointer flex-col text-center transition-transform"
    >
        <small>View my Tech Stack</small>
        <i
            class="ri-arrow-down-double-line ri-4x"
            @click="scrollToTechStack"
        ></i>
    </div>
</template>
