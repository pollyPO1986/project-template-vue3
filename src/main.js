import { createApp } from 'vue';
import { createHead } from '@unhead/vue';
import App from '@/App.vue';
import router from '@/router';

// stylesheet
import '@assets/scss/style.scss';

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(router);
app.mount('#app');

// createApp(App).use(router)
//   .mount('#app');
