<template>
  <div class="container">
    <div class="flex">
      <div class="main w-2/3 py-4">
        <SellerCard />
      </div>
      <div class="sidebar w-1/3">sidebar</div>
    </div>
  </div>
</template>

<script setup>
import SellerCard from '@/components/SellerCard.vue'
</script>
