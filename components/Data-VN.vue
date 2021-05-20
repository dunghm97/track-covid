<template>
  <div class="flex flex-row justify-center">
    <div class="shadow-md bg-blue-100 p-10 flex flex-col items-center">
      <h3 class="text-3xl text-blue-900 font-bold mb-4">Cases</h3>
      <div class="text-2xl mb-4">
        <span class="font-bold text-red-700"
          >Số Ca Nhiễm: {{ numberWithCommas(statsVN.infected) }}</span
        >
      </div>
      <div class="text-2xl mb-4 text-green-700">
        <span class="font-bold"
          >Chữa Khỏi: {{ numberWithCommas(statsVN.recovered) }}</span
        >
      </div>
      <div class="text-2xl mb-4 text-yellow-400">
        <span class="font-bold"
          >Đang Điều Trị: {{ numberWithCommas(statsVN.treated) }}</span
        >
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold"
          >Tử Vong: {{ numberWithCommas(statsVN.deceased) }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/require-default-prop */
export default {
  name: 'DataVn',
  props: {
    statsVN: Object,
  },
  methods: {
    numberWithCommas(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
}
</script>
