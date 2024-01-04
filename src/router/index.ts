import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import HomeView from '../views/HomeView.vue';
import FavoriteView from "../views/FavoriteView.vue";
import PokemonView from "../views/PokemonView.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/favorites',
        name: 'Favorites',
        component: FavoriteView
    },
    {
        path: '/pokemon/:name',
        name: 'Pokemon',
        component: PokemonView
    }
];

const route = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'text-yellow-300 font-bold text-xl underline'
});

export default route;