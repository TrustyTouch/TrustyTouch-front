<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router"

const router = useRouter();
function creation() {
  router.push({ name: "homenc" })
}
function connexion() {
  router.push({ name: "category" })
}

const firstName = ref("")
const password = ref("")
let rules = [
  (value: string) => {
    if (value) return true;
    return 'Vous devez rentrer une valeur.';
  },
];
</script>

<template>
  <v-row>
    <v-col class="d-flex flex-column justify-center align-center" cols="12" md="6">
      <v-img width="300" src="/assets/TrustyTouch.png"></v-img>
    </v-col>
    <v-col class="d-flex flex-column justify-center align-center" cols="12" md="6">
      <v-form class="d-flex flex-column justify-center gap w-100" @submit.prevent>
        <h2>Bonjour !</h2>
        <p>Connectez-vous pour découvrir toutes nos fonctionnalités.</p>
        <v-text-field v-model="firstName" :rules="rules" label="Nom d'utilisateur"></v-text-field>
        <v-text-field type="password" v-model="password" :rules="rules" label="Mot de passe"></v-text-field>
        <v-btn class="mt-2" type="submit" block @click="connexion()">Se connecter</v-btn>
        <p>Envie de nous rejoindre ?</p>
        <p class="link" @click="creation()">Créer un compte</p>
      </v-form>
    </v-col>
  </v-row>
</template>

<style scoped>
.link {
  color: #647295;
  font-weight: bold;
  text-decoration: underline;
}

.link:hover {
  cursor: pointer;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>