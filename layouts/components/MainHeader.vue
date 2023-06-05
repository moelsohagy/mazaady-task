<template>
  <header class="w-full text-text-opposite bg-primary">
    <nav class="container flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex items-center gap-x-12">
        <NuxtLink :to="localePath('/')" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-10 px-2 py-1 w-auto bg-white rounded-lg" src="@/assets/images/logo.png" alt="" />
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <!-- <Bars3Icon class="h-6 w-6" aria-hidden="true" /> -->
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:items-center gap-4">
        <NuxtLink :to="localePath('/')">
          {{ $t('main.home') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/categories')">
          {{ $t('categories.categories') }}
        </NuxtLink>
        <div class="flex">
          <button
            v-for="{ code } in locales"
            :key="code"
            @click="changeLanguage(code)"
            class="px-3 flex items-center gap-2"
            :class="{ hidden: code == locale }"
          >
            <svg
              class="fill-text-opposite"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18C7.76667 18 6.6 17.7627 5.5 17.288C4.4 16.8127 3.446 16.1707 2.638 15.362C1.82933 14.554 1.18733 13.6 0.712 12.5C0.237333 11.4 0 10.2333 0 9C0 7.75 0.237333 6.579 0.712 5.487C1.18733 4.39567 1.82933 3.44567 2.638 2.637C3.446 1.829 4.4 1.18733 5.5 0.712C6.6 0.237333 7.76667 0 9 0C10.25 0 11.421 0.237333 12.513 0.712C13.6043 1.18733 14.5543 1.829 15.363 2.637C16.171 3.44567 16.8127 4.39567 17.288 5.487C17.7627 6.579 18 7.75 18 9C18 10.2333 17.7627 11.4 17.288 12.5C16.8127 13.6 16.171 14.554 15.363 15.362C14.5543 16.1707 13.6043 16.8127 12.513 17.288C11.421 17.7627 10.25 18 9 18ZM9 17C9.58333 16.25 10.0667 15.5127 10.45 14.788C10.8333 14.0627 11.1417 13.25 11.375 12.35H6.625C6.89167 13.3 7.20833 14.1373 7.575 14.862C7.94167 15.5873 8.41667 16.3 9 17ZM7.725 16.85C7.25833 16.3 6.83333 15.6207 6.45 14.812C6.06667 14.004 5.78333 13.1833 5.6 12.35H1.75C2.33333 13.5833 3.15 14.6 4.2 15.4C5.25 16.2 6.425 16.6833 7.725 16.85ZM10.275 16.85C11.575 16.6833 12.75 16.2 13.8 15.4C14.85 14.6 15.6667 13.5833 16.25 12.35H12.4C12.15 13.2 11.8333 14.029 11.45 14.837C11.0667 15.6457 10.675 16.3167 10.275 16.85ZM1.35 11.35H5.375C5.30833 10.9333 5.25833 10.5333 5.225 10.15C5.19167 9.76667 5.175 9.38333 5.175 9C5.175 8.61667 5.19167 8.23333 5.225 7.85C5.25833 7.46667 5.30833 7.06667 5.375 6.65H1.35C1.23333 7 1.146 7.379 1.088 7.787C1.02933 8.19567 1 8.6 1 9C1 9.4 1.02933 9.804 1.088 10.212C1.146 10.6207 1.23333 11 1.35 11.35ZM6.375 11.35H11.625C11.6917 10.9333 11.7417 10.5373 11.775 10.162C11.8083 9.78733 11.825 9.4 11.825 9C11.825 8.6 11.8083 8.21233 11.775 7.837C11.7417 7.46233 11.6917 7.06667 11.625 6.65H6.375C6.30833 7.06667 6.25833 7.46233 6.225 7.837C6.19167 8.21233 6.175 8.6 6.175 9C6.175 9.4 6.19167 9.78733 6.225 10.162C6.25833 10.5373 6.30833 10.9333 6.375 11.35ZM12.625 11.35H16.65C16.7667 11 16.8543 10.6207 16.913 10.212C16.971 9.804 17 9.4 17 9C17 8.6 16.971 8.19567 16.913 7.787C16.8543 7.379 16.7667 7 16.65 6.65H12.625C12.6917 7.06667 12.7417 7.46667 12.775 7.85C12.8083 8.23333 12.825 8.61667 12.825 9C12.825 9.38333 12.8083 9.76667 12.775 10.15C12.7417 10.5333 12.6917 10.9333 12.625 11.35ZM12.4 5.65H16.25C15.6667 4.38333 14.8623 3.36667 13.837 2.6C12.8123 1.83333 11.625 1.34167 10.275 1.125C10.7417 1.74167 11.1627 2.446 11.538 3.238C11.9127 4.02933 12.2 4.83333 12.4 5.65ZM6.625 5.65H11.375C11.1083 4.71667 10.7833 3.87067 10.4 3.112C10.0167 2.354 9.55 1.65 9 1C8.45 1.65 7.98333 2.354 7.6 3.112C7.21667 3.87067 6.89167 4.71667 6.625 5.65ZM1.75 5.65H5.6C5.8 4.83333 6.08767 4.02933 6.463 3.238C6.83767 2.446 7.25833 1.74167 7.725 1.125C6.35833 1.34167 5.16667 1.83733 4.15 2.612C3.13333 3.38733 2.33333 4.4 1.75 5.65Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile menu, show/hide based on menu open state. -->
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary text-text-opposite shadow-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <NuxtLink :to="localePath('/')" class="-m-1.5 p-1.5 bg-white rounded-lg">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="@/assets/images/logo.png" alt="" />
          </NuxtLink>
          <button type="button" class="-m-2.5 rounded-md p-2.5" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="py-6">
              <NuxtLink class="block w-full mb-4" :to="localePath('/')">
                {{ $t('main.home') }}
              </NuxtLink>
              <NuxtLink class="block w-full mb-4" :to="localePath('/categories')">
                {{ $t('categories.categories') }}
              </NuxtLink>
              <div class="flex w-full mb-4">
                <button
                  v-for="{ code, name } in locales"
                  :key="code"
                  @click="changeLanguage(code)"
                  class="flex items-center gap-2"
                  :class="{ hidden: code == locale }"
                >
                  <svg
                    class="fill-text-opposite"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18C7.76667 18 6.6 17.7627 5.5 17.288C4.4 16.8127 3.446 16.1707 2.638 15.362C1.82933 14.554 1.18733 13.6 0.712 12.5C0.237333 11.4 0 10.2333 0 9C0 7.75 0.237333 6.579 0.712 5.487C1.18733 4.39567 1.82933 3.44567 2.638 2.637C3.446 1.829 4.4 1.18733 5.5 0.712C6.6 0.237333 7.76667 0 9 0C10.25 0 11.421 0.237333 12.513 0.712C13.6043 1.18733 14.5543 1.829 15.363 2.637C16.171 3.44567 16.8127 4.39567 17.288 5.487C17.7627 6.579 18 7.75 18 9C18 10.2333 17.7627 11.4 17.288 12.5C16.8127 13.6 16.171 14.554 15.363 15.362C14.5543 16.1707 13.6043 16.8127 12.513 17.288C11.421 17.7627 10.25 18 9 18ZM9 17C9.58333 16.25 10.0667 15.5127 10.45 14.788C10.8333 14.0627 11.1417 13.25 11.375 12.35H6.625C6.89167 13.3 7.20833 14.1373 7.575 14.862C7.94167 15.5873 8.41667 16.3 9 17ZM7.725 16.85C7.25833 16.3 6.83333 15.6207 6.45 14.812C6.06667 14.004 5.78333 13.1833 5.6 12.35H1.75C2.33333 13.5833 3.15 14.6 4.2 15.4C5.25 16.2 6.425 16.6833 7.725 16.85ZM10.275 16.85C11.575 16.6833 12.75 16.2 13.8 15.4C14.85 14.6 15.6667 13.5833 16.25 12.35H12.4C12.15 13.2 11.8333 14.029 11.45 14.837C11.0667 15.6457 10.675 16.3167 10.275 16.85ZM1.35 11.35H5.375C5.30833 10.9333 5.25833 10.5333 5.225 10.15C5.19167 9.76667 5.175 9.38333 5.175 9C5.175 8.61667 5.19167 8.23333 5.225 7.85C5.25833 7.46667 5.30833 7.06667 5.375 6.65H1.35C1.23333 7 1.146 7.379 1.088 7.787C1.02933 8.19567 1 8.6 1 9C1 9.4 1.02933 9.804 1.088 10.212C1.146 10.6207 1.23333 11 1.35 11.35ZM6.375 11.35H11.625C11.6917 10.9333 11.7417 10.5373 11.775 10.162C11.8083 9.78733 11.825 9.4 11.825 9C11.825 8.6 11.8083 8.21233 11.775 7.837C11.7417 7.46233 11.6917 7.06667 11.625 6.65H6.375C6.30833 7.06667 6.25833 7.46233 6.225 7.837C6.19167 8.21233 6.175 8.6 6.175 9C6.175 9.4 6.19167 9.78733 6.225 10.162C6.25833 10.5373 6.30833 10.9333 6.375 11.35ZM12.625 11.35H16.65C16.7667 11 16.8543 10.6207 16.913 10.212C16.971 9.804 17 9.4 17 9C17 8.6 16.971 8.19567 16.913 7.787C16.8543 7.379 16.7667 7 16.65 6.65H12.625C12.6917 7.06667 12.7417 7.46667 12.775 7.85C12.8083 8.23333 12.825 8.61667 12.825 9C12.825 9.38333 12.8083 9.76667 12.775 10.15C12.7417 10.5333 12.6917 10.9333 12.625 11.35ZM12.4 5.65H16.25C15.6667 4.38333 14.8623 3.36667 13.837 2.6C12.8123 1.83333 11.625 1.34167 10.275 1.125C10.7417 1.74167 11.1627 2.446 11.538 3.238C11.9127 4.02933 12.2 4.83333 12.4 5.65ZM6.625 5.65H11.375C11.1083 4.71667 10.7833 3.87067 10.4 3.112C10.0167 2.354 9.55 1.65 9 1C8.45 1.65 7.98333 2.354 7.6 3.112C7.21667 3.87067 6.89167 4.71667 6.625 5.65ZM1.75 5.65H5.6C5.8 4.83333 6.08767 4.02933 6.463 3.238C6.83767 2.446 7.25833 1.74167 7.725 1.125C6.35833 1.34167 5.16667 1.83733 4.15 2.612C3.13333 3.38733 2.33333 4.4 1.75 5.65Z"
                    />
                  </svg>
                  {{ name }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const mobileMenuOpen = ref(false)

const changeLanguage = async (code) => {
  await navigateTo(switchLocalePath(code))
  location.reload()
}

const currentLocale = computed(() => locales.value.find((i) => i.code == locale.value))
onMounted(() => {
  document.documentElement.setAttribute('lang', currentLocale.value.code)
  document.documentElement.setAttribute('dir', currentLocale.value.dir)
})
</script>
