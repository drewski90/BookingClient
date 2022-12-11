import Vue from 'vue'
import Vuex from 'vuex'
import {request} from "../plugins/api.js"

Vue.use(Vuex)

const initialQuery = `
{
  me {
    id
  }
  locations {
    id
    name
    address {
      line1
      line2
      city
      state
      country
      postalCode
    }
    timezone
    capabilities
    status
    created
    merchantId
    country
    languageCode
    currency
    phoneNumber
    businessName
    type
    website
    businessEmail
    description
    twitterUsername
    instagramUsername
    facebookUrl
    logoUrl
    posBackgroundUrl
    mcc
    fullFormatLogoUrl
    taxIds
  }
  team
  catalog(processor:square) 
}
`

export default new Vuex.Store({
  state: {
    user: null,
    location: null,
    locations: [],
    catalog: [],
    categories: [],
    images: []
  },
  mutations: {
  },
  actions: {
    getAppData({state}) {
      return request(initialQuery).then((resp) => {
        console.log(resp)
        state.teamMembers = resp.data.team
        const catalog = resp.data.catalog;
        state.catalog = catalog.filter(i => i.type=="ITEM")
        console.log(catalog.filter(i => i.type=="ITEM"))
        state.categories = catalog.filter(i => i.type=="CATEGORY")
        state.images = catalog.filter(i=> i.type == "IMAGE")
      })
    }
  },
  modules: {
  }
})
