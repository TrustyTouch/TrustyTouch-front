<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"
import AuthService from "../service/AuthService"

const router = useRouter()
function enregistrer() {
  router.push({ name: "home" })
}

const authService = new AuthService();

function registerUser() {
  authService.register(firstName.value,mailAddress.value,password.value,selectedOption.value,parrainage.value)
    .then(() => {
      enregistrer()
    }).catch(() => {
      console.log("erreur")
    })
}

const selectedOption = ref(1)
const mailAddress = ref("")
const firstName = ref("")
const password = ref("")
const parrainage = ref(0)
let rules = [
  (value: string) => {
    if (value) return true;
    return 'Vous devez rentrer une valeur.';
  },
];
const emailRules = [
  (v: string | null) => !!v || 'L\'email est requis',
  (v: string | null) => /.+@.+\..+/.test(v || '') || 'L\'email doit être valide',
];
</script>

<template>
  <v-container class="d-flex flex-nowrap h-screen">
    <v-row>
      <v-col class="d-flex flex-column justify-center align-center" cols="12" md="6">
        <v-img width="300" src="/assets/TrustyTouch.png"></v-img>
      </v-col>
      <v-col class="d-flex flex-column justify-center align-center" cols="12" md="6">
        <v-form class="d-flex flex-column justify-center gap w-75" @submit.prevent>
          <h2 class="text-center">Créez un compte</h2>
          <p class="text-center">Bénéficiez d’une expérience personnalisée avec du contenu en lien avec votre activité et vos centres d’intérêt sur notre service.</p>
          <v-row>
            <v-radio-group class="d-flex justify-center" v-model="selectedOption" inline>
              <v-radio label="Demandeur" :value="1"></v-radio>
              <v-radio label="Prestataire" :value="2"></v-radio>
            </v-radio-group>
          </v-row>
          <v-text-field v-model="firstName" :rules="rules" label="Nom d'utilisateur"></v-text-field>
          <v-text-field v-model="mailAddress" :rules="emailRules" label="Email"></v-text-field>
          <v-text-field type="password" v-model="password" :rules="rules" label="Mot de passe"></v-text-field>
          <v-text-field v-model.number="parrainage" label="Code de parrainage" type="number" max="9999" min="0"></v-text-field>
          <v-btn class="mt-2" type="submit" block @click="registerUser()">Créer un compte</v-btn>
          <p class="text-center">Vous avez déjà un compte ?</p>
          <p class="link text-center" @click="enregistrer()">Me connecter</p>
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