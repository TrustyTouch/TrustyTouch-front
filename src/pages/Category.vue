<script setup lang="ts">
import CategoryCard from '../components/CategoryCard.vue';
</script>

<template>
    <v-text-field
    class="mt-4 mx-4"
    prepend-inner-icon="mdi-magnify"
    density="compact"
    label="Barre de recherche"
    variant="solo"
    single-line />

    <CategoryCard/>
</template>