<template>
  <div class="flex flex-row justify-center flex-wrap m-6">
    <div
      v-for="item in news"
      :key="item.id"
      class="flex flex-col justify-center items-center m-4"
    >
      <div class="image-news">
        <a :href="item.article_url" target="_blank"
          ><img :src="item.image_url" alt="image-news"
        /></a>
      </div>
      <div class="description mt-2">
        <h2>
          <a font-bold :href="item.article_url" target="_blank">{{
            item.title
          }}</a>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  props: {
    news: Array,
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
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}
</style>
