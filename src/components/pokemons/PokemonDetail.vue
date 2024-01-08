<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Sprites, Stat } from '../../interfaces';

defineProps<{
    name: string;
    sprites: Sprites;
    stats: Stat[];
}>();

const router = useRouter();
</script>

<template>
    <div class="px-5 border-2 rounded-lg">
            <div class="flex justify-around items-center bg-gray-800 p-5 rounded-md my-5 shadow-md">
                <img :src="sprites.front_default" :alt="`${name}_front_default`" width="75"/>
                <img :src="sprites.front_shiny" :alt="`${name}_front_shiny`" width="75"/>
                <img :src="sprites.back_default" :alt="`${name}_back_default`" width="75"/>
                <img :src="sprites.back_shiny" :alt="`${name}_back_shiny`" width="75"/>
            </div>
            <div class="my-6 flex justify-between items-center px-4 p-3 rounded-sm shadow">
                <p class="font-bold text-gray-800">Estadisticas</p>
                <p class="font-bold text-gray-800">Nivel</p>
            </div>
            <div class="my-4 flex justify-between items-center px-4" v-for="stat in stats" :key="stat.stat.name">
                <p class="capitalize text-sm font-bold text-gray-500">{{ stat.stat.name }}</p>
                <div class="w-3/5 bg-gray-200 rounded-full dark:bg-slate-700">
                    <div class="rounded-full text-sm text-center text-white p-0.5 font-bold"
                        :class="[stat.base_stat <= 30 ? 'bg-red-600' : stat.base_stat > 60 ? 'bg-green-600' : 'bg-yellow-400']"
                        :style="{ width: `${stat.base_stat < 100 ? stat.base_stat : 100 }%` }">{{ stat.base_stat }}%</div>
                </div>
            </div>
            <button 
                class="flex justify-center w-full my-8 p-4 rounded-full text-white bg-cyan-950 hover:font-extrabold"
                @click="router.back()"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 24 24"
                    style="fill: rgba(255,255,255, 1);transform: ;msFilter:;">
                    <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
                </svg>
                Regresar
            </button>
        </div>
</template>