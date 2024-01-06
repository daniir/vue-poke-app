import { ref } from "vue";

export function usePokemons() {
  const favorites = ref<string[]>([]);

  const checkLocalStorage = () => {
    const checkStorage = localStorage.getItem("pokeFavorites");
    if (checkStorage) {
      const data = JSON.parse(checkStorage);
      data.map((e: string) => favorites.value.push(e));
    } else {
      favorites.value = [];
    }
  };

  const addFavorites = (id: string) => {
    favorites.value.push(id);
    localStorage.setItem("pokeFavorites", JSON.stringify(favorites.value));
  };

  const removeFavorite = (id: string) => {
    favorites.value = favorites.value.filter((e) => e !== id);
    console.log(favorites.value);
    localStorage.setItem("pokeFavorites", JSON.stringify(favorites.value));
  };

  return {
    favorites,
    checkLocalStorage,
    addFavorites,
    removeFavorite,
  };
}
