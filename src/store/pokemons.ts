import { defineStore } from "pinia";

interface Favorites {
  favorites: string[];
}

export const usePokemonStore = defineStore("favorites", {
  state: (): Favorites => {
    return {
      favorites: [],
    };
  },
  actions: {
    checkLocalStorage() {
      if(localStorage.getItem("pokeFavorites")){
        this.favorites = JSON.parse(localStorage.getItem("pokeFavorites")!);
      }
    },

    addFavorites(id: string) {
      this.favorites.push(id);
      localStorage.setItem("pokeFavorites", JSON.stringify(this.favorites));
    },

    removeFavorite(id: string) {
      this.favorites = this.favorites.filter((e) => e !== id);
      console.log(this.favorites);
      localStorage.setItem("pokeFavorites", JSON.stringify(this.favorites));
    },
  },
});
