import { Http } from '@/api/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConvertStore = defineStore('сonvert', () => {
  const convert = ref(null)

  async function getConvert () {
    convert.value = await Http.get('latest.js')
  }

  return { convert, getConvert }
})
