<template>
  <div class="space-y-5">
    <div class="flex justify-between p-2 border-b">
      <div>
        <span>15</span>
        <span>Septiembre</span>
        <span>2022</span>
      </div>
      <div class="space-x-2">
        <button
          class="px-4 py-2 font-semibold text-white transition-all border rounded bg-danger border-danger hover:bg-danger-800 hover:text-white hover:border-transparent"
        >
          Borrar
          <i class="fa-solid fa-trash"></i>
        </button>
        <button
          class="px-4 py-2 font-semibold text-white transition-all border rounded bg-secondary-700 border-secondary-700 hover:bg-primary hover:text-white hover:border-transparent"
        >
          Subir foto
          <i class="fa-solid fa-arrow-up-from-square"></i>
        </button>
      </div>
    </div>
    <div class="w-full px-5">
      <textarea
        class="w-full h-32 p-2 overflow-hidden text-black transition duration-300 ease-in-out border resize-none rounded-xl focus:border-secondary-700 ring-1 ring-transparent focus:ring-secondary-700 focus:outline-none"
        placeholder="¿Qué sucedio hoy?"
      ></textarea>
    </div>
  </div>
  <Fab />
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
};
</script>
