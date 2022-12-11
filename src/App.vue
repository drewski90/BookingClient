<template>
  <v-app>
    <v-app-bar
      app
      fixed
      color="main-toolbar"
    >
      <v-row no-gutters align="center" class="d-flex align-center pointer" style="height:100%" @click="$router.push({path:'/'})">
        <img src="/img/GODESSES-Touch-logo-fp-home22.png" height="100%">
      </v-row>

      <v-spacer></v-spacer>
      <v-btn elevation="0" dark color="purple darken-3" icon @click="$router.push({path:'/login'})">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('getAppData').then(() => {
      console.log('finished')
    })
  },
  data: () => ({
    //
  }),
  computed:{ 
    isLoggedIn() {
      return !!this.$store.state.user
    }
  }
};
</script>

<style>
.toolbar-account {
  border-radius:5px;
  padding:5px;
  display:flex;
  justify-content: center;
  align-content: center;
  user-select: none;
  cursor:pointer;
  text-transform: uppercase;
  font-weight: 800;
}
.toolbar-account:hover {
  background: rgb(73, 2, 94);
  color: white;
  transition-duration: 20ms;
  transition-delay: 20ms;
}

.toolbar-account-icon > i {
  border-radius: 50%;
  background: rgb(73, 2, 94);
  color:white !important;
}
.toolbar-logo-text {
  font-weight:700;
  font-family: 'Gayathri', sans-serif;
  font-size:26px !important;
}
.main-toolbar {
  background: rgb(21, 21, 21) !important;
}
.pointer {
  cursor:pointer;
}
.fill-y {
  height: 100% !important;
}
.fill {
  height: 100% !important;
  width: 100% !important;
}
.fill-x {
  width:100% !important;
}
</style>