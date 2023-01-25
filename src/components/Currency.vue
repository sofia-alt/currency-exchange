<template>
  <div class="currency d-flex pa-2">
    <div class="currency__name">
      {{value.Name}}
    </div>
    <div class="currency__code">
      {{value.CharCode}}
    </div>
    <div class="currency__value">
      {{value.Value}}
    </div>
    <v-btn v-if="rise > 0" color="green">
      {{rise}}
    </v-btn>
    <v-btn v-else color="red">{{rise}}</v-btn>
  </div>
</template>

<script>
import { computed } from 'vue-demi'

export default {
  name: 'CurrencyComponent',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const rise = computed(() => {
      return props.value.Value - props.value.Previous
    })

    return {
      rise
    }
  }
}
</script>

<style lang="scss">
</style>
