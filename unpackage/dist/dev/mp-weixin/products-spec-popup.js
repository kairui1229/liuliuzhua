"use strict";
const common_vendor = require("./common/vendor.js");
const utils_http_index = require("./utils/http/index.js");
if (!Array) {
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  _easycom_up_popup2();
}
const _easycom_up_popup = () => "./uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  _easycom_up_popup();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "products-spec-popup",
  props: {
    show: { type: Boolean },
    product: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleClose = () => {
      emit("close");
    };
    common_vendor.watch(() => props.show, (newVal) => {
      if (newVal) {
        getSpec();
      }
    });
    const specList = common_vendor.ref([]);
    const getSpec = async () => {
      try {
        const res = await utils_http_index.get("/cart/getSpec", { id: props.product.id });
        specList.value = res || [];
        common_vendor.index.__f__("log", "at components/products-spec-popup/products-spec-popup.vue:63", "商品规格", specList.value);
        if (!res) {
          handleClose();
          setTimeout(() => {
            common_vendor.index.navigateTo({
              url: "/pages/login/login"
            });
          }, 500);
        }
      } catch (error) {
        common_vendor.index.__f__("log", "at components/products-spec-popup/products-spec-popup.vue:73", error);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: _ctx.product.main_pic,
        b: common_vendor.t(_ctx.product.price),
        c: common_vendor.f(specList.value, (group, k0, i0) => {
          return {
            a: common_vendor.t(group.attr_name),
            b: common_vendor.f(group.values, (item, k1, i1) => {
              return {
                a: common_vendor.t(item.value)
              };
            }),
            c: group.attr_id
          };
        }),
        d: common_vendor.o(() => {
        }),
        e: common_vendor.o(() => {
        }),
        f: common_vendor.o(() => {
        }),
        g: common_vendor.o(() => {
        }),
        h: common_vendor.o(handleClose),
        i: common_vendor.p({
          show: _ctx.show,
          closeable: true
        }),
        j: common_vendor.gei(_ctx, "")
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9472d2b1"]]);
exports.MiniProgramPage = MiniProgramPage;
//# sourceMappingURL=../.sourcemap/mp-weixin/products-spec-popup.js.map
