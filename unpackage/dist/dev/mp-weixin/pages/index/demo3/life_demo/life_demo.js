"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_life_components2 = common_vendor.resolveComponent("life-components");
  _easycom_life_components2();
}
const _easycom_life_components = () => "../../../../components/life-components/life-components.js";
if (!Math) {
  _easycom_life_components();
}
const _sfc_main = {
  __name: "life_demo",
  setup(__props) {
    const show = common_vendor.ref(true);
    const scroll = common_vendor.ref(null);
    common_vendor.onMounted(() => {
      console.log(scroll.value);
    });
    setTimeout(() => {
      show.value = false;
    }, 2e3);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: show.value
      }, show.value ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/humm/hubild-pro/study-uniapp/pages/index/demo3/life_demo/life_demo.vue"]]);
wx.createPage(MiniProgramPage);
