<template>
  <div>
    <div v-if="user"
         class="b">
      <div class="d">
        <div class="c">
          <img :src='userinfo.photo'
               alt="">
          <span>{{userinfo.name}}</span>
        </div>
        <div class="e">
          <van-button type="default">编辑资料</van-button>
        </div>
      </div>
      <div>
        <van-row>
          <van-col span="6">
            <p>{{userinfo.art_count}}</p>
            <p>头条</p>
          </van-col>
          <van-col span="6">
            <p>{{userinfo.follow_count}}</p>
            <p>关注</p>
          </van-col>
          <van-col span="6">
            <p>{{userinfo.fans_count}}</p>
            <p>粉丝</p>
          </van-col>
          <van-col span="6">
            <p>{{userinfo.like_count}}</p>
            <p>获赞</p>
          </van-col>
        </van-row>
      </div>
    </div>
    <header v-else>
      <div class="a"
           @click="$router.push('/login')">

        <img src="../../assets/mobile.png"
             alt="">
        <p>登录 / 注册</p>
      </div>
    </header>
    <div class="box">
      <div>
        <van-grid :border="false"
                  :column-num="2">
          <van-grid-item>
            <i slot="icon"
               class="toutiao toutiao-shoucang"></i>
            <span slot="text">收藏</span>
          </van-grid-item>
          <van-grid-item>
            <i slot="icon"
               class="toutiao toutiao-lishi"></i>
            <span slot="text">历史</span>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <div class="box1">
      <van-row>
        <van-col>
          <span>消息通知</span>
          <van-icon name="arrow" />
        </van-col>
        <van-col>
          <span>小智同学</span>
          <van-icon name="arrow" />
        </van-col>
      </van-row>
    </div>
    <div v-if="user"
         class="box2">
      <van-row>
        <van-col @click="ontc">
          退出登录
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getuser } from '@/api/loginApi.js'
export default {
  data () {
    return {
      userinfo: {}
    }
  },
  created () {
    if (this.user) { this.getusers() }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ontc () {
      this.$dialog.confirm({
        title: '确定退出登录吗？'
      })
        .then(() => {
          this.$store.commit('setuser', null)
        })
        .catch(() => {
          // on cancel
          console.log('取消退出登录')
        })
    },
    async getusers  () {
      try {
        const data = await getuser()
        this.userinfo = data.data.data
        console.log(this.userinfo)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 365px;
  background: url("../../assets/banner.png") center;
  background-size: cover;
  text-align: center;
  font-size: 28px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .a {
    width: 136px;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
    }
  }
}
.b {
  width: 100%;
  height: 365px;
  background: url("../../assets/banner.png") center;
  background-size: cover;
  .d {
    height: 70%;
    display: flex;
    justify-content: space-between;
    .c {
      margin-left: 32px;
      margin-top: 10%;
      img {
        vertical-align: middle;
        width: 132px;
      }
      span {
        margin-left: 22px;
        font-size: 30px;
        color: #fff;
      }
    }
    .e {
      margin-top: 14%;
      margin-right: 33px;
      .van-button {
        width: 115px;
        height: 32px;
        background: #ffffff;
        border-radius: 16px;
        padding: 0;
        span {
          color: #666;
          font-size: 20px;
        }
      }
    }
  }

  p {
    margin: 0;
    text-align: center;
    font-size: 36px;
    color: #fff;
  }
}
.toutiao {
  font-size: 45px;
}
.toutiao-shoucang {
  color: #eb5253;
}
.toutiao-lishi {
  color: #ff9d1d;
}
.van-grid {
  span {
    margin-top: 16px;
    font-size: 28px;
  }
}
.box1 {
  background: #fff;

  .van-row {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    .van-col:nth-child(1) {
      border-bottom: 1px solid #edeff3;
    }
    .van-col {
      margin-left: 20px;
      display: flex;
      justify-content: space-between;
      height: 101px;
      span {
        line-height: 101px;
        font-size: 30px;
        text-indent: 20px;
      }
      .van-icon {
        margin-right: 26px;
        line-height: 101px;
        font-size: 30px;
        margin-top: 1px;
        vertical-align: middle;
        color: #9f9f9f;
      }
    }
  }
}
.box2 {
  margin-top: 9px;
  height: 104px;
  background: #fff;
  .van-row {
    display: flex;
    justify-content: center;
    line-height: 104px;
    font-size: 30px;
    color: #d86262;
  }
}
</style>
