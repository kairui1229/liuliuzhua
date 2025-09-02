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
    const currentPage = common_vendor.ref(1);
    const getCategories = async () => {
      const data = await utils_http_index.get("/sel/tag");
      categories.value = data.tag;
      getProducts(currentPage.value, categories.value[0].id);
    };
    const currentCategory = common_vendor.ref(0);
    const switchCategory = (index) => {
      currentCategory.value = index;
    };
    const products = common_vendor.ref([]);
    const totalPages = common_vendor.ref(0);
    const getProducts = async (page, category_id) => {
      const data = await utils_http_index.get("/sel/products", { page, category_id });
      common_vendor.index.__f__("log", "at pages/selected/selected.vue:64", "商品数据", data);
      if (page === 1) {
        products.value = data.list;
      } else {
        products.value = [...products.value, ...data.list];
      }
      totalPages.value = data.pagination.totalPages;
      currentPage.value = data.pagination.current;
    };
    common_vendor.onReachBottom(() => {
      if (currentPage.value < totalPages.value)
        ;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          radius: "100",
          placeholder: "猫粮狗粮、宠物零食",
          clearButton: "none",
          cancelButton: "none"
        }),
        b: common_vendor.f(categories.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.category_name),
            b: item.id,
            c: currentCategory.value === index ? 1 : "",
            d: common_vendor.o(($event) => switchCategory(index), item.id)
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
