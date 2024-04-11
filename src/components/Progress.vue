<script setup lang="ts">
import { computed, ref } from 'vue';

const roles_id = computed(() => JSON.parse(localStorage.getItem('user') || '{}').id_roles as number)

interface Cat {
    title: string;
    id: number;
    avatar: string;
    personne: string;
    step: number;
}

const categories = ref<Cat[]>([
    { title: "Electricien", id:1, avatar: "/assets/AVATARTEST.webp", personne: "Jean-Paul", step: 0 },
    { title: "Vidéos", id:2, avatar: "/assets/AVATARTEST.webp", personne: "Edouard", step: 0 },
    { title: "Travaux publics", id:3, avatar: "/assets/AVATARTEST.webp", personne: "Fabrice", step: 0 },
    { title: "Divertissement", id:4, avatar: "/assets/AVATARTEST.webp", personne: "Baptiste", step: 0 },
    { title: "Immobilier", id:5, avatar: "/assets/AVATARTEST.webp", personne: "Maxime", step: 0 },
    { title: "Santé", id:6, avatar: "/assets/AVATARTEST.webp", personne: "Quentin", step: 0 },
    { title: "Agricole", id:7, avatar: "/assets/AVATARTEST.webp", personne: "Thomas", step: 0 },
    { title: "Nettoyage", id:8, avatar: "/assets/AVATARTEST.webp", personne: "Charle", step: 0 }
]);
</script>

<template>
    <v-container>
        <v-row>
            <v-col v-for="category in categories" cols="12" md="12">
                <v-card>
                    <v-card-title>
                        <div class="d-flex align-center">
                            {{ category.title }}
                            <v-spacer />
                            <v-avatar
                                :image="category.avatar"
                            ></v-avatar>
                            <v-list-item
                                class="px-1"
                                :title="category.personne"
                            />
                        </div>
                    </v-card-title>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-stepper :elevation="0" :model-value="category.step">
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
                        <v-btn :elevation="0" @Click="category.step--" icon="mdi-undo" :disabled="category.step===0"/>
                        <v-btn :elevation="0" icon="mdi-delete"/>
                        <v-btn :elevation="0" @Click="category.step++" icon="mdi-redo" :disabled="category.step===2"/>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>