<script setup lang="ts">
import { usePokemons } from "../composables/";
import PokemonFavoriteList from "../components/pokemons/PokemonFavoriteList.vue";

const { favorites } = usePokemons();

</script>

<template>
    <div v-if="favorites.length > 0">
        <h1 class="text-center font-bold text-5xl my-5 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 from-10% via-orange-500 via-30% to-red-500 to-90%">Mis Pokémons</h1>
        <PokemonFavoriteList />
    </div>
    <div class="flex flex-col justify-center items-center mt-14" v-else>
        <p class="text-4xl text-gray-500 mb-5">No se han añadido pokémons</p>
        <RouterLink class="w-52 py-1.5 px-0.5 text-white text-center bg-red-700 rounded-full" to="/">Regresar al listado</RouterLink>
    </div>
</template>