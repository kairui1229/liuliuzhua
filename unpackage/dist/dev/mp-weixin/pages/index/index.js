"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  (_easycom_uni_icons2 + _easycom_uni_search_bar2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_search_bar)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const menuButtonInfo = common_vendor.ref(null);
    common_vendor.onLoad(() => {
      menuButtonInfo.value = common_vendor.index.getMenuButtonBoundingClientRect();
    });
    const headerStyle = common_vendor.computed(() => {
      let style = {
        height: "200px"
      };
      if (menuButtonInfo.value) {
        style = {
          height: `${menuButtonInfo.value.top + menuButtonInfo.value.height + 20}px`
        };
      }
      return style;
    });
    const navStyle = common_vendor.computed(() => {
      let style = {
        top: "0px",
        height: "44px"
      };
      if (menuButtonInfo.value) {
        style = {
          top: `${menuButtonInfo.value.top}px`,
          height: `${menuButtonInfo.value.height}px`
        };
      }
      return style;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "location",
          size: "28",
          color: "#fff"
        }),
        b: common_vendor.p({
          radius: "100",
          placeholder: "搜索宠物服务",
          clearButton: "none",
          cancelButton: "none"
        }),
        c: common_vendor.s(navStyle.value),
        d: common_vendor.s(headerStyle.value),
        e: common_vendor.gei(_ctx, "")
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
