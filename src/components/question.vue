<template>
  <div class="warrper">
    <van-nav-bar title="售后信息登记" class="title w100" left-arrow @click-left="onClickLeft" />
    <ul class="list">
      <li v-for="(value, index) in infoData" :key="index">
        <van-row class="flex-b" @click="toDetail(value)">
          <van-col style="padding-left: 10px">{{ value }}</van-col>
          <van-icon style="padding-right: 10px" name="arrow" />
        </van-row>
      </li>
    </ul>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  name: "question",
  setup() {
    const infoData = [
      "硬件丢失",
      "屏幕不亮",
      "网口不通",
      "键盘失灵",
      "数据无法上传",
      "消费机内置喇叭不响没有声音"
    ];
    const router = useRouter();
    const onClickLeft = () => {
      router.go(-1);
    };
    const toDetail = (value) => {
      router.push({
        name: "detail",
        params: value,
      });
    };
    return {
      infoData,
      onClickLeft,
      toDetail,
    };
  },
};
</script>
<style lang="less" scoped>
@import "@/common/style/mixin";
/deep/.van-nav-bar {
  background-color: @primary;
  .van-icon-arrow-left {
    color: #fff;
  }
  .van-nav-bar__title {
    color: #fff;
  }
}
.list li {
  font-size: 14px;
  border: 1px solid #ddd;
  border-top: none;
}
.list .van-col {
  padding: 10px;
}
</style>
