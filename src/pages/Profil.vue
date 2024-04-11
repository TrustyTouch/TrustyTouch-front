<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import BackendService from '../service/Users'
import { useRouter } from "vue-router";

const avatar = "/assets/AVATARTEST.webp"
const user_id = computed(() => JSON.parse(localStorage.getItem('user') || '{}').id as number)

const router = useRouter()
const backendService = new BackendService();

onMounted(async () => {
  const user = await backendService.getUser(user_id.value)
  firstName.value = user.nom
  code.value = user.code_parainage
  biographie.value = user.biographie
})

const firstName = ref("")
const code = ref(0)
const biographie = ref("")

async function updateProfile() {
  const ok = await backendService.updateUser(user_id.value, firstName.value, biographie.value)
  if (ok) {
    router.back()
  }
}

async function deleteProfile() {
  const ok = await backendService.deleteUser(user_id.value)
  if (ok) {
    localStorage.clear()
    router.push({ name: 'home' })
  }
}
</script>

<template>
    <div class="d-flex mt-4">
        <v-btn variant="plain" icon="mdi-arrow-left" @click="$router.go(-1)" />
    </div>

    <v-form class="mt-4 mx-4 gap" @submit.prevent>
        <v-row>
            <v-col class="d-flex align-center" cols="12" md="6">
                <v-avatar 
                    :image="avatar"
                />
                <v-file-input
                    class="ml-4"
                    hide-details
                    accept="image/png, image/jpeg, image/bmp, image/jpeg, image/webp, image/svg"
                    label="Changer l'image du profil"
                    placeholder="Changer l'image du profil"
                    prepend-icon=""
                    prepend-inner-icon="mdi-upload"
                ></v-file-input>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex" cols="12" md="6">
                <p>Nom d'utilisateur</p>
                <v-text-field hide-details class="ml-6" v-model="firstName" label="Nom d'utilisateur"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex" cols="12" md="6">
                <p>Code de parrainage</p>
                <v-text-field readonly hide-details class="ml-3" v-model="code" label="Code de parrainage"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex" cols="12" md="12">
                <p>Biographie</p>
                <v-text-field hide-details class="ml-16" v-model="biographie" label="Biographie"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex justify-center" cols="12" md="12">
                <v-btn type="submit" @click="updateProfile">Enregistrer</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex justify-center" cols="12" md="12">
                <v-btn type="submit" @click="deleteProfile">Supprimer le compte</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>