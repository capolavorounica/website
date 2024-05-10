<script setup>
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
    <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
            <div class="text-center">
                <h1 class="text-5xl font-bold">Educazione Civica</h1>
                <p class="py-6 text-2xl">
                    Raccolta dei temi trattati inerenti all'educazione civica, che variano dall’inquinamento al
                    riscaldamento globale passando per
                    l’ecologia
                </p>
                <RouterLink to="/smart" class="btn bg-red-500 hover:bg-red-300 text-xl text-white">Scopri di più
                </RouterLink>
            </div>
            <div class="quote">
                <div class="quote__content bg-white p-8 rounded-lg shadow-md">
                    <p class="text-xl font-medium text-gray-800">
                        "Quando avranno inquinato l'ultimo fiume, abbattuto l'ultimo albero, preso l'ultimo bisonte,
                        pescato l'ultimo pesce, solo allora si accorgeranno di non poter mangiare il denaro accumulato
                        nelle loro banche"
                    </p>
                    <p class="text-gray-600 mt-4">- Toro Seduto</p>
                </div>
            </div>
        </div>
    </div>
</template>