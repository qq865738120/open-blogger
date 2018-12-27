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
        <main-display :data="mainDisplay"/>
        <div
          class="flex-inline-between margin-top-24"
          style="width: 100%">
          <sub-display
            v-for="(item, index) of subDisplay"
            :key="index"
            :data="item" />
        </div>
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
import SubDisplay from '~/components/SubDisplay.vue'

export default {
  components: {
    MainDisplay,
    SubDisplay
  },
  data() {
    return {
      mainDisplay: {
        imgSrc:
          'https://static001.infoq.cn/resource/image/ea/74/ea1ed1fe11dc85f2ffb37dda5c2b4574.jpg?x-oss-process=image/crop,y_145,w_999,h_514/resize,w_776,h_400',
        title: '2018 年终盘点：“年度爆款”的区块链真的结束了吗？',
        describe: '年终盘点之区块链：拨霾见日，大路朝天',
        author: '覃云，徐川',
        tag: ['区块链', 'web']
      },
      subDisplay: [
        {
          imgSrc:
            'https://static001.infoq.cn/resource/image/ea/74/ea1ed1fe11dc85f2ffb37dda5c2b4574.jpg?x-oss-process=image/crop,y_145,w_999,h_514/resize,w_776,h_400',
          title: '2018 年终盘点：“年度爆款”的区块链真的结束了吗？',
          author: '覃云，徐川',
          tag: ['区块链', 'web']
        },
        {
          imgSrc:
            'https://static001.infoq.cn/resource/image/ea/74/ea1ed1fe11dc85f2ffb37dda5c2b4574.jpg?x-oss-process=image/crop,y_145,w_999,h_514/resize,w_776,h_400',
          title: '2018 年终盘点：“年度爆款”的区块链真的结束了吗？',
          author: '覃云，徐川',
          tag: ['区块链', 'web']
        },
        {
          imgSrc:
            'https://static001.infoq.cn/resource/image/ea/74/ea1ed1fe11dc85f2ffb37dda5c2b4574.jpg?x-oss-process=image/crop,y_145,w_999,h_514/resize,w_776,h_400',
          title: '2018 年终盘点：“年度爆款”的区块链真的结束了吗？',
          author: '覃云，徐川',
          tag: ['区块链', 'web']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/style/common';

.max-box-card {
  width: 100%;
}
</style>
