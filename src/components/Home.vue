<template>

  <div>
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item to='/shouye'><i slot="icon"
           class="toutiao toutiao-shouye"></i>首页</van-tabbar-item>
      <van-tabbar-item to='/wenda'><i slot="icon"
           class="toutiao toutiao-wenda"></i>问答</van-tabbar-item>
      <van-tabbar-item to='/shipin'><i slot="icon"
           class="toutiao toutiao-shipin"></i>视频</van-tabbar-item>
      <van-tabbar-item to='/my'><i slot="icon"
           class="toutiao toutiao-wode"></i>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }

}
</script>

<style lang="scss" scoped>
.toutiao {
  font-size: 32px;
}
</style>
