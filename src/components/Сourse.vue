<template>
  <div v-if="course">
    <v-select
      :items="currencies"
      v-model="active"
      label="Currency"
    ></v-select>
    <div v-for="currency in currenciesList" :key="currency.ID">
      <CurrencyComponent :value="currency"/>
    </div>
  </div>
  <div v-else>
    Данные отсутствуют
  </div>
</template>

<script>
import { useCourseStore } from '../stores/course'
import { onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import CurrencyComponent from './Currency.vue'

export default {
  name: 'CourseComponent',
  components: {
    CurrencyComponent
  },

  setup () {
    const store = useCourseStore()
    const { getCourse, convertingAll } = store
    onMounted(getCourse)

    const active = ref('RUB')

    watch(active, (currentValue, oldValue) => {
      convertingAll(oldValue, currentValue)
    })

    const { course, currencies, currenciesList } = storeToRefs(store)

    return {
      getCourse,
      active,
      course,
      currencies,
      currenciesList
    }
  }
}
</script>

<style lang="scss">
</style>
