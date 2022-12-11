<template>
  <div class="catalog white--text">
    <div class="section-title">AGT Services</div>
    <v-container style="max-width:1050px;">
      <v-row no-gutters>
        <template v-for="item, index, in catalog">
          <v-col 
            cols="12" 
            md="6" 
            class="pa-1"
            v-if="item.type=='ITEM'"
            :key="'item' + index">
            <v-row 
              no-gutters 
              style="fill-y" 
              justify="center"
              align="center">
              <CatalogItem :item="item" />
              </v-row>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CatalogItem from "./catalog-item.vue"
export default {
  components: {
    CatalogItem
  },
  computed: {
    catalog() {
      return this.$store.state.catalog
    }
  }
}
</script>

<style>
.section-title {
  line-height:3rem;
  padding: .4rem;
  font-weight:600;
  font-family: 'Gayathri', sans-serif;
  color: rgb(230, 230, 230);
  text-shadow: 
  0px 3px 2px rgba(0,0,0,.3),
  0px 3px 4px rgba(0,0,0,.6),
  3px 7px 5px rgba(0,0,0,.5),  
  0px 0px 150px rgba(0,0,0,1);
  text-transform: capitalize;
  font-size: 1.7rem !important;
  text-align:center;
  background: rgb(59,59,59);
  background: radial-gradient(circle, rgb(35, 35, 35) 0%, rgb(0, 0, 0) 100%); 
}
.catalog {
  background-image: linear-gradient(to right top, #020202, #160f25, #25143f, #1d092b, #23012b);
}
</style>