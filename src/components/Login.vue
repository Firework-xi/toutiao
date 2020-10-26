<template>
  <div>
    <van-nav-bar title="登录"
                 class="a">
      <template #left>
        <van-icon name="arrow-left"
                  size="18"
                  @click="$router.back()" />
      </template>
    </van-nav-bar>
    <van-form @submit="onSubmit"
              ref="userRef">
      <van-field v-model="user.mobile"
                 name='mobile'
                 :rules="userrules.mobile"
                 placeholder="请输入手机号"
                 type="number"
                 maxlength="11">
        <i slot="left-icon"
           class="toutiao toutiao-shouji"></i>
      </van-field>
      <van-field v-model="user.code "
                 name="code"
                 :rules="userrules.code"
                 placeholder="验证码"
                 type="number"
                 maxlength="6">
        <i slot="left-icon"
           class="toutiao toutiao-yanzhengma"></i>
        <i slot="right-icon"
           class="shuxian"></i>
        <template #button>
          <van-count-down :time="1000 * 60"
                          v-if="yc"
                          format="ss后重发"
                          @finish="yc = false" />
          <van-button size="small"
                      v-else
                      native-type="button"
                      @click="getcell">发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round
                    block
                    type="info"
                    native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, yzm } from '@/api/loginApi.js'

export default {
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      yc: false,
      userrules: {
        mobile: [{ required: true, message: '请输入手机号' }, {
          pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
          message: '手机格式错误'
        }],
        code: [{ required: true, message: '请输入验证码' }, {
          pattern: /^\d{6}$/,
          message: '验证码格式错误'
        }]
      }
    }
  },
  methods: {
    async onSubmit () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const { data: res } = await login(this.user)
        this.$toast.success('登录成功')
        this.$store.commit('setuser', res.data)
        this.$router.push('/my')
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        } else {
          this.$toast.fail('登录失败，请稍后重试')
        }
      }
    },

    async getcell () {
      this.yc = true
      try {
        await yzm(this.user.mobile)
        this.$toast.success('发送成功')
      } catch (err) {
        if (err.response.status === 429) {
          this.$toast.fail('发送太频繁了，请稍后重试')
        } else {
          this.$toast.fail('发送失败，请稍后重试')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.a {
  font-size: 32px;
  color: #ffffff;
  width: 65px;
  height: 35px;
  font-weight: 400;
  line-height: 36px;
}

.van-nav-bar {
  width: 750px;
  height: 96px;
  background: #3296fa;
}

.van-button--round {
  border-radius: 5px;
}
.toutiao {
  font-size: 32px;
}
.van-count-down {
  width: 152px;
  height: 46px;
  background: #ededed;
  border-radius: 23px;
  padding: 0;
  padding-top: 5px;
  font-size: 23px;
  color: #666666;
  text-align: center;
}
.shuxian {
  display: inline-block;
  width: 2px;
  height: 40px;
  background: #eeeeee;
  position: relative;
  top: 12px;
}
.van-nav-bar .van-icon {
  color: #fff;
}
</style>
