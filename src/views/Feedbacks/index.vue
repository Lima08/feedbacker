<template>
  <div class="">
    <h1>This is an feedback page</h1>
  </div>
</template>
<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    onMounted(() => {
      const token = window.localStorage.getItem('token');
      if (!token) {
        router.push('/');
      }
    });
  },
};
</script>
