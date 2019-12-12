// import sa from "./alpha-cloud-impl.js";

var sa = require('./alpha-cloud-impl.js');

// var ald = require("./alpha-cloud-ald-impl");


let alphacloud = {};
alphacloud.init = function () {
  if (!sa.hasInit) {
    sa.setPara({
      name: "wecard_stat",
      //server_url: "http://127.0.0.1:20000/index.html",
      server_url: "https://log.alphadigtal.com",
      show_log: true,
      autoTrack: {
        appLaunch: true, //是否采集 $MPLaunch 事件，true 代表开启。
        appShow: true, //是否采集 $MPShow 事件，true 代表开启。
        appHide: true, //是否采集 $MPHide 事件，true 代表开启。
        pageShow: true, //是否采集 $MPViewScreen 事件，true 代表开启。
        pageShare: true //是否采集 $MPShare 事件，true 代表开启。
      }
    });
    sa.init();
  }
}
alphacloud.sendEvent = function (n, t) {
  alphacloud.init();
  // sa.track(n, t);
  // ald.sendEvent(n, t);
}
alphacloud.setOpenId = function (n) {
  sa.setOpenid(n);
}
module.exports = alphacloud;
