<template>
  <div class="box">
    <van-nav-bar v-if="zhs">
      <van-button slot="title"
                  type="info"
                  round
                  icon="search"
                  class="btn"
                  @click="zh">
        搜索
      </van-button>
    </van-nav-bar>

    <form action="/"
          v-if="zhs1">
      <van-search v-model="value"
                  show-action
                  background="#3296FA"
                  placeholder="请输入搜索关键词"
                  @search="onSearch"
                  @cancel="onCancel" />
    </form>
    <van-tabs class="tabs">
      <van-tab v-for="channel in channels"
               :title="channel.name"
               :key="channel.id">
        <article-list ref="article-list"
                      :channel="channel" />
      </van-tab>
      <div class="guding">
        <van-sticky>
          <van-button type="icon">
            <img src="../../assets/gradient-gray-line.png"
                 alt="">
            <i class="toutiao toutiao-gengduo"></i>
          </van-button>
        </van-sticky>
      </div>
    </van-tabs>

  </div>
</template>

<script>
import { Toast } from 'vant'
import { getchannels } from '@/api/loginApi.js'
import ArticleList from '@/components/shouye/list.vue'

export default {
  name: 'user',
  components: {
    ArticleList
  },

  data () {
    return {
      value: '',
      zhs: true,
      zhs1: false,
      channels: [],
      articleinfo: {},
      list: [],
      loading: false,
      finished: false
    }
  },
  created () {
    this.getchannel()
  },
  methods: {
    async getchannel () {
      const { data: res } = await getchannels()
      console.log('getchannel -> res', res)
      this.channels = res.data.channels
    },

    zh () {
      this.zhs = false
      this.zhs1 = true
    },
    onSearch (val) {
      Toast(val)
    },
    onCancel () {
      Toast('取消')
      this.zhs = true
      this.zhs1 = false
    }
  }

}
</script>

<style lang="scss" scoped>
.box {
  padding-bottom: 100px;
  .van-nav-bar {
    background: #3296fa;
    height: 96px;
    width: 100%;
    .van-icon {
      color: #fff;
    }
    .btn {
      background-color: rgba(255, 255, 255, 0.2);
      width: 555px;
      height: 64px;
      border-radius: 32px;
      border-style: none;
      .van-button__text {
        color: rgba(255, 255, 255, 0.9);
        font-size: 28px;
      }
    }
  }
}

.guding {
  position: absolute;
  top: 0;
  right: 0;
  img {
    position: absolute;
    height: 58px;
    right: 100px;
  }
  .van-button--normal {
    border: none;
    background: rgba(255, 255, 255, 0.9);
  }
  .toutiao {
    font-size: 40px;
    color: #333333;
  }
}
</style>
