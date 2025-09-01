"use strict";
const common_vendor = require("../../common/vendor.js");
const getToken = () => common_vendor.index.getStorageSync("token") || "";
const requestInterceptor = (config) => {
  const token = getToken();
  if (token) {
    config.header = {
      ...config.header,
      Authorization: `Bearer ${token}`
    };
  }
  return config;
};
const responseInterceptor = (res) => {
  if (res.statusCode !== 200) {
    throw new Error("请求失败", res.data.message);
  }
  if (!res.data.success) {
    throw new Error("数据异常");
  }
  return res.data.data;
};
exports.requestInterceptor = requestInterceptor;
exports.responseInterceptor = responseInterceptor;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/utils/http/interceptors.js.map
