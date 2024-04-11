<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import BackendService from '../service/Services'

const image = "/assets/Videos.jpg"

const router = useRouter()
const route = useRoute()
const backendService = new BackendService()

const service_id = computed(() => route.params.service_id as unknown as number)

const categories = ref([
    { title: "Electricien", value:1 },
    { title: "Vidéos", value:2 },
    { title: "Travaux publics", value:3 },
    { title: "Divertissement", value:4 },
    { title: "Immobilier", value:5 },
    { title: "Santé", value:6 },
    { title: "Agricole", value:7 },
    { title: "Nettoyage", value:8 }
])

onMounted(() => {
    backendService.getService(service_id.value)
    .then(body => {
        service.titre = body.titre
        service.categorie = body.id_categorie
        service.prix = body.prix
        service.description = body.description
    })
})

const service = reactive({
    titre: '',
    categorie: 0,
    prix: 0,
    description: ''
})

async function updateService() {
    const ok = await backendService.updateService(service_id.value, service.titre, service.description, service.categorie, service.prix)
    if (ok) {
        router.go(-1)
    }
}

async function deleteService() {
    const ok = await backendService.deleteService(service_id.value)
    if (ok) {
        router.go(-1)
    }
}
</script>

<template>
    <div class="d-flex mt-4">
        <v-btn variant="plain" icon="mdi-arrow-left" @click="$router.go(-1)" />
    </div>

    <v-form class="mt-4 mx-4" @submit.prevent>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="6">
                <v-img 
                    :src="image"
                    max-width="300"
                    max-height="250"
                />
                <v-file-input
                    class="ml-4"
                    accept="image/png, image/jpeg, image/bmp, image/jpeg, image/webp, image/svg"
                    label="Changer l'image du service"
                    placeholder="Changer l'image du service"
                    prepend-icon="mdi-upload"
                ></v-file-input>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="4">
                <p>Prix du service (€)</p>
                <v-text-field hide-details class="ml-10" v-model.number="service.prix" type="number" min="0" label="Prix du service"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="4">
                <p>Catégorie du service</p>
                <v-combobox
                    class="ml-7"
                    clearable
                    hide-details
                    :return-object="false"
                    v-model="service.categorie"
                    label="Choix de la catégorie"
                    :items="categories"
                ></v-combobox>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="4">
                <p>Titre du service</p>
                <v-text-field hide-details class="ml-15" v-model="service.titre" label="Titre du service"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="12">
                <p>Description du service</p>
                <v-text-field hide-details class="ml-4" v-model="service.description" label="Description du service"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex justify-center" cols="12" md="12">
                <v-btn type="submit" @click="updateService">Enregistrer</v-btn>
                <v-btn class="ml-4" @click="deleteService">Supprimer le service</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>