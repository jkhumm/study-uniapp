"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "computed_demo",
  setup(__props) {
    const firstName = common_vendor.ref("");
    const lastName = common_vendor.ref("");
    const fullName = common_vendor.computed(() => firstName.value + "-" + lastName.value);
    return (_ctx, _cache) => {
      return {
        a: firstName.value,
        b: common_vendor.o(($event) => firstName.value = $event.detail.value),
        c: lastName.value,
        d: common_vendor.o(($event) => lastName.value = $event.detail.value),
        e: common_vendor.t(fullName.value)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-946e999a"], ["__file", "D:/humm/hubild-pro/study-uniapp/pages/index/demo2/computed_demo.vue"]]);
wx.createPage(MiniProgramPage);
