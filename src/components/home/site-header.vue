<template>
  <div class="main-header fill-y">
    <AnimationHeader>
      <v-row class="fill-y" no-gutters>
        <v-col cols="12" class="fill-y" md="8" sm="12">
          <v-row
            no-gutters
            class="main-header-content"
            justify="center"
            align="center"
          >
            <div class="px-5">
              <img src="img/avatar.png" width="100px">
            </div>
            <div>
              <h1 class="mb-2">
                Welcome To
              </h1>
              <div class="header-text">
                A
              </div>
              <div class="header-text">
                Goddesses
              </div>
              <div class="header-text">
                Touch
              </div>
              <h1 class="text-center">
                Medical Spa
              </h1>
            </div>
          </v-row>
        </v-col>
        <v-col class="hidden-sm-and-down" cols="12" md="4" style="height:100%;">
          <slot></slot>
        </v-col>
      </v-row>
    </AnimationHeader>
  </div>
</template>

<script>
import AnimationHeader from "./animated-header.vue"
// const dusk = ['#f2825a', '#c2625a', '#92425a', '#62225a', '#32025a']
export default {
  components:{
    AnimationHeader
  }
}
</script>

<style>
canvas {
  position: fixed;
  top: 0px;
  left:0px; 
}
.main-header-overlay {
  height: 100%;
  width:100%;
  background: rgb(99,6,127);
  background: linear-gradient(
    230deg, rgb(51, 1, 66, .5) 0%, 
    rgba(136, 6, 180, .8) 50%,
    rgb(53, 4, 69,.5) 100%
  ); 
}
.main-header {
  background-size: cover;
  background-position: center center;
  height: 75vh;
  min-height: 320px;
}
.main-header-content {
  padding:15px;
  height: 100%;
  font-weight:700;
  font-family: 'Gayathri', sans-serif;
  color: rgb(243, 241, 216);
  text-shadow: 
  0px 3px 35px rgb(139, 62, 162),
  0px 3px 4px rgba(0,0,0,.2),
  0px 0px 150px rgba(0,0,0,1);
  text-transform: capitalize;
  backdrop-filter: blur(0px);
  font-size: .5rem !important;
  line-height: 1.5rem;
}
@media (max-width: 600px) {
  .header-text {
    font-size: 2.5rem;
    font-weight:100;
    line-height: 2.3rem;
  }
}

@media (min-width: 600px) {
  .header-text {
    font-size: 4rem;
    font-weight:100;
    line-height: 4rem;
  }
}


</style>