<script setup lang="ts">
import { usePokemons } from "../../composables/";

const { favorites, removeFavorite } = usePokemons();

const handleRemove = (id: string, name: string) => {
    const remove = confirm(`¿Desea eliminar a ${name} de la lista de favoritos?`);
    if(remove){
        removeFavorite(id);
    } else {
        return;
    }
};

</script>

<template>
    <div class="grid place-content-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div 
            class="bg-gray-200 shadow-xl rounded-xl py-2.5 px-2.5  flex justify-between items-center"
            v-for="favorite in favorites"
            :key="favorite.id"
            >
            <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${favorite.id}.png`"
                :alt="favorite.name" width="75">
            <div class="flex flex-col items-center mt-6 w-full">
                <p class="mb-3 text-lg text-center w-full capitalize text-gray-600">{{ favorite.name }}</p>
                <div class="flex flex-row justify-around items-center w-full">
                    <RouterLink 
                        class="bg-green-900 rounded-full py-0.5 px-6 text-white text-sm"
                        :to="favorite.url"
                    >
                        Ver
                    </RouterLink>
                    <button 
                        class="bg-red-600 rounded-full py-0.5 px-2 text-white text-sm flex items-center"
                        @click="handleRemove(favorite.id, favorite.name)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash mr-0.5" width="15"
                            height="15" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 7l16 0" />
                            <path d="M10 11l0 6" />
                            <path d="M14 11l0 6" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                        Eliminar</button>
                </div>
            </div>
        </div>
    </div>
</template>