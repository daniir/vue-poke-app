import { defineStore } from "pinia";
import { SmallPokemon } from "../interfaces";

interface Favorites {
  favorites: SmallPokemon[];
}

export const usePokemonStore = defineStore("favorites", {
  state: (): Favorites => {
    return {
      favorites: [],
    };
  },
  actions: {
    checkLocalStorage() {
      if (localStorage.getItem("pokeFavorites")) {
        this.favorites = JSON.parse(localStorage.getItem("pokeFavorites")!);
      }
    },

    addFavorites(id: string, name: string) {
      this.favorites.push({ id, name, url: `/pokemon/${name}` });
      localStorage.setItem("pokeFavorites", JSON.stringify(this.favorites));
    },

    removeFavorite(id: string) {
      this.favorites = this.favorites.filter((e) => e.id !== id);
      console.log(this.favorites);
      localStorage.setItem("pokeFavorites", JSON.stringify(this.favorites));
    },
  },
});
