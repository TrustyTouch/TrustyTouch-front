<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router"

const router = useRouter()

function discuss() {
  router.push({ name: "discussing" })
}

const image = "/assets/Videos.jpg"
const firstName = ref("Test")
const prix = ref(1000)
const categorie = ref("Electricien")
const titre = ref("Tableau electrique")
const description = ref("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.")
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
                <p class="ml-12">{{ firstName }}</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="4">
                <p>Prix du service (€)</p>
                <p class="ml-10">{{ prix }} €</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="4">
                <p>Catégorie du service</p>
                <p class="ml-7">{{ categorie }}</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="4">
                <p>Titre du service</p>
                <p class="ml-15">{{ titre }}</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="12">
                <p>Description du service</p>
                <p class="ml-4">{{ description }}</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex justify-center" cols="12" md="12">
                <v-btn @click="discuss()">Contacter</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template> 