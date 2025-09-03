"use strict";
const common_vendor = require("./common/vendor.js");
const common_assets = require("./common/assets.js");
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
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$2,
        b: common_vendor.o(() => {
        }),
        c: common_vendor.o(() => {
        }),
        d: common_vendor.o(() => {
        }),
        e: common_vendor.o(() => {
        }),
        f: common_vendor.p({
          show: true,
          closeable: true
        }),
        g: common_vendor.gei(_ctx, "")
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9472d2b1"]]);
exports.MiniProgramPage = MiniProgramPage;
//# sourceMappingURL=../.sourcemap/mp-weixin/products-spec-popup.js.map
