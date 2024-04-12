<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import Etapes from "../service/Etapes"

const roles_id = computed(() => JSON.parse(localStorage.getItem('user') || '{}').id_roles as number)
const user_name = computed(() => JSON.parse(localStorage.getItem('user') || '{}').id as number)

const backEndService = new Etapes();

onMounted(()=>{backEndService.getEtape(user_name.value).then(body=>{
    etapes.value = body
})})

interface Cat {
    titre: string;
    id: number;
    avatar: string;
    nom: string;
    step: number;
}

const etapes = ref<Cat[]>([]);

const avatar = "/assets/AVATARTEST.webp"



</script>

<template>
    <v-container>
        <v-row>
            <v-col v-for="etape in etapes" cols="12" md="12">
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
                            <v-stepper :elevation="0" :model-value="etape.step">
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
                    <div v-if="roles_id > 1" class="d-flex justify-space-between">
                        <v-btn :elevation="0" @Click="etape.step--" icon="mdi-undo" :disabled="etape.step===0"/>
                        <v-btn :elevation="0" icon="mdi-delete"/>
                        <v-btn :elevation="0" @Click="etape.step++" icon="mdi-redo" :disabled="etape.step===2"/>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>