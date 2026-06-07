<script setup lang="ts">
import { useRoute } from 'vue-router'
import products from '~/utils/fakeProducts'
import { useCart } from '~/composables/useCart'

const route = useRoute()
const cart = useCart()

const id = Number(route.params.id)
const product = products.find(p => p.id === id)
</script>

<template>
  <div class="max-w-3xl mx-auto mt-12 px-4">
    <div v-if="product" class="bg-white shadow-lg rounded-xl p-8 border border-gray-100">

      <h1 class="text-3xl font-bold mb-4 text-gray-900">
        {{ product.name }}
      </h1>

      <p class="text-2xl font-semibold text-green-600 mb-6">
        {{ product.price }} €
      </p>

      <p class="text-gray-600 leading-relaxed mb-8">
        Un excellent produit sélectionné par Eco‑Hardware pour sa qualité et son prix.
      </p>

      <button
          @click="cart.add(product)"
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
      >
        Ajouter au panier
      </button>
    </div>

    <div v-else class="text-center text-gray-500 mt-20">
      Produit introuvable.
    </div>
  </div>
</template>
