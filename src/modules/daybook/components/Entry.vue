<template>
  <div class="flex">
    <div
      class="flex flex-col justify-between p-2 mb-4 leading-normal transition-all bg-white border border-gray-400 rounded-b cursor-pointer hover:bg-slate-100"
      @click="$router.push({ name: 'entry', params: { id: 10 } })"
    >
      <div class="mb-8">
        <div class="mb-2 text-xl font-bold text-gray-900">
          Can coffee make you a better developer?
        </div>
        <p class="text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="flex items-center">
        <div class="text-sm">
          <p class="leading-none text-gray-900">Jonathan Reinink</p>
          <p class="text-gray-600">Aug 18</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
