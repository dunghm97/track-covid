<template>
  <div class="container mx-auto p-12">
    <main v-if="!loading">
      <DataTitle :text="title" :data-date="dataDate" />
      <DataVn :stats-v-n="statsVN" />
    </main>
    <main v-else class="flex flex-col align-center justify-center">
      <div class="text-gray-500 text-3xl mt-10 mb-6">Fetching Data</div>
      <img :src="loadingImage" alt="Not Support" class="w-24 m-auto" />
    </main>
  </div>
</template>

<script>
import DataTitle from '@/components/DataTitle.vue'
import DataVn from '@/components/Data-VN.vue'
export default {
  components: { DataTitle, DataVn },
  data() {
    return {
      loading: true,
      title: 'Viet Nam',
      dataDate: '',
      statsVN: {},
      loadingImage: require('../assets/hourglass.gif'),
    }
  },
  async created() {
    const data = await this.testNewApi()
    this.dataDate = data[0].lastUpdatedAtApify
    this.statsVN = data[0]
    this.loading = false
  },
  methods: {
    async testNewApi() {
      const ApifyClient = require('apify-client')

      // Initialize the ApifyClient with API token
      const client = new ApifyClient({
        token: 'u9RYa7qceEepGkWJEDhvnXdHz',
      })

      // Prepare actor input
      const input = {}
      // Run the actor and wait for it to finish
      const run = await client.actor('dtrungtin/covid-vi').call(input)
      const { items } = await client.dataset(run.defaultDatasetId).listItems()
      return items
    },
  },
}
</script>
