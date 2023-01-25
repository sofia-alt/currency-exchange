<template>
  <div v-if="course">
    <div v-for="currency in valute" :key="currency.ID">
      <CurrencyComponent :value="currency"/>
    </div>
  </div>
  <div v-else>
    Данные отсутствуют
  </div>
</template>

<script>
import { useCourseStore } from '../stores/course'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import CurrencyComponent from './Currency.vue'

export default {
  name: 'CourseComponent',
  components: {
    CurrencyComponent
  },

  setup () {
    const store = useCourseStore()
    const { getCourse } = store
    onMounted(getCourse)

    const { course, valute } = storeToRefs(store)

    return {
      getCourse,
      course,
      valute
    }
  }
}
</script>

<style lang="scss">
</style>
