<template>
  <Navbar />
  <div class="flex">
    <div class="w-1/3">
      <EntryList />
    </div>
    <div class="w-2/3">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    EntryList: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
  },
  setup() {
    return {};
  },
};
</script>
