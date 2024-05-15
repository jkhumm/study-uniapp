"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  // 在实例初始化之后，观测数据（data observer和 event/watcher）之前 被调用
  beforeCreate() {
  },
  // 在实例创建之后被调用，这一步实例已经完成了一下配置，数据观测、属性方法的运算，watch/event事件回调，然而挂载阶段还没开始
  created() {
  },
  onLoad() {
  },
  // 在挂载开始之前被调用：相关的渲染函数首次被调用
  beforeMount() {
  },
  // 被新创建的vm.$el 替换，挂载成功
  mounted() {
  },
  // 前面	5个按顺序执行
  // 数据更新时调用
  beforeUpdate() {
  },
  // 组件DOM 已经更新
  updated() {
  },
  data() {
    return {
      title: "Hello uniapp",
      youColor: "divColorClass",
      awesome: false,
      items: [{
        message: "Foo"
      }, {
        message: "Bar"
      }],
      selectValue: -1,
      range: [
        {
          value: 0,
          text: "篮球"
        },
        {
          value: 1,
          text: "足球"
        },
        {
          value: 2,
          text: "游泳"
        }
      ],
      contentTextStr: {
        contentdown: "自定义-查看更多",
        contentrefresh: "自定义-加载中",
        contentnomore: "自定义-没有更多"
      }
    };
  },
  methods: {
    updateMsg() {
      setTimeout(() => {
        if (this.title === "change") {
          this.title = "Hello uniapp";
        } else {
          this.title = "change";
        }
      }, 100);
    },
    change(e) {
      alert(e);
    }
  }
};
if (!Array) {
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_data_select2 + _easycom_uni_load_more2)();
}
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_data_select + _easycom_uni_load_more)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.title),
    b: common_vendor.o((...args) => $options.updateMsg && $options.updateMsg(...args)),
    c: common_vendor.n($data.youColor),
    d: common_vendor.t("yes"),
    e: common_vendor.t("vue".split("").reverse().join("")),
    f: $data.awesome
  }, $data.awesome ? {} : {}, {
    g: common_vendor.o($options.change),
    h: common_vendor.o(($event) => $data.selectValue = $event),
    i: common_vendor.p({
      localdata: $data.range,
      modelValue: $data.selectValue
    }),
    j: common_vendor.p({
      status: "noMore",
      ["content-text"]: $data.contentTextStr
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/humm/hubild-pro/study-uniapp/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
