"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "demo5",
  setup(__props) {
    common_vendor.onReachBottom((e) => {
      console.log("到底了" + e);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(100, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/humm/hubild-pro/study-uniapp/pages/index/demo5/demo5.vue"]]);
wx.createPage(MiniProgramPage);
