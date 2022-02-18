<template>
  <div class="warrper">
    <van-nav-bar title="售后信息登记" class="title w100" left-arrow @click-left="onClickLeft" />
    <ul class="list">
      <li v-for="(value, index) in infoData" :key="index">
        <van-row class="flex-b" @click="toQuestion(value)">
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
  name: "Servicecheck",
  setup() {
    const infoData = [
      "消费机硬件问题",
      "消费机软件问题",
      "水控问题",
      "电控问题",
      "消费平台人员信息问题",
      "消费平台账目问题",
      "闸机硬件问题",
      "闸机软件操作问题",
      "Led大屏幕硬件问题",
      "车辆识别硬件问题",
      "车辆识别软件操作问题",
      "图书馆录入问题",
      "银行充值问题",
      "监控软件操作问题",
      "监控硬件问题",
      "自动升降柱硬件问题",
      "各系统操作电脑硬件问题",
      "各系统操作电脑软件问题",
      "电子围栏硬件问题",
      "其他问题",
    ];
    const router = useRouter();
    const onClickLeft = () => {
      router.go(-1);
    };
    const toQuestion = (value) => {
        console.log(value);
      router.push({
        name: "question",
        // params: value,
      });
    };
    return {
      infoData,
      onClickLeft,
      toQuestion,
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
