<template>
  <div class="card my-4 p-4">
    <h3>{{ $t('seller.sendMsgToSeller') }}</h3>
    <p class="mb-4 mt-2">{{ $t('seller.sendMsgToSellerDescription') }}</p>

    <div class="flex gap-4">
      <input
        class="bg-gray-100 rounded-3xl w-full border px-4 py-2"
        type="text"
        :placeholder="$t('seller.writeYourQuestion')"
      />
      <button
        style="background: #d20653; background: linear-gradient(180deg, #d20653 0%, #9b0257 100%)"
        class="w-10 h-9 inline-flex items-center justify-center rounded-full"
      >
        <img src="@/assets/icons/send.svg" alt="" />
      </button>
    </div>
  </div>
</template>
