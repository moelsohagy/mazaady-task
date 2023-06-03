<template>
  <div class="container">
    <div class="flex gap-4 py-4">
      <div class="main w-2/3">
        <SellerCard />
        <SendToSeller />
      </div>
      <div class="sidebar w-1/3 bg-gray-300">sidebar</div>
    </div>
  </div>
</template>

<script setup>
import SellerCard from '@/components/SellerCard.vue'
import SendToSeller from '@/components/SendToSeller.vue'
</script>
