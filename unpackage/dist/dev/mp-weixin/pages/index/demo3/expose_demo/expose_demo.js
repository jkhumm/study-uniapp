"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_demo_child2 = common_vendor.resolveComponent("demo-child");
  _easycom_demo_child2();
}
const _easycom_demo_child = () => "../../../../components/demo-child/demo-child.js";
if (!Math) {
  _easycom_demo_child();
}
const _sfc_main = {
  __name: "expose_demo",
  setup(__props) {
    const child = common_vendor.ref(null);
    common_vendor.onMounted(() => {
      console.log(child.value);
    });
    const update = function() {
      child.value.updateCount();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr(child, "341e1130-0", {
          "k": "child"
        }),
        b: common_vendor.o(update)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/humm/hubild-pro/study-uniapp/pages/index/demo3/expose_demo/expose_demo.vue"]]);
wx.createPage(MiniProgramPage);
