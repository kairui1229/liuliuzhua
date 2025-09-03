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
      return common_vendor.e({
        a: common_assets._imports_0$2,
        b: common_vendor.o(
          //@ts-ignore
          (...args) => _ctx.decrease && _ctx.decrease(...args)
        ),
        c: common_vendor.t(_ctx.quantity),
        d: common_vendor.o(
          //@ts-ignore
          (...args) => _ctx.increase && _ctx.increase(...args)
        ),
        e: _ctx.showOk
      }, _ctx.showOk ? {
        f: common_vendor.o(
          //@ts-ignore
          (...args) => _ctx.handleOk && _ctx.handleOk(...args)
        )
      } : {}, {
        g: common_vendor.o(
          //@ts-ignore
          (...args) => _ctx.confirmSpec && _ctx.confirmSpec(...args)
        ),
        h: common_vendor.o(_ctx.close),
        i: common_vendor.o(_ctx.open),
        j: common_vendor.p({
          show: true,
          closeable: true
        }),
        k: common_vendor.gei(_ctx, "")
      });
    };
  }
});
exports._sfc_main = _sfc_main;
//# sourceMappingURL=../.sourcemap/mp-weixin/products-spec-popup.vue_vue_type_script_setup_true_lang.js.map
