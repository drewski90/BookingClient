<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div class="animated-header">
    <canvas ref="canvas" class="canvas">
    </canvas>
    <v-container 
      class="fill-y" 
      style="max-width:900px" 
    >
      <slot></slot>
    </v-container>
  </div>
</template>

<script>
import Animation from "./animated-bg.js" 
export default {
  mounted() {
    this.animation = new Animation(this.$refs.canvas)
  },
  beforeDestroy() {
    this.animation.destroy()
  },
  data() {
    return {
      animation: null
    }
  },
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>

.canvas {
  position:absolute;
  width:100%; 
  height:100%;
}
.animated-header {
  overflow:hidden;
  height:70vh; 
  width:100%; 
  min-height:400px; 
  position:relative;
  user-select: none;
}
</style>