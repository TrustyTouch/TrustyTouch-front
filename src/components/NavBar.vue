<script setup lang="ts">
import { computed, ref } from "vue"
import { useRouter } from "vue-router"
import { useJWT } from "../composables/jwt"
import BackendService from '../service/Services'

const menunotif = ref<boolean>(false)
const menucompte = ref<boolean>(false)
const router = useRouter()
const id_role = computed(() => useJWT().decodedToken.value?.id_role)
const user_id = computed(() => useJWT().decodedToken.value?.sub)
const backendService = new BackendService()

function accueil() {
  router.push({ name: "category" })
}

function home() {
    localStorage.clear()
    router.push({ name: "home" })
}

function stat() {
    router.push({ name: "stat" })
}

function profil() {
    router.push({ name: "profil" })
}

function mypresta() {
    router.push({ name: "mypresta" })
}

function servedit() {
    router.push({ name: "progressservices" })
}

function createservice() {
    router.push({ name: "createservice" })
}

interface Notif {
    titre: string;
    date: Date;
}

const notifs = ref<Notif[]>([]);

function updateNotif() {
    backendService.getNotif(user_id.value!)
    .then(notifications => {
        notifs.value=notifications.map((notif:any)=>({titre:notif.message,date:notif.created_at}))
    })
}

</script>

<template>
    <v-app-bar>
        <v-row>
            <v-col>
                <v-img width="50" src="/assets/TrustyTouch.png" @click="accueil()"></v-img>
            </v-col>
            <v-col cols="auto">
                <v-btn v-if="id_role! > 1" icon="mdi-plus-box" @click="createservice()"></v-btn>
                <v-menu v-model="menunotif" :close-on-content-click="false" >
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" icon="mdi-bell" @click="updateNotif"></v-btn>
                    </template>
                    <v-card min-width="300">
                        <v-list>
                            <div v-for="notif in notifs" :key="notif.titre">
                                <v-list-item
                                    :subtitle="notif.titre"
                                    :date="notif.date"
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
                            <v-btn class="w-100 justify-start" variant="plain" prepend-icon="mdi-check-circle" @click="servedit()">MES SERVICES</v-btn><br>
                            <v-btn v-if="id_role! > 1" class="w-100 justify-start" variant="plain" prepend-icon="mdi-check-circle" @click="mypresta()">MES PRESTATIONS</v-btn><br>
                            <v-btn v-if="id_role! > 2" class="w-100 justify-start" variant="plain" prepend-icon="mdi-triangle" @click="stat()">STATISTIQUES</v-btn><br>
                            <v-btn class="w-100 justify-start" variant="plain" prepend-icon="mdi-logout" @click="home()">SE DECONNECTER</v-btn>
                        </v-list>
                    </v-card>
                </v-menu>
            </v-col>
        </v-row>
    </v-app-bar>
</template>