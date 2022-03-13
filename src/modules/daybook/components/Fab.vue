<template>
  <button
    class="fixed flex items-center justify-center w-10 h-10 p-4 font-bold text-white transition-all rounded-full bg-secondary-700 hover:bg-primary bottom-3 right-3"
  >
    <i :class="['fa-solid', customIcon]"></i>
  </button>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const customIcon = computed(() => {
      if (route.params?.id) {
        return "fa-floppy-disk";
      }
      return "fa-plus";
    });
    return {
      customIcon,
    };
  },
};
</script>
