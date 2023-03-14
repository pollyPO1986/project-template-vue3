<template lang="pug">
.home
  img(src="@assets/logo.png", alt="Vue logo")
  HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
import { defineComponent, computed, reactive } from 'vue';
import { useHead } from '@unhead/vue';
import HelloWorld from '@components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup() {
    const siteData = reactive({
      title: `My website`,
      description: `My beautiful website`
    });

    useHead({
      // can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description)
        }
      ]
    });
  }
});
</script>
