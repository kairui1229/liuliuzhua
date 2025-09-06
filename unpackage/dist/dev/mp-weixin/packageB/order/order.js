"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon2();
}
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "order",
  setup(__props) {
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: (_a = _ctx.address) == null ? void 0 : _a.name
      }, ((_b = _ctx.address) == null ? void 0 : _b.name) ? {
        b: common_vendor.t(_ctx.address.name),
        c: common_vendor.t(_ctx.address.phone),
        d: common_vendor.t(_ctx.address.province),
        e: common_vendor.t(_ctx.address.city),
        f: common_vendor.t(_ctx.address.district),
        g: common_vendor.t(_ctx.address.detail)
      } : {}, {
        h: common_vendor.p({
          name: "arrow-right",
          size: "24",
          color: "#999"
        }),
        i: common_vendor.o(
          //@ts-ignore
          (...args) => _ctx.chooseAddress && _ctx.chooseAddress(...args)
        ),
        j: common_vendor.f(_ctx.selPro, (item, k0, i0) => {
          return {
            a: item.main_pic,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.spec),
            d: common_vendor.t(item.price),
            e: common_vendor.t(item.count),
            f: item.product_id
          };
        }),
        k: common_vendor.t(_ctx.totalPrice),
        l: common_vendor.t(_ctx.totalPrice),
        m: common_vendor.t(_ctx.totalPrice),
        n: common_vendor.o(
          //@ts-ignore
          (...args) => _ctx.submitOrder && _ctx.submitOrder(...args)
        ),
        o: common_vendor.gei(_ctx, "")
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-913cca57"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/packageB/order/order.js.map
