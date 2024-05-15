"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "xxm-child",
  emits: ["customerColor", "customerChange"],
  setup(__props, { emit: __emit }) {
    const emitDemo = __emit;
    function onClick() {
      emitDemo("customerColor", Math.random());
    }
    function onInput(e) {
      emitDemo("customerChange", e.detail.value);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onClick),
        b: common_vendor.o(onInput)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-adf71a2a"], ["__file", "D:/humm/hubild-pro/study-uniapp/components/xxm-child/xxm-child.vue"]]);
wx.createComponent(Component);
