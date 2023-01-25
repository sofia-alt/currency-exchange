<template>
  <div>
    <nav class="navigation">
      <router-link class="navigation__link" to="course">Course</router-link>
      <router-link class="navigation__link" to="converter">Converter</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'AppLayout'
}
</script>
