<template>
  <div class="flex items-center justify-center h-full">
    <h1 class="">Empty</h1>
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
