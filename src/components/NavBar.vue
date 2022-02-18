<template>
  <div class="nav-bar van-hairline--top">
    <ul class="nav-list flex-b">
      <router-link tag="li" class="nav-list-item active" v-for="(item, i) in list" :key="i" :to="item.path">
        <div class="tac">
          <van-image width="22" height="20" class="tac" :src="list[i].path === $route.path ? list[i].selected : list[i].normal" />
          <div>{{ item.text }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { toRefs, reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      active: "/home",
      list: [
        {
          path: "/home",
          text: "首页",
          normal: require("@/assets/tabbar/1.png"),
          selected: require("@/assets/tabbar/1_1.png"),
        },

        {
          path: "/personal",
          text: "我的",
          normal: require("@/assets/tabbar/4.png"),
          selected: require("@/assets/tabbar/4_1.png"),
        },
      ],
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
@import "../common/style/mixin";
.nav-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  z-index: 9999;
  background: #fff;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  .nav-list {
    width: 100%;
    flex-direction: row;
    padding: 0;
    .nav-list-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      text-align: center;
      color: #666;
      &.router-link-active {
        color: @primary;
      }
      i {
        text-align: center;
        font-size: 22px;
      }
      span {
        font-size: 12px;
      }
      .van-icon-shopping-cart-o {
        margin: 0 auto;
        margin-bottom: 2px;
      }
    }
  }
}
</style>
