<template>
  <div class="card p-3 mt-4">
    <h3>{{ $t('sidebar.contenders') }}</h3>

    <div class="flex flex-col gap-2 mt-4">
      <div v-for="(item, index) in contenders" :key="index" class="flex justify-between gap-2">
        <div class="flex items-center gap-3">
          <span>
            <img :src="item.image" alt=" " />
          </span>
          <span class="flex flex-col">
            <span class="text-sm font-bold">{{ item.name }}</span>
            <span class="text-xs text-[#808080]">{{ item.time }}</span>
          </span>
        </div>
        <span class="flex items-center px-4 bg-[#FFF9E6] text-[#FDBC01] text-[22px] font-bold" dir="ltr">
          {{ item.value }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import image1 from '@/assets/images/profile-1.png'
import image2 from '@/assets/images/profile-2.png'
import image3 from '@/assets/images/profile-3.png'

const { t } = useI18n()

const contenders = [
  { image: image2, name: t('sidebar.bidderName'), time: '13:59:00', value: '+20' },
  { image: image1, name: t('sidebar.bidderName'), time: '13:59:00', value: '+20' },
  { image: image3, name: t('sidebar.bidderName'), time: '13:59:00', value: '+20' },
  { image: image2, name: t('sidebar.bidderName'), time: '13:59:00', value: '+20' },
  { image: image1, name: t('sidebar.bidderName'), time: '13:59:00', value: '+20' },
]
</script>
