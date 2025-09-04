"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_http_index = require("../../utils/http/index.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_icon2 + _easycom_up_popup2)();
}
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_up_popup = () => "../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "address",
  setup(__props) {
    common_vendor.onLoad((options) => {
      getAddressList();
    });
    const addressList = common_vendor.ref([]);
    const getAddressList = async () => {
      try {
        const result = await utils_http_index.get("/cart/address");
        addressList.value = result;
        common_vendor.index.__f__("log", "at packageB/address/address.vue:89", "地址列表", addressList.value);
      } catch (error) {
        common_vendor.index.__f__("log", "at packageB/address/address.vue:91", error);
      }
    };
    const deleteAddress = (id) => {
      common_vendor.index.showModal({
        title: "提示",
        content: "确认要删除这个地址吗？",
        success: async (res) => {
          if (res.confirm) {
            try {
              await utils_http_index.post("/cart/deleteAddress", { id });
              common_vendor.index.showToast({
                title: "删除成功",
                icon: "success"
              });
              getAddressList();
            } catch (error) {
              common_vendor.index.__f__("log", "at packageB/address/address.vue:110", error);
            }
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: addressList.value.length
      }, addressList.value.length ? {
        b: common_vendor.f(addressList.value, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.phone),
            c: item.is_default
          }, item.is_default ? {} : {}, {
            d: common_vendor.t(item.province),
            e: common_vendor.t(item.city),
            f: common_vendor.t(item.district),
            g: common_vendor.t(item.detail),
            h: "392a643a-0-" + i0,
            i: common_vendor.o(() => {
            }, item.id),
            j: "392a643a-1-" + i0,
            k: common_vendor.o(($event) => deleteAddress(item.id), item.id),
            l: item.id,
            m: common_vendor.o(() => {
            }, item.id)
          });
        }),
        c: common_vendor.p({
          name: "edit-pen",
          size: "20",
          color: "#666"
        }),
        d: common_vendor.p({
          name: "trash",
          size: "20",
          color: "#666"
        })
      } : {
        e: common_vendor.p({
          name: "map",
          size: "60",
          color: "#ccc"
        })
      }, {
        f: common_vendor.p({
          name: "plus",
          size: "20",
          color: "#fff"
        }),
        g: common_vendor.o(() => {
        }),
        h: common_vendor.p({
          name: "arrow-right",
          size: "16",
          color: "#999"
        }),
        i: common_vendor.o(() => {
        }),
        j: common_vendor.o(() => {
        }),
        k: common_vendor.o(() => {
        }),
        l: common_vendor.o(() => {
        }),
        m: common_vendor.p({
          show: false,
          closeable: true
        }),
        n: common_vendor.gei(_ctx, "")
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-392a643a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/packageB/address/address.js.map
