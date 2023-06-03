<template>
  <div class="container">
    <div class="flex flex-wrap lg:flex-nowrap gap-4 py-4">
      <div class="main w-full lg:w-2/3">
        <SellerCard />
        <SendToSeller />
      </div>
      <div class="sidebar w-full lg:w-1/3 bg-gray-300">
        <Statistics />
      </div>
    </div>
  </div>
</template>

<script setup>
import SellerCard from '@/components/SellerCard.vue'
import SendToSeller from '@/components/SendToSeller.vue'
import Statistics from '@/components/Statistics.vue'
</script>
