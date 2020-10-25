import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import $ from 'jquery';
window.$ = $;

require('bootstrap');




//window.$ = window.jquery = require("jquery");

const app = createApp(App);
app.use(router);
app.mount('#app');
