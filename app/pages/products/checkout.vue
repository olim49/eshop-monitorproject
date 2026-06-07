<script setup lang="ts">
import products from '~/utils/fakeProducts'
</script>

<template>
  <div class="space-y-20">

    <!-- HERO -->
    <section class="text-center py-20 bg-white shadow-sm rounded-xl">
      <h1 class="text-4xl font-extrabold text-gray-900 mb-4">
        Bienvenue chez Eco‑Hardware
      </h1>

      <p class="text-gray-600 text-lg max-w-2xl mx-auto">
        Matériel informatique sélectionné pour sa qualité, son prix et sa durabilité.
      </p>

      <NuxtLink
          to="/products/1"
          class="inline-block mt-8 bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white px-8 py-3 rounded-lg font-medium transition active:scale-95"
      >
        Découvrir nos produits
      </NuxtLink>
    </section>

    <!-- PRODUITS -->
    <section class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-bold mb-10">Nos produits</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
            v-for="product in products"
            :key="product.id"
            class="bg-white rounded-xl shadow hover:shadow-xl transition p-6 border border-gray-100 hover:-translate-y-1"
        >
          <img
              :src="product.image"
              :alt="product.name"
              class="rounded-lg mb-4 w-full h-48 object-cover"
          />

          <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>

          <p class="text-green-600 font-bold mb-4">{{ product.price }} €</p>

          <NuxtLink
              :to="`/products/${product.id}`"
              class="inline-block bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white px-4 py-2 rounded-lg transition active:scale-95"
          >
            Voir le produit
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>
