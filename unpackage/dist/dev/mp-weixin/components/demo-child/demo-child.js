"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo-child",
  setup(__props, { expose: __expose }) {
    const count = common_vendor.ref(100);
    const updateCount = function() {
      count.value++;
    };
    __expose({
      youObj: count,
      name: "明哥",
      age: 11,
      updateCount
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(count.value)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-620191ea"], ["__file", "D:/humm/hubild-pro/study-uniapp/components/demo-child/demo-child.vue"]]);
wx.createComponent(Component);
