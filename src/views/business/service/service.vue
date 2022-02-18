<template>
  <div class="warrper">
    <van-nav-bar title="售后服务"/>
    <van-tabbar>
      <van-tabbar-item></van-tabbar-item>
      <van-tabbar-item to="/servicecheck">售后信息登记</van-tabbar-item>
      <van-tabbar-item to="/servicesearch">售后信息查询</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "Cardmake",
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
@import "@/common/style/mixin";
.warrper {
  background-color: #f6f6f6;
  .container {
    overflow: hidden;
  }
}
/deep/.van-nav-bar {
  background-color: @primary;
  height: 60px;
  .van-nav-bar__title {
    color: #fff;
  }
}

/deep/ .van-nav-bar__content {
  height: 60px;
}
.van-tabbar-item--active {
  flex: 0.3;
  color: #eee;
  background:url(../../../assets/icon/keyboard.png) no-repeat 12px 15px;
}
/deep/ .van-tabbar-item__icon .van-icon{
  border: 2px solid #eee;
}
.van-tabbar-item{
  border: 1px solid #eee;
}
</style>
