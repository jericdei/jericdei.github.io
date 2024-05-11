<script setup lang="ts">
import Button from 'primevue/button'
</script>

<template>
    <div
        class="mt-12 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
    >
        <a v-tooltip.top="'Hit me up'" href="mailto:loganjeric25@gmail.com">
            <Button icon="ri-mail-line ri-lg" />
        </a>

        <a v-tooltip.top="'View my Resume'" href="/resume.pdf" target="_blank">
            <Button icon="ri-file-pdf-2-fill ri-lg" severity="danger" />
        </a>

        <a
            v-tooltip.top="'Visit my GitHub profile'"
            href="https://github.com/jericdei"
            target="_blank"
        >
            <Button severity="secondary" icon="ri-github-fill ri-lg" />
        </a>

        <a
            v-tooltip.top="'View my LinkedIn profile'"
            href="https://linkedin.com/in/jericjunee"
            target="_blank"
        >
            <Button
                class="!border-[#0077b5] !bg-[#0077b5] !text-white !outline-[#0077b5] hover:!bg-[#0077b5] hover:!outline-[#0077b5]"
                icon="ri-linkedin-fill ri-lg"
            />
        </a>
    </div>
</template>
