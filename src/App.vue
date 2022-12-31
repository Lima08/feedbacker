<template>
  <router-view />
  <modal-factory />
</template>

<script>
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ModalFactory from './components/ModalFactory/index.vue';
import services from './services';

export default {
  components: {
    ModalFactory,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    watch(
      () => route.path,
      async () => {
        if (route.meta.hasAuth) {
          const token = window.localStorage.getItem('token');
          if (!token) {
            router.push('/');
            return;
          }

          const { data } = await services.users.getMe();
          console.log('🚀 ~ file: App.vue:30 ~ data', data);
        }
      }
    );
  },
};
</script>
