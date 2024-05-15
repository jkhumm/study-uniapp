"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "shop_demo",
  setup(__props) {
    const goods = common_vendor.ref([
      {
        id: "11",
        name: "小米",
        price: 4999,
        checked: false
      },
      {
        id: "22",
        name: "华为",
        price: 6899,
        checked: false
      },
      {
        id: "33",
        name: "oppo",
        price: 2988,
        checked: false
      },
      {
        id: "44",
        name: "苹果",
        price: 9888,
        checked: false
      }
    ]);
    const selectGroup = common_vendor.ref([]);
    const totalNumber = common_vendor.computed(() => selectGroup.value.length);
    const totalPrice = common_vendor.computed(() => {
      return goods.value.filter((item) => item.checked).reduce((prev, curr) => prev + curr.price, 0);
    });
    function remove(index) {
      goods.value.splice(index, 1);
    }
    function itemChange(e) {
      selectGroup.value = e.detail.value;
      goods.value.forEach((item) => {
        item.checked = selectGroup.value.includes(item.id);
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(goods.value, (item, index, i0) => {
          return {
            a: item.id,
            b: item.checked,
            c: common_vendor.t(item.name),
            d: common_vendor.t(item.price),
            e: common_vendor.o(($event) => remove(index), item.id),
            f: item.id
          };
        }),
        b: common_vendor.o(itemChange),
        c: common_vendor.t(totalNumber.value),
        d: common_vendor.t(totalPrice.value),
        e: common_vendor.t(selectGroup.value),
        f: common_vendor.t(goods.value)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f3a2fb8c"], ["__file", "D:/humm/hubild-pro/study-uniapp/pages/index/demo2/shop_demo.vue"]]);
wx.createPage(MiniProgramPage);
