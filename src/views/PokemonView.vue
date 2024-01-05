<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { PokemonData } from "../interfaces";
import { pokeApi } from '../utils/axios';
//import PokemonSprites from '../components/pokemons/PokemonSprites.vue';

const router = useRoute();
const pokemon = ref<PokemonData>();

const { name } = router.params;

const getPokemon = async () => {
    const { data } = await pokeApi.get<PokemonData>(`/${name}`);
    pokemon.value = data;
};

getPokemon();

</script>

<template>
    <div class="flex justify-center items-center" v-if="pokemon">
        <div class="mx-auto px-5 w-70">
            <div class="flex justify-center items-center bg-gray-800 p-5">
                <img :src="pokemon.sprites.front_default" :alt="`${pokemon.name}_front_default`" />
                <img :src="pokemon.sprites.front_shiny" :alt="`${pokemon.name}_front_shiny`" />
                <img :src="pokemon.sprites.back_default" :alt="`${pokemon.name}_back_default`" />
                <img :src="pokemon.sprites.back_shiny" :alt="`${pokemon.name}_back_shiny`" />
            </div>
            <div class="my-6 flex justify-between items-center px-4">
                <p class="font-bold text-gray-500">Estadisticas</p>
                <p class="font-bold text-gray-500">Nivel</p>
            </div>
            <div class="my-4 flex justify-between items-center px-4" v-for="stat in pokemon.stats" :key="stat.stat.name">
                <p class="capitalize text-sm font-bold text-gray-500">{{ stat.stat.name }}</p>
                <p class="rounded-full bg-gray-200 px-2 py-0.5 font-semibold text-gray-600">{{ stat.base_stat }}</p>
            </div>
        </div>
    </div>
    <div class="flex justify-center items-center h-[calc(100vh-8rem)]" v-else>
        <p>...Cargando...</p>
    </div>
</template>