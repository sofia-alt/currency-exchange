<template>
<v-select
      :items="currencies"
      v-model="oldCurrency"
      label="Currency"
    ></v-select>
  <v-text-field v-model="oldCount"></v-text-field>
  <v-btn @click="move" class="mb-4">move</v-btn>
  <v-select
      :items="currencies"
      v-model="newCurrency"
      label="newCurrency"
    ></v-select>
  <v-text-field readonly>{{ convertCount }}</v-text-field>
</template>

<script>
import { useConvertStore } from '../stores/convert'
import { ref, watch, onMounted, computed } from 'vue'
import { storeToRefs } from 'pinia'

export default {
  name: 'ConverterComponent',

  setup () {
    const convertStore = useConvertStore()
    const { converting, getRates } = convertStore
    onMounted(getRates)

    const { convertCount, rates } = storeToRefs(convertStore)

    const oldCurrency = ref()
    const newCurrency = ref()

    const currencies = computed(() => {
      if (rates.value) {
        return Object.keys(rates.value)
      } else return []
    })

    const oldCount = ref()

    watch(oldCurrency, (currentValue, oldValue) => {
      if (oldCurrency.value && newCurrency.value) {
        setTimeout(() => {
          converting(currentValue, oldCurrency.value, newCurrency.value)
        }, 500)
      }
    })

    watch(newCurrency, (currentValue, oldValue) => {
      if (oldCount.value && oldCurrency.value) {
        converting(oldCount.value, oldCurrency.value, currentValue)
      }
    })

    watch(oldCount, (currentValue, oldValue) => {
      oldCount.value = currentValue
      if (oldCurrency.value && newCurrency.value) {
        converting(currentValue, oldCurrency.value, newCurrency.value)
      }
    })

    function move () {
      const temp = oldCurrency.value
      oldCurrency.value = newCurrency.value
      newCurrency.value = temp
    }

    return {
      oldCurrency,
      newCurrency,
      oldCount,
      convertCount,
      currencies,
      move
    }
  }
}
</script>
<style lang="scss">
</style>
