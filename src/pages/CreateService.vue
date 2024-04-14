<script setup lang="ts">
import { ref, computed } from "vue";
import Services from "../service/Services"
import { useRouter } from "vue-router"
import { useJWT } from "../composables/jwt"

const router = useRouter();
function back() {
  router.push({ name: "mypresta" })
}

const services = new Services();

function createService() {
  const user_id = computed(() => useJWT().decodedToken.value?.sub)
  services.createService(titre.value,description.value,user_id.value!,categorie.value,prix.value)
    .then(() => {
      back()
    }).catch(() => {
      console.log("erreur")
    })
}

const prix = ref(0)
const categorie = ref(1)
const titre = ref("")
const description = ref("")
const choix = ref([
    { title: "Electricien", value:1 },
    { title: "Vidéos", value:2 },
    { title: "Travaux publics", value:3 },
    { title: "Divertissement", value:4 },
    { title: "Immobilier", value:5 },
    { title: "Santé", value:6 },
    { title: "Agricole", value:7 },
    { title: "Nettoyage", value:8 }
])
</script>

<template>
    <div class="d-flex mt-4">
        <v-btn variant="plain" icon="mdi-arrow-left" @click="$router.go(-1)" />
    </div>

    <v-form class="mt-4 mx-4" @submit.prevent>
        <v-row class="justify-center">
            <v-col class="d-flex justify-center align-center" cols="12" md="3">
                <v-file-input
                accept="image/png, image/jpeg, image/bmp, image/jpeg, image/webp, image/svg"
                label="Photo du service"
                placeholder="Choisir une image"
                prepend-icon="mdi-image"
                ></v-file-input>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="4">
                <p>Prix du service (€)</p>
                <v-text-field hide-details class="ml-10" v-model.number="prix" min="0" label="Prix du service"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="4">
                <p>Catégorie du service</p>
                <v-combobox
                    class="ml-7"
                    clearable
                    hide-details
                    v-model="categorie"
                    :return-object="false"
                    label="Choix de la catégorie"
                    :items="choix"
                ></v-combobox>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="4">
                <p>Titre du service</p>
                <v-text-field hide-details class="ml-15" v-model="titre" label="Titre du service"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="12">
                <p>Description du service</p>
                <v-text-field hide-details class="ml-4" v-model="description" label="Description du service"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex justify-center" cols="12" md="12">
                <v-btn type="submit" @Click="createService()">Enregistrer</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>