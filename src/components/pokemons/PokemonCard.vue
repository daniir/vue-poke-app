<script setup lang="ts">
import { usePokemons } from '../../composables/';

const { favorites, addFavorites, removeFavorite } = usePokemons();

defineProps<{
    id: string;
    name: string;
}>();

</script>

<template>
    <div class="flex flex-col justify-center items-center border-2 shadow-lg rounded-3xl bg-slate-900">
        <div>
            <img 
                class="h-36 object-cover my-6"
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
            />
        </div>
        <div class="bg-white flex flex-col justify-center items-center w-full rounded-b-2xl">
            <h5 class="capitalize text-2xl font-semibold my-1.5">{{ name }}</h5>
            <div class="p-3 mb-2 ">
                <div class="flex justify-between items-center">
                    <RouterLink 
                        class="text-green-600 hover:text-green-800 hover:underline"
                        :to="`/pokemon/${name}`"
                    >
                        Detalle
                    </RouterLink>
                    <button v-if="!favorites.find(e => e.id === id)"
                        class="flex items-center p-2"
                        @click="addFavorites(id, name)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            class="icon icon-tabler icon-tabler-heart"
                            
                            width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                        </svg><span class="text-slate-600 hover:text-slate-800">Favoritos</span>
                    </button>
                    <button v-else
                        class="flex items-center p-2"
                        @click="removeFavorite(id)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            class="icon icon-tabler icon-tabler-heart fill-red-600"
                            width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                        </svg><span class="text-slate-600 hover:text-slate-800">Remover</span>
                    </button>
            </div>
        </div>
        </div>
    </div>
</template>