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
  </div>
</template>

<script>

export default {
  name: 'CurrencyComponent',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  setup () {

  }
}
</script>

<style lang="scss">
</style>
