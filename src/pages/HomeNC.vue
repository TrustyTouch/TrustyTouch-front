<script setup lang="ts">
import { ref } from "vue";
import {
  useRouter
}
from "vue-router"
const router = useRouter();
function enregistrer(){
  router.push({name:"home"})
}
function connexion(){
  router.push({name:"category"})
}

const firstName = ref("")
const password = ref("")
const parrainage = ref("")
let rules = [
  (value: string) => {
    if (value) return true;
    return 'Vous devez rentrer une valeur.';
  },
];
</script>

<template>
    <v-row>
    <v-col cols="12" md="6">
        <v-img width="1000" src="/assets/TrustyTouch.png"></v-img>
      </v-col>
      <v-col class="d-flex flex-column justify-center" cols="12" md="6">
        <h2>Créez un compte</h2>
          <p>Bénéficiez d’une expérience personnalisée avec du contenu en lien avec votre activité et vos centres d’intérêt sur notre service.</p>
          <br>  
          <v-sheet class="mx-auto" width="300">
            <v-form @submit.prevent>
              <v-text-field
                v-model="firstName"
                :rules="rules"
                label="Nom d'utilisateur"
              ></v-text-field>
              <v-text-field
                type="password"
                v-model="password"
                :rules="rules"
                label="Mot de passe"
              ></v-text-field>
              <v-text-field
                v-model="parrainage"
                :rules="rules"
                label="Code de parrainage"
              ></v-text-field>
              <v-btn class="mt-2" type="submit" block @click="connexion()">Créer un compte</v-btn>
            </v-form>
          </v-sheet>
          <br>
          <p>Vous avez déjà un compte ?</p>
          <p class="link" @click="enregistrer()">Me connecter</p>
      </v-col>
    </v-row>
  </template>
  
  <style scoped>
    .link{
      color: #647295;
      font-weight: bold;
      text-decoration: underline;
    }
    .link:hover{
      cursor: pointer;
    }
    .center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .v-sheet{
      background: none;
      color: #2b262d;
      opacity: 5;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  </style>