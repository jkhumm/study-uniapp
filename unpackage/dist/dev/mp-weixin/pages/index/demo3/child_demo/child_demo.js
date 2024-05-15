"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_xxm_child2 = common_vendor.resolveComponent("xxm-child");
  _easycom_xxm_child2();
}
const _easycom_xxm_child = () => "../../../../components/xxm-child/xxm-child.js";
if (!Math) {
  _easycom_xxm_child();
}
const _sfc_main = {
  __name: "child_demo",
  setup(__props) {
    const num = common_vendor.ref(0);
    const color = common_vendor.ref("#ccc");
    function changeColor(e) {
      num.value = e;
      color.value = "#" + String(e).substring(3, 6);
      console.log(color.value);
    }
    function writeInput(e) {
      console.log(e);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(changeColor),
        b: common_vendor.o(writeInput),
        c: color.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/humm/hubild-pro/study-uniapp/pages/index/demo3/child_demo/child_demo.vue"]]);
wx.createPage(MiniProgramPage);
