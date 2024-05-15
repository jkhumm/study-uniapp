"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      fontValue: 30,
      inputValue: ""
    };
  },
  methods: {
    func() {
      alert("func");
    },
    change() {
      console.log("change");
    },
    fouc() {
      console.log("fouc");
    },
    confirm() {
      console.log("confirm");
    },
    inputFunc(e) {
      inputValue = e.detail.value;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.inputValue,
    b: common_vendor.o(($event) => $data.inputValue = $event.detail.value),
    c: common_vendor.t($data.inputValue),
    d: $data.fontValue + "px",
    e: common_vendor.o((...args) => $options.func && $options.func(...args)),
    f: common_vendor.o(($event) => $options.change())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/humm/hubild-pro/study-uniapp/pages/index/demo1/demo1.vue"]]);
wx.createPage(MiniProgramPage);
