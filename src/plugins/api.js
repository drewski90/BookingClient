import Vue from 'vue';
let base_uri = "http://localhost:5000/graphql/6368a40db70a090fe50960a6/"

export function request(query, variables) {
  return new Promise((res, rej) => {
    const http = new XMLHttpRequest();
    http.open("POST", base_uri);
    http.withCredentials = true;
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    const data = {
      query,
      variables
    }
    http.onload = () => {
      res(JSON.parse(http.response))
    }
    http.onerror = rej
    http.send(JSON.stringify(data))
  });
}

const api = {request}
Vue.api = api;
window.api = api;
Object.defineProperties(Vue.prototype, {
  api: {get: () => api},
  $api: {get: () => api}
});
