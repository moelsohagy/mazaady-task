<template>
  <MainHeader />

  <div>
    <slot />
  </div>
</template>

<script setup>
import MainHeader from './components/MainHeader.vue'
const { t } = useI18n()

useHead({
  titleTemplate: (title) => {
    return title ? `${title} - ${t('main.projectName')}` : t('main.projectName');
  }
})
</script>