<template>
  <div class="flex flex-col justify-center flex-wrap m-6">
    <div class="flex flex-row justify-center flex-wrap m-6">
      <div
        v-for="item in showNews"
        :key="item.id"
        class="flex flex-col justify-center items-center m-4"
      >
        <div class="image-news">
          <a :href="news[item - 1].article_url" target="_blank"
            ><img :src="news[item - 1].image_url" alt="image-news"
          /></a>
        </div>
        <div class="description mt-2">
          <h2>
            <a font-bold :href="news[item - 1].article_url" target="_blank">{{
              news[item - 1].title
            }}</a>
          </h2>
        </div>
      </div>
    </div>
    <button id="show-more" class="btn m-auto" @click="showMore()">
      Show More News
    </button>
    <button id="show-less" class="btn m-auto" @click="Collapse()">
      Collapse News
    </button>
  </div>
</template>

<script>
// eslint-disable-next-line vue/no-use-v-if-with-v-for
export default {
  name: 'News',
  props: {
    news: Array,
  },
  data() {
    return {
      showNews: 4,
    }
  },
  methods: {
    showMore() {
      if (
        this.showNews < this.news.length &&
        this.news.length - this.showNews > 4
      ) {
        this.showNews += 4
      } else {
        this.showNews = this.news.length
      }
      if (this.showNews === this.news.length) {
        document.querySelector('#show-more').style.display = 'none'
        document.querySelector('#show-less').style.display = 'block'
      }
    },
    Collapse() {
      this.showNews = 4
      document.querySelector('#show-more').style.display = 'block'
      document.querySelector('#show-less').style.display = 'none'
    },
  },
}
</script>

<style lang="scss">
.image-news {
  width: 300px;
  height: 150px;
  position: relative;
  img {
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.description {
  max-width: 300px;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
}
.btn {
  width: fit-content;
  padding: 10px;
  background: mediumseagreen;
  border-radius: 10px;
  transition: all 0.4s;
  &:hover {
    background: #4040ff !important;
    color: whitesmoke;
    transition: all 0.4s;
    outline-color: transparent;
  }
  &:focus {
    outline: none;
  }
}
#show-less {
  display: none;
  background: #ffb937;
}
.active {
  opacity: 1;
  transition: all 0.4s;
}
</style>
