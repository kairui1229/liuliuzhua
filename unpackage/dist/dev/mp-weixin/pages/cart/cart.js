"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_http_index = require("../../utils/http/index.js");
if (!Array) {
  const _easycom_up_checkbox2 = common_vendor.resolveComponent("up-checkbox");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  (_easycom_up_checkbox2 + _easycom_up_icon2)();
}
const _easycom_up_checkbox = () => "../../uni_modules/uview-plus/components/u-checkbox/u-checkbox.js";
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_up_checkbox + _easycom_up_icon)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cart",
  setup(__props) {
    common_vendor.onLoad(() => {
      getCart();
    });
    const cartList = common_vendor.ref([]);
    const getCart = async () => {
      try {
        const data = await utils_http_index.get("/cart/list");
        common_vendor.index.__f__("log", "at pages/cart/cart.vue:61", "购物车数据", data);
        cartList.value = data.map((item) => ({
          ...item,
          selected: false
        }));
      } catch (error) {
        common_vendor.index.__f__("error", "at pages/cart/cart.vue:68", "获取失败");
      }
    };
    const deleteItem = (cart_id) => {
      common_vendor.index.showModal({
        title: "提示",
        content: "确定要删除此商品吗?",
        success: async (res) => {
          if (res.confirm) {
            try {
              await utils_http_index.post("/cart/deleteCart", { cart_id });
              common_vendor.index.showToast({
                title: "删除成功",
                icon: "success"
              });
              getCart();
            } catch (error) {
              common_vendor.index.__f__("error", "at pages/cart/cart.vue:87", "删除商品失败");
            }
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: cartList.value.length > 0
      }, cartList.value.length > 0 ? {
        b: common_vendor.f(cartList.value, (item, k0, i0) => {
          return {
            a: "c91e7611-0-" + i0,
            b: common_vendor.o(($event) => item.selected = $event, item.cart_id),
            c: common_vendor.p({
              usedAlone: true,
              checked: item.selected
            }),
            d: item.main_pic,
            e: common_vendor.t(item.name),
            f: common_vendor.t(item.spec),
            g: common_vendor.t(item.price),
            h: common_vendor.t(item.count),
            i: "c91e7611-1-" + i0,
            j: common_vendor.o(($event) => deleteItem(item.cart_id), item.cart_id),
            k: item.cart_id
          };
        }),
        c: common_vendor.p({
          name: "trash",
          size: "20",
          color: "#999"
        })
      } : {}, {
        d: common_vendor.o(_ctx.toggleAllChecked),
        e: common_vendor.o(($event) => _ctx.allChecked = $event),
        f: common_vendor.p({
          usedAlone: true,
          checked: _ctx.allChecked
        }),
        g: common_vendor.t(_ctx.totalPrice),
        h: common_vendor.t(_ctx.selectedCount),
        i: _ctx.selectedCount > 0 ? 1 : "",
        j: common_vendor.o(
          //@ts-ignore
          (...args) => _ctx.goOrder && _ctx.goOrder(...args)
        ),
        k: common_vendor.gei(_ctx, "")
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c91e7611"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/cart/cart.js.map
