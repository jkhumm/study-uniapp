"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "demo4",
  setup(__props) {
    let stu = common_vendor.ref({ name: "aa", age: 0 });
    common_vendor.ref(null);
    common_vendor.onLoad((e) => {
      console.log("onLoad");
      stu.value["name"] = e.name;
      stu.value["age"] = e.age;
    });
    common_vendor.onReady(() => {
      console.log("onReady");
    });
    common_vendor.onShow(() => {
      console.log("onshow");
    });
    common_vendor.onHide(() => {
      console.log("onHide");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(stu).name),
        b: common_vendor.t(common_vendor.unref(stu).age)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/humm/hubild-pro/study-uniapp/pages/index/demo4/demo4.vue"]]);
wx.createPage(MiniProgramPage);
