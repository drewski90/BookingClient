<template>
  <v-card
      class="mx-auto my-12"
    >
    {{item}}
    <v-row style="height: 150px;" justify="center" align="center">
      <div class="sc-icon-container">
        <v-icon x-large>mdi-{{item.icon}}</v-icon>
      </div>
    </v-row>

    <v-card-title>{{item.title}}</v-card-title>

    <v-card-text class="pa-5">
      <div>{{item.text}}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: [
    'item'
  ],
  data() {
    return {
      loading: false
    }
  }
}
</script>

<style>
.sc-icon-container {
  border: 1px solid black;
  border-radius: 50%;
  padding: 1.5rem;
}
</style>