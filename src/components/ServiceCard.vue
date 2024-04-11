<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter,useRoute } from "vue-router"
import Services from "../service/Services"

const router = useRouter();
const route = useRoute();

function goToService(service_id: number) {
  router.push({ name: "service", params:{service_id} })
}

const backEndService = new Services();

onMounted(()=>{backEndService.getServices(route.params.categorie_id as unknown as number).then(body=>{
    services.value = body
})})

interface Cat {
    titre: string;
    image: string;
    id: number;
    avatar: string;
    nom: string;
    note: string;
}

const services = ref<Cat[]>([]);

const image = "/assets/IMAGETEST.jpg"
const avatar = "/assets/AVATARTEST.webp"
</script>

<template>
    <v-container>
        <v-row>
            <v-col
                v-for="service in services"
                cols="12" md="3"
            >
                <v-card
                @click="goToService(service.id)"
                >
                    <v-img
                        :src="image"
                        cover
                        min-width="300"
                        max-height="250"
                    />
                    <v-card-title>
                        {{ service.titre }}
                    </v-card-title>
                    <v-card-actions>
                        <div class="d-flex align-center">
                            <v-avatar
                                :image="avatar"
                            ></v-avatar>
                            <v-list-item
                                class="px-1"
                                :title="service.nom"
                            />
                        </div>
                        <v-spacer />
                        <v-icon class="me-1" icon="mdi-star"></v-icon>
                        <v-list-item 
                            class="px-1"
                            :title="5"
                        />
                        <span>/ 5</span>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>