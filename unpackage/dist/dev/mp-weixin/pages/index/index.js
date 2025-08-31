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
      startLocation();
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
    const cityName = common_vendor.ref("");
    const startLocation = () => {
      common_vendor.index.getLocation({
        type: "wgs84",
        geocode: true,
        success: (res) => {
          common_vendor.index.__f__("log", "at pages/index/index.vue:96", "经度", res.longitude);
          common_vendor.index.__f__("log", "at pages/index/index.vue:97", "纬度", res.latitude);
          common_vendor.index.__f__("log", "at pages/index/index.vue:98", "地址", res.address);
        },
        fail: (err) => {
          cityName.value = "无法获取位置";
          common_vendor.index.showModal({
            title: "提示",
            content: "需要获取您的位置信息，是否去设置开启定位权限？",
            success: (res) => {
              if (res.confirm) {
                common_vendor.index.openSetting({
                  success: (res2) => {
                    if (res2.authSetting["scope.userLocation"]) {
                      startLocation();
                    }
                  }
                });
              }
            }
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "location",
          size: "28",
          color: "#fff"
        }),
        b: common_vendor.o(startLocation),
        c: common_vendor.p({
          radius: "100",
          placeholder: "搜索宠物服务",
          clearButton: "none",
          cancelButton: "none"
        }),
        d: common_vendor.s(navStyle.value),
        e: common_vendor.s(headerStyle.value),
        f: common_vendor.gei(_ctx, "")
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
