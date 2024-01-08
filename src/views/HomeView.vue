<script setup lang="ts">
import { usePokemons } from "../composables/";
import PokemonCard from '../components/pokemons/PokemonCard.vue';
import LoadingSpinner from "../components/shared/LoadingSpinner.vue";

const { pokemons, apiResult ,getPokemons, checkLocalStorage } = usePokemons();

getPokemons('/?limit=21');
checkLocalStorage();

</script>

<template>
    <h1 class="text-center font-bold text-5xl my-5 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 from-10% via-orange-500 via-30% to-red-500 to-90%">Lista de Pokémons</h1>
        <div v-if="pokemons.length > 0">
            <div class="grid justify-items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
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
        </div>
        <div class="flex justify-center items-center h-[calc(100vh-8rem)]" v-else>
            <LoadingSpinner />
        </div>
</template>