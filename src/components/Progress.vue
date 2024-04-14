<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import EtapesService from "../service/Etapes"
import { useJWT } from "../composables/jwt"

const jwt = useJWT()
const id_role = computed(() => jwt.decodedToken.value?.id_role)
const user_id = computed(() => jwt.decodedToken.value?.sub)
const etapesService = new EtapesService();

onMounted(()=>{etapesService.getEtape(user_id.value!).then(body=>{
    etapes.value = body
})})

interface Cat {
    titre: string;
    id: number;
    avatar: string;
    nom: string;
    statut: number;
}

const etapes = ref<Cat[]>([]);

const avatar = "/assets/AVATARTEST.webp"

function updateEtape(cat: Cat, step: number) {
    etapesService.updateEtape(user_id.value!, step, cat.id)
        .then(() => {
            cat.statut = step
        })
        .catch(() => {
            console.log("Impossible d'update l'étape")
        })
}

function deleteEtape(cat: Cat, index: number) {
    etapesService.deleteEtape(cat.id)
        .then(() => {
            etapes.value.splice(index, 1)
        })
        .catch(() => {
            console.log("Impossible d'update l'étape")
        })
}

</script>

<template>
    <v-container>
        <v-row>
            <v-col v-for="(etape, index) in etapes" cols="12" md="12">
                <v-card>
                    <v-card-title>
                        <div class="d-flex align-center">
                            {{ etape.titre }}
                            <v-spacer />
                            <v-avatar
                                :image="avatar"
                            ></v-avatar>
                            <v-list-item
                                class="px-1"
                                :title="etape.nom"
                            />
                        </div>
                    </v-card-title>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-stepper :elevation="0" :model-value="etape.statut - 1">
                                <v-stepper-header>
                                    <v-stepper-item
                                        title="Service accepté"
                                        value="1"
                                    ></v-stepper-item>

                                    <v-divider></v-divider>

                                    <v-stepper-item
                                        title="Service en cours"
                                        value="2"
                                    ></v-stepper-item>

                                    <v-divider></v-divider>

                                    <v-stepper-item
                                        title="Service terminé"
                                        value="3"
                                    ></v-stepper-item>
                                </v-stepper-header>
                            </v-stepper>
                        </v-col>
                    </v-row>
                    <div v-if="id_role! > 1" class="d-flex justify-space-between">
                        <v-btn :elevation="0" @Click="updateEtape(etape, (etape.statut - 1))" icon="mdi-undo" :disabled="etape.statut===1"/>
                        <v-btn :elevation="0" icon="mdi-delete" @click="deleteEtape(etape, index)"/>
                        <v-btn :elevation="0" @Click="updateEtape(etape, (etape.statut + 1))" icon="mdi-redo" :disabled="etape.statut===3"/>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>