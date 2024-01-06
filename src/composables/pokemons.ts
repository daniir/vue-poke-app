import { ref } from "vue";
import { pokeApi } from "../utils/axios";
import { storeToRefs } from "pinia";
import { usePokemonStore } from "../store/pokemons";
import { PokemonResponse, SmallPokemon } from "../interfaces";

export const usePokemons = () => {
  
  const pokemons = ref<SmallPokemon[]>([]);
  const apiResult = ref<PokemonResponse>();
  const usePokemons = usePokemonStore();

  //Axios
  const getPokemons = async (url: string) => {
    const { data } = await pokeApi.get<PokemonResponse>(url);
    apiResult.value = data;
    pokemons.value = data.results.map((pokemon) => ({
      ...pokemon,
      id: pokemon.url.split("/").at(-2)!,
    }));
  };

  //Store
  const { favorites } = storeToRefs(usePokemons);
  const { checkLocalStorage, addFavorites, removeFavorite } = usePokemons;

  return {
    pokemons,
    apiResult,
    favorites,
    getPokemons,
    checkLocalStorage,
    addFavorites,
    removeFavorite,
  };
}
