<template>
  <router-view />
  <modal-factory />
</template>

<script>
import ModalFactory from './components/ModalFactory/index.vue';

export default {
  components: {
    ModalFactory,
  },
};
</script>
