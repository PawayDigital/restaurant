<template>
  <div id="error404" style="height: 100vh;" class=" bg-dark404">
    <div class="position-relative body404 _margin">
      <nav class="bg-white404 position-absolute"></nav>

      <div class="position-absolute bg-404 container text-center">
        <h1 class="mt-4 mb-0 margin-top-404 color h1-404">404</h1>
        <p class="color mb-0 mt-4 p-404">Pagina no encontrada</p>
        <p class="color p2-404">No pudimos encontrar esta pagina</p>

        <router-link to="/" class="btn-404 pt-2 pb-2 pr-4 pl-4"
          >Volver</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404",
};
</script>
