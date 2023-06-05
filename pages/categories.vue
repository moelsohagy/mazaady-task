<template>
  <div class="container max-w-[720px] pt-4">
    <div class="input-group">
      <label for="mainCategory">{{ $t('categories.mainCategory') }}</label>
      <span>*</span>
      <select name="mainCategory" id="mainCategory" v-model="mainCategory">
        <option value="">{{ $t('main.selectItem') }}</option>
        <option v-for="item in categoriesOptions" :key="item.value" :value="item.value">
          {{ item.text }}
        </option>
      </select>
    </div>

    <div class="input-group">
      <label for="subCategory">{{ $t('categories.subCategory') }}</label>
      <span>*</span>
      <select name="subCategory" id="subCategory" v-model="subCategory">
        <option value="">{{ $t('main.selectItem') }}</option>
        <option v-for="item in subCategoriesOptions" :key="item.value" :value="item.value">
          {{ item.text }}
        </option>
      </select>
    </div>

    <!-- <div class="input-group">
      <label for="processType">{{ $t('main.processType') }}</label>
      <select name="processType" id="processType" v-model="processType">
        <option value="other">{{ $t('main.other') }}</option>
      </select>
    </div>
    <div class="input-group">
      <input type="text" name="processTypeVlue" v-model="processTypeVlue" />
    </div> -->
  </div>
</template>

<script setup>
import categoriesService from '../services/categories'

let categories = ref([])
let categoriesOptions = ref([])
let subCategoriesOptions = ref([])

let mainCategory = ref('')
let subCategory = ref('')
let processType = ref('')
let processTypeVlue = ref('')

onMounted(() => {
  categoriesService.getAllCategories().then((response) => {
    categories.value = response?.data?.data?.categories || []
    categoriesOptions.value = categories.value.map((i) => {
      return { value: i.id, text: i.name }
    })
  })
})

watch(
  () => mainCategory.value,
  (value) => {
    subCategoriesOptions.value =
      categories.value
        .find((i) => i.id == value)
        ?.children.map((i) => {
          return { value: i.id, text: i.name }
        }) || []
    // console.log(categories.value.find((i) => i.id == value))
  },
)
</script>

<style lang="scss">
.input-group {
  span {
    @apply text-red-600;
  }
  select,
  input {
    @apply block w-full border border-black my-2;
  }
}
</style>
