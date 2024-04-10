<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from "vue-router"

const router = useRouter();

function service() {
  router.push({ name: "service" })
}

interface Video {
    title: string;
    image: string;
    id: number;
    avatar: string;
    personne: string;
    note: string;
}

const categories = ref<Video[]>([
    { title: "Electricien", image:"/assets/Electricien.jpg", id:1, avatar: "/assets/AVATARTEST.webp", personne: "Jean-Paul", note: "4" },
    { title: "Vidéos", image:"/assets/Videos.jpg", id:2, avatar: "/assets/AVATARTEST.webp", personne: "Edouard", note: "4" },
    { title: "Travaux publics", image:"/assets/Travaux_publics.jpg", id:3, avatar: "/assets/AVATARTEST.webp", personne: "Fabrice", note: "4" },
    { title: "Divertissement", image:"/assets/Divertissement.jpg", id:4, avatar: "/assets/AVATARTEST.webp", personne: "Baptiste", note: "4" },
    { title: "Immobilier", image:"/assets/Immobilier.jpeg", id:5, avatar: "/assets/AVATARTEST.webp", personne: "Maxime", note: "4" },
    { title: "Santé", image:"/assets/Sante.webp", id:6, avatar: "/assets/AVATARTEST.webp", personne: "Quentin", note: "4" },
    { title: "Agricole", image:"/assets/Agricole.jpeg", id:7, avatar: "/assets/AVATARTEST.webp", personne: "Thomas", note: "4" },
    { title: "Nettoyage", image:"/assets/Nettoyage.jpg", id:8, avatar: "/assets/AVATARTEST.webp", personne: "Charle", note: "4" }
]);
</script>

<template>
    <v-container>
        <v-row>
            <v-col
                v-for="category in categories"
                cols="12" md="3"
            >
                <v-card
                @click="service()"
                >
                    <v-img
                        :src="category.image"
                        cover
                        min-width="300"
                        max-height="250"
                    />
                    <v-card-title>
                        {{ category.title }}
                    </v-card-title>
                    <v-card-actions>
                        <div class="d-flex align-center">
                            <v-avatar
                                :image="category.avatar"
                            ></v-avatar>
                            <v-list-item
                                class="px-1"
                                :title="category.personne"
                            />
                        </div>
                        <v-spacer />
                        <v-icon class="me-1" icon="mdi-star"></v-icon>
                        <v-list-item 
                            class="px-1"
                            :title="category.note"
                        />
                        <span>/ 5</span>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>