<template>
  <div class="flex justify-between gap-9 items-center">
    <h1 class="font-black text-4xl text-gray-800">Crie uma conta</h1>
    <button
      class="text-gray-600 text-4xl focus:outline-none hover:opacity-10"
      @click="close"
    >
      &times;
    </button>
  </div>

  <div class="mt-16">
    <form @submit.prevent="handleSubmit">
      <label for="name" class="block">
        <span class="text-lg fon text-gray-800">Nome</span>
        <input
          id="name"
          type="name"
          v-model="state.name.value"
          class="form-control"
          :class="{
            'border-brand-danger': !!state.name.errorMessage,
          }"
          placeholder="digite seu nome..."
        />
        <span
          class="block font-medium text-brand-danger"
          v-if="!!state.name.errorMessage"
          >{{ state.name.errorMessage }}</span
        >
      </label>

      <label for="email" class="block">
        <span class="text-lg fon text-gray-800">E-mail</span>
        <input
          id="email"
          type="email"
          v-model="state.email.value"
          class="form-control"
          :class="{
            'border-brand-danger': !!state.email.errorMessage,
          }"
          placeholder="user.example.com"
        />
        <span
          class="block font-medium text-brand-danger"
          v-if="!!state.email.errorMessage"
          >{{ state.email.errorMessage }}</span
        >
      </label>

      <label for="password" class="block">
        <span class="text-lg fon text-gray-800">Senha</span>
        <input
          id="password"
          type="password"
          v-model="state.password.value"
          class="form-control"
          :class="{
            'border-brand-danger': !!state.password.errorMessage,
          }"
          placeholder="*****"
        />
        <span
          class="block font-medium text-brand-danger"
          v-if="!!state.password.errorMessage"
          >{{ state.password.errorMessage }}</span
        >
      </label>
      <button
        :disabled="state.isLoading"
        type="submit"
        :class="{
          'opacity-50': state.isLoading,
        }"
        class="px-8 py-3 mt-10 bg-brand-main text-white font-bold text-2xl rounded-full font-bold focus:outline-none transition-all"
      >
        <Icon v-if="state.isLoading" name="Loading" class="animate-spin" />
        <span v-else>Criar conta</span>
      </button>
    </form>
  </div>
</template>

<style scoped>
.form-control {
  @apply block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded focus:outline-none;
}
</style>

<script>
import Icon from '@/components/Icon/index.vue';
import useModal from '@/hooks/useModal';
import services from '@/services/index';
import {
  validateEmptyAndEmail,
  validateEmptyAndLength3,
} from '@/utils/validators';
import { useField } from 'vee-validate';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

export default {
  name: 'ModalCreateAccount',
  components: {
    Icon,
  },
  setup() {
    const modal = useModal();
    const router = useRouter();
    const toaster = useToast();

    const { value: nameValue, errorMessage: nameErrorMessage } = useField(
      'name',
      validateEmptyAndLength3
    );

    const { value: emailValue, errorMessage: emailErrorMessage } = useField(
      'email',
      validateEmptyAndEmail
    );
    const { value: passwordValue, errorMessage: passwordErrorMessage } =
      useField('password', validateEmptyAndLength3);

    const state = reactive({
      hasErrors: false,
      isLoading: false,
      name: {
        value: nameValue,
        errorMessage: nameErrorMessage,
      },
      email: {
        value: emailValue,
        errorMessage: emailErrorMessage,
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage,
      },
    });

    async function handleSubmit() {
      try {
        toaster.clear();
        state.isLoading = true;
        const { errors } = await services.auth.register({
          name: state.name.value,
          email: state.email.value,
          password: state.password.value,
        });

        if (!errors) {
          const { data } = await services.auth.login({
            email: state.email.value,
            password: state.password.value,
          });
          console.log('🚀 ~ file: index.vue:159 ~ handleSubmit ~ data', data)

          window.localStorage.setItem('token', data.token);
          router.push({ name: 'Feedbacks' });
          modal.close();
          return;
        }

        state.isLoading = false;
      } catch (error) {
        state.isLoading = false;
        state.hasErrors = !!error;
        toaster.error('Ocorreu um erro ao criar sua conta');
      }
    }

    return {
      handleSubmit,
      state,
      close: modal.close,
    };
  },
};
</script>
