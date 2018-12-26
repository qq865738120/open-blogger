<template>
  <div>
    <nuxt-link
      :to="{ name: 'article-id', params: { id: 123 }}"
      class="content">
      <img
        v-lazy="'https://static001.infoq.cn/resource/image/ea/74/ea1ed1fe11dc85f2ffb37dda5c2b4574.jpg?x-oss-process=image/crop,y_145,w_999,h_514/resize,w_776,h_400'"
        class="img"
      >
      <div class="content-right margin-left-30">
        <span>123</span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import 'assets/style/common';

.content {
  width: 100%;
  display: flex;
}
.content-right > span:nth-child(1) {
  color: $--color-14;
  font-size: $--large;
}
.img {
  width: 388px;
  height: 200px;
  display: block;
  border-radius: 3px;
}
</style>
