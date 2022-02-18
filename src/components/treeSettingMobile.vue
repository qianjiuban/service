<template>
  <div class="mimo-tree">
    <div class="mimo-tree__current">
      <span @click="handleCurrentListClick(-1)">全部</span>
      <span v-for="(item, index) in currentData" :key="index" @click="handleCurrentListClick(index)">{{ item[label] }}</span>
    </div>

    <div class="mimo-tree__warp">
      <ul>
        <template v-if="data.length > 0">
          <li class="mimo-tree__item" v-for="item in rendeData" :key="item[nodeKey]">
            <van-icon name="newspaper-o" size="16" class="mr10" />
            <span @click="handleItemClick(item)" class="mimo-tree__item-text">{{ item[label] }}</span>
            <template v-if="showIcon">
              <van-icon name="plus" class="mr8" @click="handleAddData(item)" size="16" />
              <van-icon name="edit" class="mr8" @click="handleEditata(item)" size="16" />
              <van-icon v-if="item[nodeKey]" name="delete" @click="handleDelteeData(item)" size="16" />
              <template v-if="item[children] && item[children].length > 0">
                <small class="mimo-tree__item-count">({{ item[children].length }})</small>
                <van-icon name="arrow" @click="handleItemChildClick(item)" size="16" />
              </template>
            </template>
            <template v-else>
              <template v-if="item[children] && item[children].length > 0">
                <small class="mimo-tree__item-count">({{ item[children].length }})</small>
                <van-icon name="arrow" @click="handleItemChildClick(item)" size="16" />
              </template>
              <template v-else>
                <van-icon name="arrow" @click="handleItemClick(item)" size="16" />
              </template>
            </template>
          </li>
        </template>
        <li v-else class="empty">
          ------
          <small>暂无数据</small> ------
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "treeSettingMobile",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: "label",
    },
    nodeKey: {
      type: String,
      default: "",
    },
    children: {
      type: String,
      default: "children",
    },
    returnChildren: {
      type: Boolean,
      default: false,
    },
    returnLevels: {
      type: Boolean,
      default: false,
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // 当前数据
      currentData: [],
    };
  },

  computed: {
    rendeData() {
      if (this.currentData.length > 0) {
        let data = this.currentData[this.currentData.length - 1];
        let temp = data[this.children] ? data[this.children] : [];
        return temp;
      }
      return this.data;
    },
  },
  methods: {
    handleItemClick(row) {
      const data = JSON.parse(JSON.stringify(row));
      const levels = JSON.parse(JSON.stringify(this.currentData));
      if (!this.returnChildren) {
        delete data[this.children];
        levels.forEach((item) => {
          if (item[this.children]) {
            delete item[this.children];
          }
        });
      }
      this.returnLevels ? this.$emit("change", data, levels.concat([data])) : this.$emit("change", data);
    },
    handleItemChildClick(row) {
      this.currentData.push(row);
    },
    handleAddData(item) {
      this.$emit("handleAddData", item);
    },
    handleEditata(item) {
      this.$emit("handleEditata", item);
    },
    handleDelteeData(item) {
      this.$emit("handleDelteeData", item);
    },
    handleCurrentListClick(index) {
      this.currentData = index > -1 ? this.currentData.slice(0, index + 1) : [];
    },
  },
};
</script>

<style scoped>
.mimo-tree * {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.mimo-tree {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #eee;
}

.mimo-tree .mimo-tree__current {
  display: flex;
  word-break: keep-all;
  font-size: 14px;
  padding: 0 10px;
  height: 40px;
  align-items: center;
  box-shadow: 0px 0px 2px 2px #eee;
  overflow-x: auto;
  overflow-y: hidden;
}
.mimo-tree .mimo-tree__current span {
  position: relative;
  margin-right: 20px;
}
.mimo-tree .mimo-tree__current span::after {
  display: block;
  position: absolute;
  content: "/";
  top: 0;
  right: -10px;
}
.mimo-tree .mimo-tree__current span:last-child {
  color: #808080;
}
.mimo-tree .mimo-tree__current span:last-child::after {
  display: none;
}

.mimo-tree .mimo-tree__warp {
  flex: 1;
  overflow-y: auto;
  border-top: 1px solid #eee;
}

.mimo-tree .mimo-tree__warp .empty {
  padding: 20px 0;
  color: #999;
  text-align: center;
}
.mimo-tree .mimo-tree__warp .mimo-tree__item {
  border-bottom: 1px solid #eee;
  height: 38px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  padding: 8px 0;
  box-sizing: border-box;
}

.mimo-tree .mimo-tree__warp .mimo-tree__item .mimo-tree__item-text {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mimo-tree .mimo-tree__warp .mimo-tree__item .mimo-tree__item-count {
  width: 45px;
  text-align: center;
  color: #999;
}

.mimo-tree .mimo-tree__warp .mimo-tree__item .mimo-tree__item-child {
  padding: 0 8px;
  width: max-content;
  color: #409eff;
  border-left: 1px solid #eee;
  box-sizing: border-box;
  cursor: pointer;
}
.mr10 {
  margin-right: 10px;
}
</style>

