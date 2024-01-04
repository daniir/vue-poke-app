<script setup lang="ts">

const routes = [
    { path: '/', name: 'Inicio' },
    { path: '/favorites', name: 'Favoritos' },
];

</script>

<template>
    <div class="bg-red-600 p-2 m-2 rounded">
        <div class="flex justify-between items-center">
            <div>
                <RouterLink to="/">
                    <img
                    src="../../assets/pokemon-logo.svg"
                    width="110px"
                />
                </RouterLink>
            </div>
            <nav >
                <RouterLink 
                    class="m-5 text-white"
                    v-for="route in routes" 
                    :key="route.path"
                    :to="route.path"
                >
                    {{ route.name }}
                </RouterLink>
            </nav>
            <div></div>
        </div>
    </div>
</template>