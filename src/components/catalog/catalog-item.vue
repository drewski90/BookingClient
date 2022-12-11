<template>
  <v-card
    class="catalog-item"
    outlined
    flat
    dark
  >
  {{minPrice}}
  {{item}}
    <v-list-item three-line>
      <v-list-item-content>
        <div class="mb-4">
          {{item.item_data.name}}
        </div>
        <v-list-item-title class="catalog-item-name mb-1">
          {{item.item_data.name}}
        </v-list-item-title>
        <v-list-item-subtitle v-html="item.item_data.description_html">

        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="100"
        color="white"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        text

      >
        {{price}}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  props: ['item'],
  computed: {
    variations() {
      return this.item.item_data.variations || []
    },
    minPrice() {
      return Math.min(...this.variations.map(
        i => {
          if (i.item_variation_data.price_money)
            return i.item_variation_data.price_money.amount
      }));
    },
    price() {
      const variation = this.variations.filter(
        i => !!i.item_variation_data.price_money
      ).find(
        i => i.item_variation_data.price_money.amount == this.minPrice)
      const val = variation.item_variation_data
      return "From " + val.price_description? val.price_description: val.price_money.amount / 100 || "View"
    }
  }
}
</script>

<style>
.catalog-item-name {
  font-weight: 300;
  font-size: 1.8rem;
  color: rgb(254, 254, 254);
  text-shadow: 0px 2px 2px rgba(0, 0 , 0, .65),
  0px 0px 1px black;
}
.catalog-item {
  width: 100%;
  backdrop-filter: blur(20px);
  border: 1px solid rgb(75, 0, 167) !important;
  color: rgb(254, 250, 238);
  box-shadow: 0px 0px 40px rgba(3, 121, 218, 0.5);
 background: rgb(66,0,114);
background: radial-gradient(circle, rgba(66,0,114,1) 0%, rgba(44,0,76,1) 100%);  
}

</style>