<script setup lang="ts">
import { Sprites } from '../../interfaces';

defineProps<{
    sprites: Sprites
}>();
</script>

<template>
    <div class="flex shadow-lg rounded-lg">
        <img :src="sprites.front_default" alt="" />
        <img :src="sprites.front_shiny" alt="" />
        <img :src="sprites.back_default" alt="" />
        <img :src="sprites.back_shiny" alt="" />
    </div>
</template>