"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "re_geng",
  setup(__props) {
    const lists = common_vendor.ref([
      {
        id: 111,
        title: "刚满18岁"
      },
      {
        id: 222,
        title: "我不吃牛肉"
      },
      {
        id: 333,
        title: "遥遥领先"
      },
      {
        id: 444,
        title: "哪里贵了"
      }
    ]);
    const iptValue = common_vendor.ref("");
    const spliceEle = function(index) {
      lists.value.splice(index, 1);
    };
    const appendEle = function() {
      const obj = {
        id: Date.now(),
        title: iptValue.value
      };
      lists.value.push(obj);
      iptValue.value = "";
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(lists.value, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => spliceEle(index), item.id),
            d: item.id
          };
        }),
        b: common_vendor.t(lists.value.length),
        c: iptValue.value,
        d: common_vendor.o(($event) => iptValue.value = $event.detail.value),
        e: iptValue.value.length === 0,
        f: common_vendor.o(appendEle)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eb154da4"], ["__file", "D:/humm/hubild-pro/study-uniapp/pages/index/demo2/re_geng.vue"]]);
wx.createPage(MiniProgramPage);
