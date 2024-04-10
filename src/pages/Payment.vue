<template>
    <div class="d-flex mt-4">
        <v-btn variant="plain" icon="mdi-arrow-left" @click="$router.go(-1)" />
    </div>
    <v-row class="d-flex flex-column align-center text-center">
        <v-col cols="12" md="6">
            <h1>Moyen de paiement</h1>
            <div class="d-flex justify-center">
                <v-img
                    src="/assets/Visa.png"
                    max-width="200"
                />
                <v-img
                    src="/assets/Paypal.png"
                    max-width="200"
                />
                <v-img
                    src="/assets/MasterCard.png"
                    max-width="200"
                />
            </div>
        </v-col>
    </v-row>
</template>