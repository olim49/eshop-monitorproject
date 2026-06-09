<script setup lang="ts">
import products from '~/utils/fakeProducts'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">

    <!-- HEADER DESKTOP -->
    <header class="bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <img
              src="https://copilot.microsoft.com/th/id/BCO.2d82ed4f-b664-4b38-8339-9392354af228.png"
              alt="EcoHardware logo"
              class="h-12 w-auto"
          />
          <span class="text-2xl font-bold text-blue-600">Eco‑Hardware</span>
        </NuxtLink>

        <!-- Menu desktop (toujours visible) -->
        <div class="flex items-center gap-10 text-gray-700 font-medium text-lg">
          <NuxtLink to="/" class="hover:text-blue-600 transition">Accueil</NuxtLink>
          <NuxtLink to="/products" class="hover:text-blue-600 transition">Produits</NuxtLink>
          <NuxtLink to="/cart" class="hover:text-blue-600 transition">Panier</NuxtLink>
        </div>

        <!-- CTA -->
        <NuxtLink
            to="/products"
            class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition active:scale-95 text-sm font-semibold"
        >
          Voir les produits
        </NuxtLink>

      </nav>
    </header>

    <!-- CONTENU -->
    <main class="flex-1 max-w-7xl mx-auto w-full px-8 py-12 space-y-20">

      <!-- HERO LARGE DESKTOP -->
      <section
          class="relative h-[420px] rounded-xl overflow-hidden"
          style="background-image: url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80'); background-size: cover; background-position: center;"
      >
        <div class="absolute inset-0 bg-black/55"></div>

        <div class="relative z-10 flex flex-col justify-center h-full px-12 text-white max-w-xl">
          <h1 class="text-5xl font-extrabold mb-4 leading-tight">
            Matériel informatique durable & performant
          </h1>
          <p class="text-lg mb-6">
            Une sélection de produits pensés pour la performance, la longévité et un meilleur impact environnemental.
          </p>

          <NuxtLink
              to="/products"
              class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition active:scale-95 text-base"
          >
            Explorer la boutique
          </NuxtLink>
        </div>
      </section>

      <!-- CATÉGORIES (DESKTOP GRID) -->
      <section>
        <h3 class="text-3xl font-bold mb-8">Catégories</h3>

        <div class="grid grid-cols-4 gap-8">
          <div class="relative rounded-xl overflow-hidden shadow cursor-pointer group">
            <img
                src="https://images.unsplash.com/photo-1587202372775-98927a7a2c1a?auto=format&fit=crop&w=800&q=80"
                class="w-full h-40 object-cover group-hover:scale-110 transition"
            />
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span class="text-white text-xl font-semibold">Claviers</span>
            </div>
          </div>

          <div class="relative rounded-xl overflow-hidden shadow cursor-pointer group">
            <img
                src="https://images.unsplash.com/photo-1587202372775-98927a7a2c1a?auto=format&fit=crop&w=800&q=80"
                class="w-full h-40 object-cover group-hover:scale-110 transition"
            />
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span class="text-white text-xl font-semibold">Souris</span>
            </div>
          </div>

          <div class="relative rounded-xl overflow-hidden shadow cursor-pointer group">
            <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
                class="w-full h-40 object-cover group-hover:scale-110 transition"
            />
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span class="text-white text-xl font-semibold">Écrans</span>
            </div>
          </div>

          <div class="relative rounded-xl overflow-hidden shadow cursor-pointer group">
            <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                class="w-full h-40 object-cover group-hover:scale-110 transition"
            />
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span class="text-white text-xl font-semibold">Accessoires</span>
            </div>
          </div>
        </div>
      </section>

      <!-- PRODUITS (GRID PENSÉE POUR GRAND ÉCRAN) -->
      <section>
        <h3 class="text-3xl font-bold mb-10">Nos produits</h3>

        <div class="grid grid-cols-3 gap-10">
          <div
              v-for="product in products"
              :key="product.id"
              class="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 border border-gray-100 hover:-translate-y-1"
          >
            <img
                :src="product.image"
                :alt="product.name"
                class="rounded-lg mb-4 w-full h-52 object-cover"
            />

            <h4 class="text-xl font-semibold mb-1">{{ product.name }}</h4>

            <p class="text-gray-500 text-sm mb-3">Livraison rapide • Garantie 2 ans</p>

            <p class="text-green-600 font-bold text-xl mb-4">{{ product.price }} €</p>

            <NuxtLink
                :to="`/products/${product.id}`"
                class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition active:scale-95 w-full text-center"
            >
              Voir le produit
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- BANNIÈRE PROMO LARGE -->
      <section
          class="mt-10 rounded-xl overflow-hidden relative h-220"
          style="background-image: url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80'); background-size: cover; background-position: center;"
      >
        <div class="absolute inset-0 bg-black/55"></div>

        <div class="relative z-10 flex flex-col justify-center h-full px-12 text-white max-w-xl">
          <h3 class="text-3xl font-bold mb-2">Offres spéciales</h3>
          <p class="mb-4 text-lg">
            Profitez de réductions exclusives sur une sélection de produits éco‑responsables.
          </p>

          <NuxtLink
              to="/products"
              class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition active:scale-95 text-sm font-semibold"
          >
            Voir les offres
          </NuxtLink>
        </div>
      </section>

      <!-- POURQUOI NOUS CHOISIR -->
      <section class="bg-white py-16 mt-16 border border-gray-200 rounded-xl">
        <div class="grid grid-cols-3 gap-10 text-center px-10">

          <div>
            <h4 class="text-xl font-bold mb-2">Qualité garantie</h4>
            <p class="text-gray-600">Tous nos produits sont testés et sélectionnés avec soin.</p>
          </div>

          <div>
            <h4 class="text-xl font-bold mb-2">Livraison rapide</h4>
            <p class="text-gray-600">Expédition sous 24h partout en France métropolitaine.</p>
          </div>

          <div>
            <h4 class="text-xl font-bold mb-2">Support client</h4>
            <p class="text-gray-600">Une équipe disponible 7j/7 pour vous accompagner.</p>
          </div>

        </div>
      </section>

    </main>

    <!-- FOOTER DESKTOP -->
    <footer class="bg-white border-t border-gray-200 py-6">
      <div class="max-w-7xl mx-auto px-8 flex items-center justify-between text-gray-500 text-sm">
        <span>© 2026 Eco‑Hardware — Tous droits réservés</span>
        <span>Conditions générales • Politique de confidentialité</span>
      </div>
    </footer>

  </div>
</template>
