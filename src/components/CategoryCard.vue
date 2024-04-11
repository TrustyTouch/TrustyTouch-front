<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from "vue-router"

const router = useRouter();

function service() {
  router.push({ name: "services" })
}

interface Category {
    title: string;
    image: string;
    id: number;
}

const categories = ref<Category[]>([
    { title: "Electricien", image:"/assets/Electricien.jpg", id:1 },
    { title: "Vidéos", image:"/assets/Videos.jpg", id:2 },
    { title: "Travaux publics", image:"/assets/Travaux_publics.jpg", id:3 },
    { title: "Divertissement", image:"/assets/Divertissement.jpg", id:4 },
    { title: "Immobilier", image:"/assets/Immobilier.jpeg", id:5 },
    { title: "Santé", image:"/assets/Sante.webp", id:6 },
    { title: "Agricole", image:"/assets/Agricole.jpeg", id:7 },
    { title: "Nettoyage", image:"/assets/Nettoyage.jpg", id:8 }
]);
</script>

<template>
    <v-container>
        <v-row>
            <v-col
                v-for="category in categories"
                cols="6" md="3"
            >
                <v-card
                class="mx-auto"
                @click="service()"
                >
                    <v-img
                        :src="category.image"
                        cover
                        min-width="300"
                        max-height="250"
                    />
                    <v-card-title>{{ category.title }}</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>