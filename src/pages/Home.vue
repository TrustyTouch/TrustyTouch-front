<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import AuthService from "../service/AuthService";

const router = useRouter();
const authService = new AuthService();

const email = ref("");
const password = ref("");

const loginUser = () => {
  authService.login(email.value, password.value)
    .then(() => {
      connexion();
    }).catch(() => {
      console.log("erreur");
    });
};

const rules = [
  (value: string) => {
    if (value) return true;
    return 'Vous devez rentrer une valeur.';
  },
];

const emailRules = [
  (v: string | null) => !!v || 'L\'email est requis',
  (v: string | null) => /.+@.+\..+/.test(v || '') || 'L\'email doit être valide',
];

const creation = () => {
  router.push({ name: "homenc" });
};

const connexion = () => {
  router.push({ name: "category" });
};
</script>

<template>
  <v-container class="d-flex flex-nowrap h-screen">
    <v-row>
      <v-col class="d-flex flex-column justify-center align-center" cols="12" md="6">
        <v-img width="300" src="/assets/TrustyTouch.png"></v-img>
      </v-col>
      <v-col class="d-flex flex-column justify-center align-center" cols="12" md="6">
        <v-form class="d-flex flex-column justify-center gap w-75" @submit.prevent>
          <h2 class="text-center">Bonjour !</h2>
          <p class="text-center">Connectez-vous pour découvrir toutes nos fonctionnalités.</p>
          <v-text-field v-model="email" :rules="emailRules" label="Email"></v-text-field>
          <v-text-field type="password" v-model="password" :rules="rules" label="Mot de passe"></v-text-field>
          <v-btn class="mt-2" type="submit" block @click="loginUser">Se connecter</v-btn>
          <p class="text-center">Envie de nous rejoindre ?</p>
          <p class="link text-center" @click="creation">Créer un compte</p>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
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
