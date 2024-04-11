<script setup lang="ts">
import { ref } from "vue";

const firstName = ref("")
const prix = ref(0)
const categorie = ref()
const titre = ref("")
const description = ref("")
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
                <p>Nom d'utilisateur</p>
                <v-text-field hide-details class="ml-12" v-model="firstName" label="Nom d'utilisateur"></v-text-field>
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
                    label="Choix de la catégorie"
                    :items="['Electricien', 'Divertissement', 'Immobilier', 'Nettoyage', 'Santé', 'Travaux publics', 'Vidéos']"
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
                <v-btn type="submit">Enregistrer</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>