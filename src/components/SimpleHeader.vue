<template>
  <header class="simple-header flex-b">
    <div class="flex">
      <i v-if="!isback" class="nbicon nbfanhui c-f fs20 mr10" @click="goBack"></i>
      <i v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
      <div v-if="centertext" class="fs16 c-f" style="margin-left: 115px">
        {{ name }}
      </div>
      <div v-else class="fs16 c-f">{{ name }}</div>
    </div>
    <van-icon name="search" class="c-f fs20 mr10 search" @click="headerSearch" v-if="show" />
  </header>
  <div class="block" />
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    back: {
      type: String,
      default: "",
    },
    noback: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: true,
    },
    pointShow: {
      type: Boolean,
      default: true,
    },
    centertext: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["callback", "headerSearch"],
  setup(props, ctx) {
    const isback = ref(props.noback);
    const router = useRouter();
    const goBack = () => {
      if (!props.back) {
        router.go(-1);
      } else {
        router.push({ path: props.back });
      }
      ctx.emit("callback");
    };
    const headerSearch = () => {
      ctx.emit("headerSearch");
    };
    return {
      goBack,
      isback,
      headerSearch,
    };
  },
};
</script>

<style lang="less" scoped>
@import "../common/style/mixin";
.simple-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;

  .wh(100%, 60px);
  line-height: 60px;
  padding: 0 10px;
  color: #252525;
  background: @primary;
  .icon_right {
    height: 100%;
  }
}
.block {
  height: 60px;
  background: @primary;
}
</style>
