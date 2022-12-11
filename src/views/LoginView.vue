<template>
  <div class="full-screen-login">
    <canvas ref="fscanvas" style="position:fixed;top:0px;left:0px;width:100%;height:100%;">
    </canvas>
    <Login>
      <div class="full-screen-login-title">
        A Goddesses Touch
      </div>
    </Login>
  </div>
</template>

<script>
import Animation from "../components/home/animated-bg.js"
import Login from "../components/home/login.vue"
export default {
  components: {
    Login
  },
  data() {
    return {
      animation: null
    }
  },
  mounted() {
    this.animation = new Animation(this.$refs.fscanvas)
  },
  beforeDestroy() {
    this.animation.destroy()
  }
}
</script>

<style>
.full-screen-login-title {
  font-weight:400;
  font-family: 'Gayathri', sans-serif;
  color: rgb(231, 231, 231);
  text-shadow: 
  0px 3px 4px rgba(0,0,0,.6),  
  0px 0px 150px rgba(0,0,0,1);
  text-transform: capitalize;
  font-size: 1.5rem !important;
  line-height: 4rem;
  text-align:center;
}
.full-screen-login {
  padding: 25px;
  top: 0px;
  left:0px;
  width: 100%;
  height: 100%;
}
</style>