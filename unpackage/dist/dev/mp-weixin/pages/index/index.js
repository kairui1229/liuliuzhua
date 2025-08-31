"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_up_button2 = common_vendor.resolveComponent("up-button");
  _easycom_up_button2();
}
const _easycom_up_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  _easycom_up_button();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      type: "primary",
      text: "确定"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
