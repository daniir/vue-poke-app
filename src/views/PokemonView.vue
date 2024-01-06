<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { PokemonData } from "../interfaces";
import { pokeApi } from '../utils/axios';
import PokemonDetail from '../components/pokemons/PokemonDetail.vue';
import LoadingSpinner from '../components/shared/LoadingSpinner.vue';

const route = useRoute();
const pokemon = ref<PokemonData>();

const { name } = route.params;

const getPokemon = async () => {
    const { data } = await pokeApi.get<PokemonData>(`/${name}`);
    pokemon.value = data;
};

getPokemon();

</script>

<template>
    <div class="flex justify-center items-center" v-if="pokemon">
        <PokemonDetail
            :name="pokemon.name"
            :sprites="pokemon.sprites"
            :stats="pokemon.stats"
        />
    </div>
    <div class="flex justify-center items-center h-[calc(100vh-8rem)]" v-else>
        <LoadingSpinner/>
    </div>
</template>