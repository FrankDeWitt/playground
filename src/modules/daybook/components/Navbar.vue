<template>
  <nav
    class="relative flex flex-wrap items-center justify-between p-2 bg-secondary-700"
    ref="header"
  >
    <a class="text-white" href="">
      <img
        src="@/assets/logo.png"
        alt="Vue logo"
        class="inline-block w-12 mx-2"
      />
      Daybook
    </a>
    <div class="flex">
      <button
        class="px-4 py-2 font-semibold transition-all bg-transparent border rounded text-primary-700 border-primary-700 hover:bg-primary-700 hover:text-white hover:border-transparent"
      >
        <i class="fa-solid fa-right-from-bracket"></i>
      </button>
    </div>
  </nav>
</template>

<script>
import { ref, computed, watch, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const header = ref();
    const headerOffsetHeight = computed(() =>
      header.value && header.value.$el ? header.value?.$el.offsetHeight : 0
    );

    watch(headerOffsetHeight, (current) => {
      const root = document.querySelector < HTMLElement > ":root";
      root?.style.setProperty("--header-height", `${current}px`);
    });
    return {
      header,
    };
  },
});
</script>
