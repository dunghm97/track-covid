<template>
  <div class="grid md:grid-cols-2 gap-4">
    <div class="shadow-md bg-blue-100 p-10 text-center rounded">
      <h3 class="text-3xl text-blue-900 font-bold mb-4">Cases</h3>
      <div class="text-2xl mb-4">
        <span class="font-bold"
          >New: {{ numberWithCommas(stats.NewConfirmed) }}</span
        >
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold"
          >Total: {{ numberWithCommas(stats.TotalConfirmed) }}</span
        >
      </div>
    </div>
    <div class="shadow-md bg-blue-100 p-10 text-center rounded">
      <h3 class="text-3xl text-blue-900 font-bold mb-4">Deaths</h3>
      <div class="text-2xl mb-4">
        <span class="font-bold"
          >New: {{ numberWithCommas(stats.NewDeaths) }}</span
        >
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold"
          >Total: {{ numberWithCommas(stats.TotalDeaths) }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/require-default-prop */
export default {
  name: 'DataBoxes',
  props: {
    stats: Object,
  },
  methods: {
    numberWithCommas(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
}
</script>
