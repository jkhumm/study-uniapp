"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "UserInfo",
  props: {
    obj: {
      type: Object,
      // 如果默认值是数组或者对象，要写一个函数
      default() {
        return {
          touxiang: "https://www.xfh2022.com/api/admin/file/download?id=24",
          xingming: "胡明明设置的默认值"
        };
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.obj.touxiang,
        b: common_vendor.t(__props.obj.xingming)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1e7cdf7b"], ["__file", "D:/humm/hubild-pro/study-uniapp/components/UserInfo/UserInfo.vue"]]);
wx.createComponent(Component);
