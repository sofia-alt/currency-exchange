import Http from '@/api/api'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import fx from 'money'

export const useConvertStore = defineStore('convert', () => {
  const convertCount = ref(null)

  const value = ref(null)

  async function getRates () {
    value.value = await Http.get('latest.js')
  }

  const rates = computed(() => {
    return value.value
      ? value.value.rates
      : null
  })

  fx.settings = {
    from: 'GBP',
    to: 'AED',
    base: 'USD',
    rates: rates
  }

  function converting (cur, from, to) {
    convertCount.value = fx.convert(+cur, { from: from, to: to })
  }

  return { converting, convertCount, rates, getRates, value }
})
