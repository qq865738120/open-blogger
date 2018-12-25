<template>
  <!-- <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        open-blogger
      </h1>
      <h2 class="subtitle">
        My dandy Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">{{ $t('language') }}</a>
      </div>
    </div>
  </section> -->
  <div
    class="flex-inline-between"
    style="width: 1080px">
    <div style="width: 712px">
      <el-card class="max-box-card">
        <div
          slot="header"
          class="clearfix">
          <span class="iconfont open-zhishi font-extra-large">{{ $t('homePage.choice') }}</span>
        </div>
        <main-display />
      </el-card>
      <el-card class="max-box-card margin-top-20">
        <div
          slot="header"
          class="clearfix">
          <span class="iconfont open-yuedu font-extra-large">{{ $t('homePage.recommend') }}</span>
        </div>
      </el-card>
    </div>
    <div style="width: 344px;">
      <el-card class="max-box-card">
        <div
          slot="header"
          class="clearfix">
          <span class="iconfont open-neifenmike font-extra-large">{{ $t('homePage.hotspot') }}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import MainDisplay from '~/components/MainDisplay.vue'

export default {
  components: {
    MainDisplay
  }
}
</script>

<style lang="scss">
@import 'assets/style/common';

.max-box-card {
  width: 100%;
}
</style>
