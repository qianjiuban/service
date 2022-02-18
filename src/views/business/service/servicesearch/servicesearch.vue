<template>
  <div class="warrper">
    <van-nav-bar title="售后信息查询" left-arrow @click-left="onClickLeft" />
    <van-form>
      <van-field colon v-model="applySchool" readonly name="学校名称" label="学校名称" placeholder="请选择学校" @click="showPicker = true" />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-picker :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
      </van-popup>
      <div @click="searchBox">
        <van-button block native-type="submit">查询</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { reactive, toRefs, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Cardsearch",
  setup() {
    const showPicker = ref(false);
    const columns = ["上海工商学院", "江苏南通中学"];
    const state=reactive({
      applySchool:""
    })
    const onConfirm = (value) => {
      applySchool = value;
      showPicker.value = false;
    };
    const router = useRouter();
    const onClickLeft = () => {
      router.go(-1);
      state.flag = false;
      state.form={};
    };
    const searchBox = () => {
      console.log(111111);
    };
    return {
      columns,
      onConfirm,
      showPicker,
      ...toRefs(state),
      onClickLeft,
      searchBox
    };
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
  .van-icon-arrow-left {
    color: #fff;
  }
  .van-nav-bar__title {
    color: #fff;
  }
}
/deep/.van-form {
  background-color: #fff;
  padding:5%;
  .van-cell { 
    width: 90%; 
    line-height: 1rem; 
    margin: 10px 0; 
    &::after { 
      border: none; 
    } 
    .van-cell__title {
      text-align: right;
    }
    .van-cell__value {
      border-radius: 6px;
      border: 1px solid #ddd;
      padding-left: 10px;
    }
  }
  .van-button--block {
    width: 64%;
    height: 1rem;
    margin-top: 8%;
    margin-left: 17%;
    border-radius: 6px;
    color: #fff;
    background-color: #3f9dff;
  }
}
</style>
