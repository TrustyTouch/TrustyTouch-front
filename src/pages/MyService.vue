<script setup lang="ts">
import Progress from '../components/Progress.vue';
</script>

<template>
    <div class="d-flex align-center mt-4">
        <v-btn variant="plain" icon="mdi-arrow-left" @click="$router.go(-1)" />
        <h1 class="w-100 text-center">Mes Services</h1>
    </div>
    <Progress></Progress>
</template>