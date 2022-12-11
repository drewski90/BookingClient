<template>
  <div>
    <site-header >
      <Login />
    </site-header>
    <v-toolbar dark class="black" flat>
      <span class="truncate">
        5840 Gibbons Dr Ste C, Carmichael, CA 95608
      </span>
      <v-spacer />
      <v-btn dark text>
        Book Now
      </v-btn>
    </v-toolbar>
    <div>
      <!-- <v-container>
        <v-row no-gutters>
          <v-col class="pa-4" cols="12" sm="6" md="4" v-for="card, index in cards" :key="'ovc' + index">
            <ServiceOverview :item="card"/>
          </v-col>
        </v-row>
      </v-container> -->
    </div>
    <Catalog />
  </div>
</template>

<script>
// import ServiceOverview from "../components/home/service-card.vue"
import Catalog from "../components/catalog/catalog-list.vue"
import Login from "../components/home/login.vue"
import SiteHeader from "../components/home/site-header.vue"
  export default {
    name: 'Home',
    components: {
      SiteHeader,
      Login,
      Catalog,
      // ServiceOverview
    },
    data() {
      return {
        cards: [
          {
            icon: "human-handsup",
            title: "Massage",
            text:"A Goddesses Touch specializes in a variety of modalities. Choose which massage service that suits you best."
          },
          {
            icon: "timer-sand-empty",
            title: "Body Contouring",
            text: "Are you ready to get shaped and sculpted?. A Goddesses Touch provides Body Sculpting/Contouring to help you shrink and lose inches"
          },
          {
            icon: "book-open-blank-variant",
            title: "Training Classes",
            text:"Add more skills to your abundant growing career field by learning these services and technique to your practice."
          }
        ]
      }
    }
  }
</script>

<style scoped>
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>