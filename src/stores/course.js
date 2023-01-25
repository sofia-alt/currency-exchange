import Http from '@/api/api'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// import fx from 'money'

export const useCourseStore = defineStore('course', () => {
  const course = ref(null)

  const currencies = computed(() => {
    if (course.value) {
      return Object.keys(course.value.Valute)
    }
    return null
  })

  const currenciesList = computed(() => {
    return course.value
      ? course.value.Valute
      : null
  })

  async function getCourse () {
    course.value = await Http.get('daily_json.js')
  }

  function convertingAll (from, to) {
    console.log('converting!')
    // response for convert array
  }

  return { course, currencies, currenciesList, getCourse, convertingAll }
})
