<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
function enregistrer() {
  router.push({ name: "home" })
}
function connexion() {
  router.push({ name: "category" })
}

const selectedOption = ref("one")
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
    <v-col class="d-flex flex-column justify-center align-center" cols="12" md="6">
      <v-form class="d-flex flex-column justify-center gap w-75" @submit.prevent>
        <h2>Créez un compte</h2>
        <p>Bénéficiez d’une expérience personnalisée avec du contenu en lien avec votre activité et vos centres
          d’intérêt sur notre service.</p>
        <v-row>
          <v-radio-group class="d-flex justify-center" v-model="selectedOption" inline>
            <v-radio label="Demandeur" value="one"></v-radio>
            <v-radio label="Prestataire" value="two"></v-radio>
          </v-radio-group>
        </v-row>
        <v-text-field v-model="firstName" :rules="rules" label="Nom d'utilisateur"></v-text-field>
        <v-text-field type="password" v-model="password" :rules="rules" label="Mot de passe"></v-text-field>
        <v-text-field v-model="parrainage" label="Code de parrainage"></v-text-field>
        <v-btn class="mt-2" type="submit" block @click="connexion()">Créer un compte</v-btn>
        <p>Vous avez déjà un compte ?</p>
        <p class="link" @click="enregistrer()">Me connecter</p>
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