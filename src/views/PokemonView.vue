<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { PokemonData } from "../interfaces";
import { pokeApi } from '../utils/axios';
import PokemonSprites from '../components/pokemons/PokemonSprites.vue';

const router = useRoute();
const pokemon = ref<PokemonData>();

const { name } = router.params;

const getPokemon = async() => {
    const { data } = await pokeApi.get<PokemonData>(`/${name}`);
    pokemon.value = data;
};

getPokemon();

</script>

<template>
    <div class="flex flex-col justify-center items-center" v-if="pokemon">
        <h1 class="font-bold text-3xl my-3">Pokemon detail <span class="capitalize">{{ pokemon?.name }}</span></h1>
        <PokemonSprites :sprites="pokemon?.sprites"/>
    </div>
    <div class="flex justify-center items-center h-[calc(100vh-8rem)]" v-else>
        <p>...Cargando...</p>
    </div>
</template>