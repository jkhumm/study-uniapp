"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "life-components",
  setup(__props) {
    common_vendor.onUnmounted(() => {
      console.log("组件被卸载");
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/humm/hubild-pro/study-uniapp/components/life-components/life-components.vue"]]);
wx.createComponent(Component);
