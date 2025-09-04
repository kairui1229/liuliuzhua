"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_input2 = common_vendor.resolveComponent("up-input");
  const _easycom_up_button2 = common_vendor.resolveComponent("up-button");
  (_easycom_up_icon2 + _easycom_up_input2 + _easycom_up_button2)();
}
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_up_input = () => "../../uni_modules/uview-plus/components/u-input/u-input.js";
const _easycom_up_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_input + _easycom_up_button)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    const platform = common_vendor.ref("");
    common_vendor.onMounted(() => {
      platform.value = "mp-weixin";
    });
    const fn = () => {
      common_vendor.index.setStorageSync("token", "xulaoshi666");
      common_vendor.index.setStorageSync("user", { user_id: 1, phone: 18888888888 });
      common_vendor.index.showToast({
        title: "登录成功",
        icon: "success",
        duration: 1500
      });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 500);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0$2,
        b: platform.value === "mp-weixin"
      }, platform.value === "mp-weixin" ? {
        c: common_vendor.p({
          name: "weixin-fill",
          color: "#fff",
          size: "32"
        }),
        d: common_vendor.o(fn)
      } : {
        e: common_vendor.p({
          placeholder: "请输入手机号",
          prefixIcon: "phone",
          border: "none",
          prefixIconStyle: "font-size: 22px;color: #909399"
        }),
        f: common_vendor.p({
          placeholder: "请输入验证码",
          type: "number",
          maxlength: "6",
          border: "none",
          prefixIcon: "lock",
          prefixIconStyle: "font-size: 22px;color: #909399"
        }),
        g: common_vendor.o(() => {
        }),
        h: common_vendor.o(() => {
        }),
        i: common_vendor.p({
          type: "primary",
          ["custom-style"]: {
            backgroundColor: "#ffce2c",
            borderColor: "#ffce2c",
            height: "88rpx",
            fontSize: "32rpx"
          }
        })
      }, {
        j: common_vendor.gei(_ctx, "")
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map
