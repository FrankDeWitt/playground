<template>
  <div class="border-r border-gray-500 border-solid">
    <div class="px-2 py-2">
      <input
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Buscar entradas"
      />
    </div>
    <div class="p-3 overflow-y-scroll entry-scroll-area">
      <h2 v-for="(entry, idx) in 100" :key="idx">
        <Entry />
      </h2>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.entry-scroll-area {
  height: calc(100vh - 119px);
}
</style>
