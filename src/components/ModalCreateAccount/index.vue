<template>
  <h1>Modal de criação de conta</h1>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state), // TODO:?
    };
  },
};
</script>

<style lang="scss" scoped></style>
