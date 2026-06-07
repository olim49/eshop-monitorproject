<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-800">

    <!-- HEADER -->
    <header class="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
          Eco‑Hardware
        </NuxtLink>

        <div class="flex items-center gap-6 text-gray-600 font-medium">
          <NuxtLink to="/" class="hover:text-blue-600 transition">Accueil</NuxtLink>
          <NuxtLink to="/products/cart" class="hover:text-blue-600 transition">Panier</NuxtLink>
        </div>
      </nav>
    </header>

    <!-- CONTENU DES PAGES -->
    <main class="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
      <NuxtPage />
    </main>

    <!-- FOOTER -->
    <footer class="bg-white border-t border-gray-200 py-10 mt-20">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-gray-600">

        <div>
          <h3 class="font-semibold mb-3">Eco‑Hardware</h3>
          <p class="text-sm">Matériel informatique durable et sélectionné avec soin.</p>
        </div>

        <div>
          <h3 class="font-semibold mb-3">Navigation</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/" class="hover:text-blue-600">Accueil</NuxtLink></li>
            <li><NuxtLink to="/products/cart" class="hover:text-blue-600">Panier</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-3">Contact</h3>
          <p class="text-sm">support@ecohardware.com</p>
        </div>

      </div>

      <p class="text-center text-gray-400 text-sm mt-10">
        © 2026 Eco‑Hardware — Tous droits réservés
      </p>
    </footer>

  </div>
</template>