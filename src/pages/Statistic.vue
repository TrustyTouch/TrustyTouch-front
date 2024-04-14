<script setup lang="ts">
import { onMounted, ref } from "vue";
import Services from "../service/Services"
import Users from "../service/Users"

const backEndService = new Services();
const backEndUsers = new Users();

const nb_user = ref("")
const nb_services = ref("")
const nb_presta = ref("")

onMounted(()=>{backEndService.getNbServices().then(body=>{
    nb_services.value = body.nb_services[0]
})})

onMounted(()=>{backEndUsers.getNbUser().then(body=>{
    nb_user.value = body.nb_utilisateurs[0]
})})

onMounted(()=>{backEndUsers.getNbPresta().then(body=>{
    nb_presta.value = body.nb_prestataires[0]
})})
</script>

<template>
    <div class="d-flex flex-column align-center justify-center gap mt-4">
        <v-card
        class="text-center"
        title="Nombre d'utilisateurs"
        width="250"
        >
            <p class="pa-3">{{ nb_user }}</p>
        </v-card>
        <v-card
        class="text-center"
        title="Nombre de services"
        width="250"
        >
            <p class="pa-3">{{ nb_services }}</p>
        </v-card>
        <v-card
        class="text-center"
        title="Nombre de prestataires"
        width="250"
        >
            <p class="pa-3">{{ nb_presta }}</p>
        </v-card>
    </div>
</template>