<template>
  <el-container>
    <el-header>
      <el-row
        :gutter="20"
        type="flex"
        justify="center"
        align="middle">
        <el-col
          :span="2"
          class="flex-inline-center">
          <div class="iconfont open-logo logo "/>
        </el-col>
        <el-col :span="9">
          <el-menu
            mode="horizontal"
            default-active="1"
            background-color="#2B3843"
            text-color="#fff"
            active-text-color="#FF9C00">
            <el-menu-item
              index="1">
              {{ $t('header.homePage') }}
            </el-menu-item>
            <el-menu-item
              index="2">
              {{ $t('header.classify') }}
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col span="3">
          <el-row
            span="24"
            type="flex"
            justify="end">
            <el-input
              v-model="input21"
              class="search-input"
              maxlength="120"
              minlength="2"
              clearable="true"
              placeholder="请输入内容"
              prefix-icon="el-icon-search"/>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer>
      13
    </el-footer>
  </el-container>
</template>

<script>
export default {
  mounted() {
    var scrollbar = new this.$geminiScrollbar({
      element: document.body,
      autoshow: true
    }).create()
    console.log(scrollbar)
  }
}
</script>

<style lang="scss">
@import 'assets/style/common';

.el-header {
  background-color: $--main-color;
}
.logo {
  color: $--color-white;
  font-size: 48px;
}
.search-input .el-input__inner {
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
