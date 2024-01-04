<script setup lang="ts">
import { ref } from 'vue';
import { pokeApi } from '../utils/axios';
import { PokemonResponse, SmallPokemon } from '../interfaces/';
import PokemonCard from '../components/pokemons/PokemonCard.vue';

const apiResult = ref<PokemonResponse>();
const pokemons = ref<SmallPokemon[]>([]);

const getPokemons =async (url: string) => {
    const { data } = await pokeApi.get<PokemonResponse>(url);
    apiResult.value = data;
    console.log('resp: ', apiResult.value);
    pokemons.value = data.results.map((pokemon) => ({
        ...pokemon,
        id: pokemon.url.split('/').at(-2)!,
    }));
};

getPokemons('/?limit=21');

</script>

<template>
    <h1 class="text-center font-bold text-5xl my-5 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 from-10% via-orange-500 via-30% to-red-500 to-90%">Pokemons List</h1>
        <div class="grid justify-items-center grid-cols-2 md:grid-cols-3 gap-4">
            <PokemonCard
                v-for="pokemon in pokemons" 
                :key="pokemon.url"
                :id="pokemon.id"
                :name="pokemon.name"
            />
        </div>
        <div class="my-10 flex flex-wrap justify-center items-center">
            <button 
                class="mr-6 border-2 border-blue-800 bg-blue-800 text-white py-2 px-6 rounded-2xl"
                :class="!apiResult?.previous ? 'border-gray-500 bg-gray-500' : ''"
                :disabled="!apiResult?.previous"
                @click="getPokemons(apiResult?.previous!)"
            >
                Regresar
            </button>
            <button 
                class="mr-6 border-2 border-blue-800 bg-blue-800 text-white py-2 px-6 rounded-2xl"
                :class="!apiResult?.next ? 'border-gray-500 bg-gray-500' : ''"
                :disabled="!apiResult?.next"
                @click="getPokemons(apiResult?.next!)"
            >
                Siguiente
            </button>
        </div>
</template>