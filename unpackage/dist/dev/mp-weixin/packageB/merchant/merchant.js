"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_http_index = require("../../utils/http/index.js");
if (!Array) {
  const _easycom_up_search2 = common_vendor.resolveComponent("up-search");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_tabs2 = common_vendor.resolveComponent("up-tabs");
  const _easycom_up_rate2 = common_vendor.resolveComponent("up-rate");
  const _easycom_up_divider2 = common_vendor.resolveComponent("up-divider");
  (_easycom_up_search2 + _easycom_up_icon2 + _easycom_up_tabs2 + _easycom_up_rate2 + _easycom_up_divider2)();
}
const _easycom_up_search = () => "../../uni_modules/uview-plus/components/u-search/u-search.js";
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_up_tabs = () => "../../uni_modules/uview-plus/components/u-tabs/u-tabs.js";
const _easycom_up_rate = () => "../../uni_modules/uview-plus/components/u-rate/u-rate.js";
const _easycom_up_divider = () => "../../uni_modules/uview-plus/components/u-divider/u-divider.js";
if (!Math) {
  (_easycom_up_search + _easycom_up_icon + _easycom_up_tabs + _easycom_up_rate + _easycom_up_divider)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "merchant",
  setup(__props) {
    const list1 = common_vendor.reactive([
      { name: "推荐" },
      { name: "寄养" },
      { name: "摄影" },
      { name: "美容" },
      { name: "洗澡" },
      { name: "接送" },
      { name: "疫苗" },
      { name: "训练" }
    ]);
    common_vendor.onLoad((options) => {
      getMerchanList(1);
    });
    const merchanList = common_vendor.ref([]);
    const currentPage = common_vendor.ref(1);
    const totalPages = common_vendor.ref(0);
    const getMerchanList = async (page) => {
      try {
        const data = await utils_http_index.get("/home/merchants", { page });
        if (page === 1) {
          merchanList.value = data.list;
        } else {
          merchanList.value = [...merchanList.value, ...data.list];
        }
        totalPages.value = data.pagination.totalPages;
        currentPage.value = data.pagination.current;
      } catch (error) {
        common_vendor.index.__f__("error", "at packageB/merchant/merchant.vue:83", "获取失败");
      }
    };
    common_vendor.onReachBottom(() => {
      if (currentPage.value < totalPages.value) {
        getMerchanList(currentPage.value + 1);
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          placeholder: "搜索商家"
        }),
        b: common_vendor.p({
          name: "arrow-down",
          size: "16",
          color: "#999"
        }),
        c: common_vendor.o(($event) => _ctx.changeSort(0)),
        d: common_vendor.p({
          name: "arrow-down",
          size: "16",
          color: "#999"
        }),
        e: common_vendor.o(($event) => _ctx.changeSort(1)),
        f: common_vendor.p({
          name: "arrow-down",
          size: "16",
          color: "#999"
        }),
        g: common_vendor.o(($event) => _ctx.changeSort(2)),
        h: common_vendor.p({
          list: list1
        }),
        i: common_vendor.f(merchanList.value, (item, k0, i0) => {
          return {
            a: item.pic,
            b: common_vendor.t(item.merchant_name),
            c: "c169926f-5-" + i0,
            d: common_vendor.o(($event) => item.rating = $event, item.merchant_id),
            e: common_vendor.p({
              readonly: true,
              ["inactive-color"]: "#b2b2b2",
              ["active-color"]: "#ffce2c",
              modelValue: item.rating
            }),
            f: common_vendor.t(item.rating),
            g: common_vendor.t(item.address),
            h: common_vendor.f(item.service.split(","), (tag, k1, i1) => {
              return {
                a: common_vendor.t(tag),
                b: tag
              };
            }),
            i: item.merchant_id,
            j: common_vendor.o(($event) => _ctx.goDetail(item), item.merchant_id)
          };
        }),
        j: common_vendor.p({
          text: "我是有底线的"
        }),
        k: common_vendor.gei(_ctx, "")
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c169926f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/packageB/merchant/merchant.js.map
