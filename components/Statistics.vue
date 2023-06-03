<template>
  <div class="card p-3">
    <div class="flex justify-between py-3 px-2 rounded bg-[#414141] text-white">
      <span>{{ $t('sidebar.broadcastDate') }}</span>
      <span>22-01-2022</span>
    </div>

    <div class="flex gap-2 mt-4">
      <div class="bg-[#44215D] text-white statistics-sub-card">
        <span class="text-xs">{{ $t('sidebar.currentValueOfauction') }}</span>
        <span class="text-2xl font-bold">5000 $</span>
      </div>
      <div class="bg-[#EAE7ED] text-[#44215D] statistics-sub-card">
        <span class="text-xs">{{ $t('sidebar.presentValueAfterTax') }}</span>
        <span class="text-2xl font-bold">5050 $</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.statistics-sub-card {
  @apply w-full rounded flex flex-col gap-3 text-center p-2;
}
</style>
