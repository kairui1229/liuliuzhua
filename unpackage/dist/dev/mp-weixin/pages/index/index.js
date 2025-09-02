"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_geocode = require("../../utils/geocode.js");
const utils_http_index = require("../../utils/http/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_up_scroll_list2 = common_vendor.resolveComponent("up-scroll-list");
  const _easycom_up_box2 = common_vendor.resolveComponent("up-box");
  (_easycom_uni_icons2 + _easycom_uni_search_bar2 + _easycom_up_scroll_list2 + _easycom_up_box2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_up_scroll_list = () => "../../uni_modules/uview-plus/components/u-scroll-list/u-scroll-list.js";
const _easycom_up_box = () => "../../uni_modules/uview-plus/components/u-box/u-box.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_search_bar + _easycom_up_scroll_list + _easycom_up_box)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const menuButtonInfo = common_vendor.ref(null);
    common_vendor.onLoad(() => {
      menuButtonInfo.value = common_vendor.index.getMenuButtonBoundingClientRect();
      startLocation();
      getBannerList();
      getPartList();
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
          common_vendor.index.__f__("log", "at pages/index/index.vue:163", "经度", res.longitude);
          common_vendor.index.__f__("log", "at pages/index/index.vue:164", "纬度", res.latitude);
          utils_geocode.reverseCode(res.longitude, res.latitude).then((res2) => {
            cityName.value = res2;
          }).catch((err) => {
            cityName.value = "无法定位";
          });
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
    const bannerList = common_vendor.ref([]);
    const getBannerList = async () => {
      try {
        const data = await utils_http_index.get("/home/banner");
        bannerList.value = data.banner;
        common_vendor.index.__f__("log", "at pages/index/index.vue:219", "bannerList", bannerList);
      } catch (err) {
        common_vendor.index.__f__("error", "at pages/index/index.vue:221", err);
      }
    };
    const partList = common_vendor.ref([]);
    const getPartList = async () => {
      try {
        const data = await utils_http_index.get("/home/part");
        partList.value = data.part;
        common_vendor.index.__f__("log", "at pages/index/index.vue:231", "partList", partList);
      } catch (err) {
        common_vendor.index.__f__("error", "at pages/index/index.vue:233", err);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "location",
          size: "28",
          color: "#fff"
        }),
        b: common_vendor.t(cityName.value),
        c: common_vendor.o(startLocation),
        d: common_vendor.p({
          radius: "100",
          placeholder: "搜索宠物服务",
          clearButton: "none",
          cancelButton: "none"
        }),
        e: common_vendor.s(navStyle.value),
        f: common_vendor.s(headerStyle.value),
        g: common_vendor.f(bannerList.value, (item, k0, i0) => {
          return {
            a: item.url,
            b: item.title
          };
        }),
        h: common_vendor.f(partList.value, (item, k0, i0) => {
          return {
            a: item.url,
            b: common_vendor.t(item.title),
            c: item.title
          };
        }),
        i: common_vendor.p({
          indicatorColor: "#fff0f0",
          indicatorActiveColor: "#ffce2c"
        }),
        j: common_assets._imports_0,
        k: common_assets._imports_1,
        l: common_assets._imports_2,
        m: common_vendor.p({
          height: "160px",
          gap: "12px"
        }),
        n: common_assets._imports_3,
        o: common_assets._imports_4,
        p: common_vendor.gei(_ctx, "")
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
