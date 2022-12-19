<template>
  <custom-header @create-account="handleAccountCreate" @login="handleLogin" />
  <contact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-certer text-gray-800">feedbacker 2022</p>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Contact from './Contact.vue';
import CustomHeader from './CustomHeader.vue';

export default {
  components: {
    CustomHeader,
    Contact,
  },
  setup() {
    const router = useRouter();

    onMounted(() => {
      const token = window.localStorage.getItem('token');
      if (token) {
        router.push('FeedBacks');
      }
    });

    function handleLogin() {}

    function handleAccountCreate() {}

    return {
      handleLogin,
      handleAccountCreate,
    };
  },
};
</script>
