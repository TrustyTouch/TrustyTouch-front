<script setup lang="ts">
</script>

<template>
    <div class="d-flex mt-4">
        <v-btn variant="plain" icon="mdi-arrow-left" @click="$router.go(-1)" />
        <v-text-field
            class="mr-4"
            prepend-inner-icon="mdi-magnify"
            density="compact"
            label="Barre de recherche"
            variant="solo"
            single-line />
    </div>
</template>