<template>
  <div>
    <nuxt-link :to="{ name: 'article-id', params: { id: 123 }}">
      <img
        v-lazy="'https://static001.infoq.cn/resource/image/ea/74/ea1ed1fe11dc85f2ffb37dda5c2b4574.jpg?x-oss-process=image/crop,y_145,w_999,h_514/resize,w_776,h_400'"
        class="img"
      >
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style>
.img {
  width: 388px;
  height: 200px;
  display: block;
  border-radius: 3px;
}
</style>
