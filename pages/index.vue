<template>
  <div class="container mx-auto p-12">
    <main v-if="!loading">
      <DataTitle :text="title" :data-date="dataDate" />
      <DataBoxes :stats="stats" />
      <CountrySelect :countries="countries" @get-country="getCountryData" />
      <button
        v-if="stats.Country"
        class="
          bg-green-700
          text-white
          rounded
          p-3
          mt-10
          focus:outline-none
          hover:bg-green-600
        "
        @click="clearCountryData"
      >
        Clear Country
      </button>
    </main>
    <main v-else class="flex flex-col align-center justify-center">
      <div class="text-gray-500 text-3xl mt-10 mb-6">Fetching Data</div>
      <img :src="loadingImage" alt="Not Support" class="w-24 m-auto" />
    </main>
  </div>
</template>

<script>
import DataTitle from '@/components/DataTitle.vue'
import DataBoxes from '@/components/Data-boxes.vue'
import CountrySelect from '@/components/CountrySelect.vue'
export default {
  components: { DataTitle, DataBoxes, CountrySelect },
  data() {
    return {
      loading: true,
      title: 'Global',
      dataDate: '',
      stats: {},
      countries: [],
      loadingImage: require('../assets/hourglass.gif'),
    }
  },
  async created() {
    const data = await this.fetchCovidData()
    this.dataDate = data.Date
    this.stats = data.Global
    this.countries = data.Countries
    this.loading = false
    const newData = await this.fetchnewData()
    console.log(newData)
  },
  methods: {
    async fetchCovidData() {
      const res = await fetch('https://api.covid19api.com/summary')
      const data = await res.json()
      return data
    },
    getCountryData(country) {
      this.stats = country
      this.title = country.Country
      this.dataDate = country.Date
    },
    async clearCountryData() {
      this.loading = true
      const data = await this.fetchCovidData()
      this.title = 'Global'
      this.stats = data.Global
      this.dataDate = data.Date
      this.loading = false
    },
    async fetchnewData() {
      const newRes = await fetch('https://disease.sh/v3/covid-19/all')
      const newData = await newRes.json()
      return newData
    },
  },
}
</script>

<style lang="scss"></style>
