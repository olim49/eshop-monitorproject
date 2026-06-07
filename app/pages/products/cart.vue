<script setup lang="ts">
import { useCart } from '~/composables/useCart'
import { useAnalytics } from '~/composables/useAnalytics'

const cart = useCart()
const analytics = useAnalytics()
</script>

<template>
  <div>
    <h1>Votre panier</h1>

    <div v-for="item in cart.items" :key="item.id">
      {{ item.name }} — {{ item.price }} €
    </div>

    <NuxtLink
        to="/products/checkout"
        @click="analytics.track('checkout_start')"
        class="checkout-btn"
    >
      Passer la commande
    </NuxtLink>
  </div>
</template>
