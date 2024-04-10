<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from "vue-router"

const router = useRouter();

function service() {
  router.push({ name: "services" })
}

interface Video {
    title: string;
    image: string;
    id: number;
}

const categories = ref<Video[]>([
    { title: "Electricien", image:"https://ecometiers.com/wp-content/uploads/2023/07/travaux-electricien.jpg", id:1 },
    { title: "Vidéos", image:"https://123-metier.fr/wp-content/uploads/2023/02/Videaste.jpg", id:2 },
    { title: "Travaux publics", image:"https://www.hautsdefrance.fr/app/uploads/2022/09/Travaux-publics.jpg", id:3 },
    { title: "Divertissement", image:"https://cdn.sortiraparis.com/images/80/1467/478202-le-royaume-des-enfants-a-cergy-draveil-et-jablines.jpg", id:4 },
    { title: "Immobilier", image:"https://renoverpourgagner.com/wp-content/uploads/2023/07/AdobeStock_603805220.jpeg", id:5 },
    { title: "Santé", image:"https://www.iledefrance.fr/sites/default/files/styles/hub_exposition_banner_desktop/public/medias/istock-photobyphotoboy.jpg.webp?itok=_2VuK8a4", id:6 },
    { title: "Agricole", image:"https://f.hellowork.com/seo/domaine/agricole.jpeg", id:7 },
    { title: "Nettoyage", image:"https://www.delcourt.fr/img/cms/visuel-article-techniques-entretien-lavage-sols-Delcourt-fr-min.jpg", id:8 }
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