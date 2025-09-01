"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_http_interceptors = require("./interceptors.js");
const request = (config) => {
  const processedConfig = utils_http_interceptors.requestInterceptor(config);
  const url = `https://www.liuliuzhua.cn${processedConfig.url}`;
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url,
      method: processedConfig.method || "GET",
      data: processedConfig.data,
      header: processedConfig.header,
      success: (res) => {
        try {
          resolve(utils_http_interceptors.responseInterceptor(res));
        } catch (err) {
          reject(err);
        }
      },
      fail: (err) => {
        reject("请求失败");
      }
    });
  });
};
const get = (url, data) => request({ url, method: "GET", data });
exports.get = get;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/utils/http/index.js.map
