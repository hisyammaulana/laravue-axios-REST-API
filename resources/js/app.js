
import Vue from 'vue'
import axios from 'axios'
import App from './components/AddComponent'

window.Vue = require('vue');

// https://plugin-apps-server.herokuapp.com/api/register
const base = axios.create({
    baseURL: ' https://plugin-apps-server.herokuapp.com/api/',
})

Vue.prototype.$http = base

// axios.defaults.headers.common = {
//     'X-CSRF-TOKEN': Laravel.csrfToken,
//     'X-Requested-With': 'XMLHttpRequest',
//     'Authorization': 'Bearer ' + Laravel.apiToken,
// };

new Vue({
    el: '#app',
    render: h => h(App)
});
