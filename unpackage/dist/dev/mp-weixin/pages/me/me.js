"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "me",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$2,
        b: common_vendor.o(
          //@ts-ignore
          (...args) => _ctx.handleLogin && _ctx.handleLogin(...args)
        ),
        c: common_assets._imports_1$2,
        d: common_assets._imports_2$2,
        e: common_assets._imports_3$1,
        f: common_assets._imports_4$1,
        g: common_assets._imports_5,
        h: common_assets._imports_6,
        i: common_assets._imports_7,
        j: common_assets._imports_8,
        k: common_vendor.p({
          title: "设置",
          showArrow: true
        }),
        l: common_vendor.p({
          title: "帮助中心",
          showArrow: true
        }),
        m: common_vendor.p({
          title: "关于我们",
          showArrow: true
        }),
        n: common_vendor.p({
          title: "地址管理",
          showArrow: true
        }),
        o: common_vendor.o(
          //@ts-ignore
          (...args) => _ctx.goAddress && _ctx.goAddress(...args)
        ),
        p: common_vendor.p({
          title: "联系我们",
          showArrow: true
        }),
        q: common_vendor.p({
          title: "退出",
          showArrow: true
        }),
        r: common_vendor.o(
          //@ts-ignore
          (...args) => _ctx.handleLogout && _ctx.handleLogout(...args)
        ),
        s: common_vendor.gei(_ctx, "")
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-19c123a7"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/me/me.js.map
