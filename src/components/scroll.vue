<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";

export default {
  props: {
    probeType: {
      type: Number,
      default: 1,
    },
    click: {
      type: Boolean,
      default: true,
    },
    listenScroll: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default: null,
    },
    pullup: {
      type: Boolean,
      default: false,
    },
    beforeScroll: {
      type: Boolean,
      default: false,
    },
    refreshDelay: {
      type: Number,
      default: 20,
    },
    scrollX: {
      type: Boolean,
      default: false,
    },
    scrollY: {
      type: Boolean,
      default: true,
    },
    bounce: {
      type: Object,
      default() {
        return {
          top: true,
          bottom: true,
          left: true,
          right: true,
        };
      },
    },
    scrollEnd: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX,
        scrollY: this.scrollY,
        bounce: this.bounce,
      });
      if (this.listenScroll) {
        this.scroll.on("scroll", (pos) => {
          this.$emit("scrollaa", pos);
        });
      }

      if (this.pullup) {
        this.scroll.on("scrollEnd", () => {
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            this.$emit("scrollToEnd");
          }
        });
      }
      this.scroll.on("touchEnd", (pos) => {
        // 下拉动作
        if (pos.y > 50) {
          this.$emit("dropDownRefresh");
        }
      });

      if (this.scrollEnd) {
        this.scroll.on("scrollEnd", (e) => {
          this.$emit("scrollEnd", e);
        });
      }
      if (this.scrollEnd) {
        this.scroll.on("beforeScrollStart", () => {
          this.$emit("beforeScroll");
        });
      }
    },
    disable() {
      this.scroll && this.scroll.disable();
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    },
    isInTransition() {
      if (this.scroll) {
        return this.scroll.isInTransition;
      }
    },
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    },
  },
};
</script>
