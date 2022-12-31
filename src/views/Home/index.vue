<template>
  <custom-header @create-account="handleAccountCreate" @login="handleLogin" />
  <contact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feed-backer 2022 ®</p>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ModalCreateAccount from '../../components/ModalCreateAccount/index.vue';
import ModalLogin from '../../components/ModalLogin/index.vue';
import useModal from '../../hooks/useModal';
import Contact from './Contact.vue';
import CustomHeader from './CustomHeader.vue';

export default {
  components: {
    CustomHeader,
    Contact,
  },
  setup() {
    const router = useRouter();
    const modal = useModal();

    onMounted(() => {
      const token = window.localStorage.getItem('token');
      if (token) {
        router.push('FeedBacks');
      }
    });

    function handleLogin() {
      modal.open({
        component: ModalLogin,
      });
    }

    function handleAccountCreate() {
      modal.open({
        component: ModalCreateAccount,
      });
    }

    return {
      handleLogin,
      handleAccountCreate,
    };
  },
};
</script>
