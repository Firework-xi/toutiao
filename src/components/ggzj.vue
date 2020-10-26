<template>
  <div class="box">
    <van-row>
      <van-col>
        <h3>{{article.title}}</h3>
        <div>
          <div>
            <span>{{article.aut_name}}</span>
            <span>{{article.comm_count}}评论</span>
            <span>{{article.pubdate}}</span>
          </div>
          <van-icon name="cross" />
        </div>
      </van-col>
    </van-row>
    <van-row class="box3"
             v-if="article.cover.type === 3">
      <van-col>
        <h3>{{article.title}} </h3>
        <div>
          <van-image v-for="(img,index) in article.cover.images"
                     :key="index"
                     :src="img" />
        </div>

        <div>
          <div>
            <span>{{article.aut_name}}</span>
            <span>{{article.comm_count}}评论</span>
            <span>{{article.pubdate}}</span>
          </div>
          <van-icon name="cross" />
        </div>
      </van-col>
    </van-row>
    <van-row v-if="article.cover.type === 1">
      <van-col>
        <div class="box1">
          <h3>{{article.title}}</h3>
          <img :src="article.cover.images"
               alt="">
        </div>
        <div class="box2">
          <div>
            <span>{{article.aut_name}}</span>
            <span>{{article.comm_count}}评论</span>
            <span>{{article.pubdate}}</span>
          </div>
          <van-icon name="cross" />
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>

export default {
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
span {
  text-align: center;
  line-height: 100%;
  margin: 10px 4px;
  font-size: 23px;
  color: #999;
}
.van-grid {
  width: 232px;
  height: 146px;
}
.box {
  background: #fff;

  .van-row {
    display: flex;
    flex-direction: column;

    .van-col:nth-child(1) {
      border-bottom: 1px solid #edeff3;
    }
    .van-col {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      h3 {
        font-size: 32px;
        font-family: Arial;
        font-weight: 400;
        color: #3a3a3a;
      }
      div {
        display: flex;
        justify-content: space-between;
        .van-icon {
          font-size: 16px;
          padding-top: 30px;
          padding-right: 22px;
          color: #cecece;
        }
      }
    }
  }
}
.box1 {
  padding-top: 26px;
  display: flex;
  justify-content: space-between;
  h3 {
    width: 447px;
  }
  img {
    width: 232px;
    height: 146px;
    margin-right: 23px;
  }
}
.box3 {
  div:nth-child(1) {
    display: flex;
  }
  .van-image {
    width: 232px;
    height: 146px;
  }
}
</style>
