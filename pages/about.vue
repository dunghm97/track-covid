<template>
  <div class="container mx-auto p-12">
    <main v-if="!loading">
      <DataTitle :text="title" :data-date="dataDate" />
      <DataVn :stats-v-n="statsVN" />
      <News :news="news" />
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
import News from '@/components/News.vue'
const tokenNews = 'zFM7x41Ej7Ui9B64xjefVqOv2YGnT8CZk5qz5aAP5bBQYssL7BZFNCuewcEB'
export default {
  components: { DataTitle, DataVn, News },
  data() {
    return {
      loading: true,
      title: 'Viet Nam',
      dataDate: '',
      statsVN: {},
      news: {},
      loadingImage: require('../assets/hourglass.gif'),
    }
  },
  async created() {
    const data = await this.fetchnewData()
    const dataNews = await this.getNewsData()
    let index = -1
    data.forEach((ele, i) => {
      if (ele.country === 'Vietnam') {
        index = i
      }
    })
    const today = new Date().toUTCString()
    this.dataDate = today
    this.statsVN = data[index]
    this.loading = false
    this.news = dataNews.articles
  },
  methods: {
    async fetchnewData() {
      const res = await fetch('https://disease.sh/v3/covid-19/countries')
      const data = await res.json()
      return data
    },
    async getNewsData() {
      const news = await fetch(
        `https://gnewsapi.net/api/search?q=covid-19&language=vi&country=vn&api_token=${tokenNews}`
      )
      const dataNews = await news.json()
      return dataNews
    },
  },
}
</script>
