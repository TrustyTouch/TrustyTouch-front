<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter,useRoute } from "vue-router"
import Services from "../service/Services"
import Etapes from "../service/Etapes"

const etapes = new Etapes();

function createEtape() {
  const user = JSON.parse(localStorage.getItem("user")||"") 
  const serviceId = route.params.service_id as unknown as number;
  etapes.createEtape(serviceId,user.id,1)
    .then(() => {
        pay()
    }).catch(() => {
      console.log("erreur")
    })
}

const router = useRouter();
const route = useRoute();

const backEndService = new Services();
const service = ref<any>({});

onMounted(()=>{backEndService.getService(route.params.service_id as unknown as number).then(body=>{
    service.value = body
})})

function pay() {
  router.push({ name: "payment" })
}

const image = "/assets/Videos.jpg"
</script>

<template>
    <div class="d-flex mt-4">
        <v-btn variant="plain" icon="mdi-arrow-left" @click="$router.go(-1)" />
    </div>

    <v-form class="mt-4 mx-4">
        <v-row class="d-flex justify-center">
            <v-col class="d-flex justify-center" cols="12" md="6">
                <v-img 
                    :src="image"
                    max-width="300"
                    max-height="250"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="4">
                <p>Nom d'utilisateur</p>
                <p class="ml-12">{{ service.nom }}</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="4">
                <p>Prix du service (€)</p>
                <p class="ml-10">{{ service.prix }} €</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="4">
                <p>Catégorie du service</p>
                <p class="ml-7">{{ service.categorie }}</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="4">
                <p>Titre du service</p>
                <p class="ml-15">{{ service.titre }}</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="12">
                <p>Description du service</p>
                <p class="ml-4">{{ service.description }}</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex justify-center" cols="12" md="12">
                <v-btn @click="createEtape()">Choisir</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template> 