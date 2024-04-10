<script setup lang="ts">
import { ref } from "vue";

const firstName = ref("")
const code = ref("")
const biographie = ref("")
</script>

<template>
    <div class="d-flex mt-4">
        <v-btn variant="plain" icon="mdi-arrow-left" @click="$router.go(-1)" />
    </div>

    <v-form class="mt-4 mx-4 gap" @submit.prevent>
        <v-row>
            <v-col class="d-flex" cols="12" md="6">
                <p>Nom d'utilisateur</p>
                <v-text-field hide-details class="ml-4" v-model="firstName" label="Nom d'utilisateur"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex" cols="12" md="6">
                <p>Code de parrainage</p>
                <v-text-field hide-details class="ml-4" v-model="code" label="Code de parrainage"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex" cols="12" md="12">
                <p>Biographie</p>
                <v-text-field hide-details class="ml-4" v-model="biographie" label="Biographie"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex justify-center" cols="12" md="12">
                <v-btn type="submit">Enregistrer</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex justify-center" cols="12" md="12">
                <v-btn type="submit">Supprimer le compte</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>