<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"

const menunotif = ref<boolean>(false)
const menucompte = ref<boolean>(false)
const router = useRouter()

function accueil() {
  router.push({ name: "category" })
}

function home() {
    router.push({ name: "home" })
}

function stat() {
    router.push({ name: "stat" })
}

function profil() {
    router.push({ name: "profil" })
}

function myservices() {
    router.push({ name: "myservices" })
}

function admin() {
    router.push({ name: "serviceedit" })
}

function createservice() {
    router.push({ name: "createservice" })
}

function discussions() {
    router.push({ name: "discussions" })
}

interface Notif {
    personne: string;
    titre: string;
}

const notifs = ref<Notif[]>([
    {personne: "Prestataire 1", titre: "Nom du service..."},
    {personne: "Prestataire 2", titre: "Nom du service..."},
    {personne: "Prestataire 3", titre: "Nom du service..."}
])
</script>

<template>
    <v-app-bar>
        <v-row>
            <v-col>
                <v-img width="50" src="/assets/TrustyTouch.png" @click="accueil()"></v-img>
            </v-col>
            <v-col cols="auto">
                <v-btn icon="mdi-plus-box" @click="createservice()"></v-btn>
                <v-btn icon="mdi-message-text" @click="discussions()"></v-btn>
                <v-menu v-model="menunotif" :close-on-content-click="false" >
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" icon="mdi-bell" ></v-btn>
                    </template>
                    <v-card min-width="300">
                        <v-list>
                            <div v-for="notif in notifs" :key="notif.titre">
                                <v-list-item
                                    :subtitle="notif.titre"
                                    :title="notif.personne"
                                >
                                </v-list-item>
                            </div>
                        </v-list>
                    </v-card>
                </v-menu>
                <v-menu v-model="menucompte" :close-on-content-click="false" >
                    <template v-slot:activator="{ props  }">
                        <v-btn v-bind="props" icon="mdi-account" ></v-btn>
                    </template>
                    <v-card>
                        <v-list>
                            <v-btn class="w-100 justify-start" variant="plain" prepend-icon="mdi-account" @click="profil()">PROFIL</v-btn><br>
                            <v-btn class="w-100 justify-start" variant="plain" prepend-icon="mdi-check-circle" @click="myservices()">MES SERVICES</v-btn><br>
                            <v-btn class="w-100 justify-start" variant="plain" prepend-icon="mdi-triangle" @click="stat()">STATISTIQUES</v-btn><br>
                            <v-btn class="w-100 justify-start" variant="plain" prepend-icon="mdi-menu" @click="admin()">ADMINISTRATION</v-btn><br>
                            <v-btn class="w-100 justify-start" variant="plain" prepend-icon="mdi-logout" @click="home()">SE DECONNECTER</v-btn>
                        </v-list>
                    </v-card>
                </v-menu>
            </v-col>
        </v-row>
    </v-app-bar>
</template>