<template>
  <header class="header">
    <div class="header-group">
      <div class="flex items-center justify-between py-10">
        <div class="w-28 lg:w-36">
          <img src="@/assets/images/logo_white.png" class="w-full" alt="logo" />
        </div>

        <div class="flex">
          <button class="btn">Crie uma conta</button>
          <button class="btn btn-white">Entrar</button>
        </div>
      </div>

      <div class="flex">
        <div class="flex flex-col mt-28">
          <h1 class="text-white font-black text-4xl">
            Tenha um feedback. <br />
            E faça seus clientes mais <br class="hidden lg:inline-block" />
            felizes!
          </h1>
          <p class="text-lg font-medium text-white">
            Receba ideias, reclamações e feedbacks com um
            <br class="hidden lg:inline-block" />
            simples widget na página.
          </p>
          <div class="mt-10">
            <button class="btn btn-white">Cria uma conta grátis</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>
<style scoped>
.header {
  @apply bg-brand-main w-full flex justify-center;
  height: 700px;
}

.header-group {
  @apply flex flex-col w-4/5 max-w-6xl;
}

@media (min-width: 640px) {
  .header-group {
    background-image: url('../../assets/images/blue_balloons.png');
    background-repeat: no-repeat;
    background-size: 628px;
    background-position: 100% 90%;
  }
}

.btn {
  @apply text-brand-gray font-bold rounded px-6 py-2 focus:outline-none;
}

.btn-white {
  @apply bg-white rounded-full text-brand-main;
}
</style>
