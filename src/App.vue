<script setup lang="ts">
import { useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';
import { computed } from 'vue'

const route = useRoute()
const isOnHomePage = computed(() => ['home', 'homenc'].includes(route.name?.toString() || ''))
</script>

<template>
  <v-app>
    <v-main>
      <NavBar v-if="!isOnHomePage" />
      <router-view />
    </v-main>
  </v-app>
</template>