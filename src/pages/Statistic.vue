<script setup lang="ts">
import { onMounted, ref } from "vue";
import Services from "../service/Services"
import Users from "../service/Users"

const backEndUsers = new Users();
const graph = ref<boolean>(false)
const graph1 = ref<boolean>(false)
const backEndService = new Services();
const graph2 =ref<boolean>(false)

onMounted(() => {
    backEndUsers.getNbUser().then(body => {
        const response = body.nb_utilisateurs
        options.xaxis.categories = response.map((element:Cat)=>{
            const date = new Date(element.date)
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        })
        series[0].data = response.map((element:Cat)=>element.count)
        graph.value = true
    })
})

onMounted(() => {
    backEndUsers.getNbPresta().then(body => {
        const response = body.nb_prestataires
        options.xaxis.categories = response.map((element:Cat)=>{
            const date = new Date(element.date)
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        })
        series[0].data = response.map((element:Cat)=>element.count)
        graph1.value = true
    })
})

onMounted(() => {
    backEndService.getNbServices().then(body => {
        const response = body.nb_services
        options.xaxis.categories = response.map((element:Cat)=>{
            const date = new Date(element.date)
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        })
        series[0].data = response.map((element:Cat)=>element.count)
        graph2.value = true
    })
})

interface Cat {
    count: number;
    date: Date;
}

const options = {
    chart: {
        type: 'line',
        foreColor: '#000000',
        toolbar: {
            show: false
        },
        width: '100%',
    },
    xaxis: {
        categories: [] as string[]
    },
    colors: ['#647295', '#9f496e','#CBD4C2'],
    tooltip: {
        theme: 'dark'
    },
}

let series: { name: string, data: number[] }[] = [{
    name: 'Utilisateurs',
    data: []
}];
</script>

<template>
    <v-row>
        <v-col class="d-flex align-center" cols="12" md="6">
            <div class="d-flex flex-column justify-start rounded-lg pa-4 ga-8">
                <span class="text-h4">Nombre d'utilisateurs créés les 7 derniers jours</span>
                <apexchart v-if="graph" type="bar" :options="options" :series="series"></apexchart>
            </div>
        </v-col>
        <v-col class="d-flex align-center" cols="12" md="6">
            <div class="d-flex flex-column justify-start rounded-lg pa-4 ga-8">
                <span class="text-h4">Nombre de prestataires créés les 7 derniers jours</span>
                <apexchart v-if="graph1" type="bar" :options="options" :series="series"></apexchart>
            </div>
        </v-col>
        <v-col class="d-flex align-center" cols="12" md="6">
            <div class="d-flex flex-column justify-start rounded-lg pa-4 ga-8">
                <span class="text-h4">Nombre de services créés les 7 derniers jours</span>
                <apexchart v-if="graph2" type="bar" :options="options" :series="series"></apexchart>
            </div>
        </v-col>
    </v-row>
</template>