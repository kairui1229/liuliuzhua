"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_http_index = require("../../utils/http/index.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "selected",
  setup(__props) {
    common_vendor.onLoad(() => {
      getCategories();
    });
    const categories = common_vendor.ref([]);
    const getCategories = async () => {
      const data = await utils_http_index.get("/sel/tag");
      categories.value = data.tag;
      common_vendor.index.__f__("log", "at pages/selected/selected.vue:40", categories.value, 123);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          radius: "100",
          placeholder: "猫粮狗粮、宠物零食",
          clearButton: "none",
          cancelButton: "none"
        }),
        b: common_vendor.f(categories.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.category_name),
            b: item.id
          };
        }),
        c: common_vendor.gei(_ctx, "")
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6737212f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/selected/selected.js.map
