"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_http_index = require("../../../utils/http/index.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon2();
}
const _easycom_up_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_up_icon + ProductSpecPopup)();
}
const ProductSpecPopup = () => "../../../components/products-spec-popup/products-spec-popup2.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "product-detail",
  setup(__props) {
    const productInfo = common_vendor.ref({});
    common_vendor.onLoad((options) => {
      productInfo.value = JSON.parse(options.product);
      common_vendor.index.__f__("log", "at pages/packageA/product-detail/product-detail.vue:89", productInfo.value, 777);
      getImages();
    });
    const productImages = common_vendor.ref([]);
    const getImages = async () => {
      try {
        const res = await utils_http_index.get("/sel/detail", { id: productInfo.value.id });
        productImages.value = res;
      } catch (error) {
        common_vendor.index.__f__("error", "at pages/packageA/product-detail/product-detail.vue:101", "失败");
      }
    };
    const show = common_vendor.ref(false);
    const showSpecPopup = () => {
      show.value = true;
    };
    const handleClose = () => {
      show.value = false;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(productImages.value, (item, k0, i0) => {
          return {
            a: item.img_url,
            b: item.id
          };
        }),
        b: common_vendor.t(productInfo.value.price),
        c: common_vendor.t(productInfo.value.o_price),
        d: common_vendor.t(productInfo.value.name),
        e: common_vendor.t(productInfo.value.desc),
        f: common_vendor.p({
          name: "arrow-right",
          size: "20",
          color: "#999"
        }),
        g: common_vendor.o(showSpecPopup),
        h: common_vendor.f(productImages.value, (item, k0, i0) => {
          return {
            a: item.id,
            b: item.img_url
          };
        }),
        i: common_vendor.p({
          name: "home",
          size: "40",
          color: "#666"
        }),
        j: common_vendor.o(() => {
        }),
        k: common_vendor.p({
          name: "shopping-cart",
          size: "40",
          color: "#666"
        }),
        l: common_vendor.o(() => {
        }),
        m: common_vendor.o(() => {
        }),
        n: common_vendor.o(() => {
        }),
        o: common_vendor.o(handleClose),
        p: common_vendor.p({
          show: show.value,
          product: productInfo.value
        }),
        q: common_vendor.gei(_ctx, "")
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-210c53c6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/packageA/product-detail/product-detail.js.map
