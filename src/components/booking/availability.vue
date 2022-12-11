<template>
  <div>
    <v-date-picker
      v-model="dates"
      range
    ></v-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dates: []
    }
  }
}
</script>

<style>

</style>