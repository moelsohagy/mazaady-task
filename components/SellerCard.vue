<template>
  <div class="card">
    <div class="relative mb-4">
      <img class="w-full" src="@/assets/images/seller-banner.png" alt="" />
      <div class="absolute top-0 p-2 w-full flex justify-between">
        <div class="flex gap-2">
          <span class="bg-black/80 rounded-full p-2 w-8 h-8 cursor-pointer">
            <img class="w-full" src="@/assets/icons/share.svg" alt="" />
          </span>
          <span class="bg-black/80 rounded-full p-2 w-8 h-8 cursor-pointer">
            <img class="w-full" src="@/assets/icons/love.svg" alt="" />
          </span>
          <span class="bg-black/80 rounded-full p-2 w-8 h-8 cursor-pointer">
            <img class="w-full" src="@/assets/icons/flag.svg" alt="" />
          </span>
        </div>
        <div class="flex text-white">
          <span class="bg-black/80 p-1 px-2 flex gap-1 border-e rounded-s">
            <span>3000</span>
            <img class="w-4" src="@/assets/icons/view.svg" alt="" />
          </span>
          <span class="bg-black/80 p-1 px-2 rounded-e">
            <span>02:00</span>
          </span>
        </div>
      </div>
    </div>

    <div class="p-4">
      <div class="flex gap-4 mb-3">
        <div class="image relative w-14 h-14">
          <img class="w-full" src="@/assets/images/profile.png" alt="" />
          <span class="absolute bottom-7 end-7 translate-x-full translate-y-full bg-white w-8 h-8 rounded-full">
            <img class="top-1/2 start-1/2 translate-x-full translate-y-full" src="@/assets/icons/love-2.svg" alt="" />
          </span>
        </div>
        <div class="name flex flex-col pt-1">
          <span class="text-[#44215D] mb-2">{{ $t('seller.name') }}</span>
          <span class="text-[#44215D] text-xs">+966598398</span>
        </div>
        <div class="rate pt-2">
          <img src="@/assets/images/rate.png" alt="" />
        </div>
      </div>
      <h3 class="text-[#414141]">{{ $t('seller.description') }}</h3>
      <span class="text-[#808080] text-xs">{{ $t('seller.code') }}</span>
      <div class="flex justify-between mt-3">
        <div class="flex gap-2">
          <span class="inline-flex items-center rounded-sm bg-red-100 px-4 py-2 text-xs font-medium text-red-700">
            +10000
          </span>
          <span class="inline-flex items-center rounded-sm bg-red-100 px-4 py-2 text-xs font-medium text-red-700">
            +10010
          </span>
          <span class="inline-flex items-center rounded-sm bg-red-100 px-4 py-2 text-xs font-medium text-red-700">
            +10020
          </span>
        </div>
        <div class="flex gap-2">
          <input class="border border-[#CCCCCC] h-10 px-2" type="text" :placeholder="$t('seller.writeAmount')" />
          <button
            style="background: #d20653; background: linear-gradient(-90deg, #d20653 0%, #9b0257 100%)"
            class="text-white rounded-sm h-10 px-6"
          >
            {{ $t('seller.confirm') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
