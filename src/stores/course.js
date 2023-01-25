import Http from '@/api/api'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCourseStore = defineStore('course', () => {
  const course = ref(null)

  const valute = computed(() => {
    return course.value
      ? course.value.Valute
      : null
  })

  async function getCourse () {
    course.value = await Http.get('daily_json.js')
  }

  return { course, valute, getCourse }
})
