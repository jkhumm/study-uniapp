"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_UserInfo2 = common_vendor.resolveComponent("UserInfo");
  _easycom_UserInfo2();
}
const _easycom_UserInfo = () => "../../../components/UserInfo/UserInfo.js";
if (!Math) {
  _easycom_UserInfo();
}
const _sfc_main = {
  __name: "watch_demo",
  setup(__props) {
    const person = common_vendor.ref({
      name: "张三",
      age: 10
    });
    const userInfoObj = common_vendor.ref(
      [{
        touxiang: "https://www.xfh2022.com/api/admin/file/download?id=24",
        xingming: "张三"
      }, {
        touxiang: "https://www.xfh2022.com/api/admin/file/download?id=25",
        xingming: "李四"
      }, {
        touxiang: "https://www.xfh2022.com/api/admin/file/download?id=26"
        // xingming: "11"
      }]
    );
    common_vendor.watch(person, (newValue) => {
    }, {
      deep: true,
      immediate: true
    });
    return (_ctx, _cache) => {
      return {
        a: person.value.name,
        b: common_vendor.o(($event) => person.value.name = $event.detail.value),
        c: common_vendor.t(person.value),
        d: common_vendor.f(userInfoObj.value, (item, index, i0) => {
          return {
            a: item.xingming,
            b: "7d5f3e6e-0-" + i0,
            c: common_vendor.p({
              obj: item
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/humm/hubild-pro/study-uniapp/pages/index/demo2/watch_demo.vue"]]);
wx.createPage(MiniProgramPage);
