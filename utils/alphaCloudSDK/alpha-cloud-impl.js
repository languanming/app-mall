var _ = {},
  sa = {
    para: {
      name: "alphacloud",
      server_url: "https://log.alphadigtal.com",
      send_timeout: 1e3,
      use_client_time: !1,
      show_log: !0,
      allow_amend_share_path: !0,
      max_string_length: 300,
      datasend_timeout: 3e3,
      autoTrack: {
        appLaunch: !0,
        appShow: !0,
        appHide: !0,
        pageShow: !0,
        pageShare: !0
      }
    }
  },
  logger = "object" == typeof logger ? logger : {};
logger.info = function () {
  
  if (sa.para.show_log && "object" == typeof console && console.log) try {
    return console.log.apply(console, arguments)
  } catch (e) {
    console.log(arguments[0])
  }
},
  sa.setPara = function (e) {
    sa.para = _.extend2Lev(sa.para, e),
      _.isObject(sa.para.register) && _.extend(_.info.properties, sa.para.register),
      sa.para.openid_url || (sa.para.openid_url = sa.para.server_url.replace(/([^\/])\/(sa)(\.gif){0,1}/, "$1/mp_login")),
      "number" != typeof sa.para.send_timeout && (sa.para.send_timeout = 1e3);
    var t = {
      send_timeout: 6e3,
      max_length: 6
    }; !0 === sa.para.batch_send ? (sa.para.batch_send = _.extend({},
      t), sa.para.use_client_time = !0) : "object" == typeof sa.para.batch_send && (sa.para.use_client_time = !0, sa.para.batch_send = _.extend({},
        t, sa.para.batch_send)),
      sa.para.server_url || logger.info("Please check parameters!")
  },
  sa.status = {};
var ArrayProto = Array.prototype,
  FuncProto = Function.prototype,
  ObjProto = Object.prototype,
  slice = ArrayProto.slice,
  toString = ObjProto.toString,
  hasOwnProperty = ObjProto.hasOwnProperty,
  LIB_VERSION = "1.13.5",
  LIB_NAME = "MiniProgram",
  source_channel_standard = "utm_source utm_medium utm_campaign utm_content utm_term",
  mp_scene = {
    1001: "\u53d1\u73b0\u680f\u5c0f\u7a0b\u5e8f\u4e3b\u5165\u53e3\uff0c“\u6700\u8fd1\u4f7f\u7528”\u5217\u8868",
    1005: "\u9876\u90e8\u641c\u7d22\u6846\u7684\u641c\u7d22\u7ed3\u679c\u9875",
    1006: "\u53d1\u73b0\u680f\u5c0f\u7a0b\u5e8f\u4e3b\u5165\u53e3\u641c\u7d22\u6846\u7684\u641c\u7d22\u7ed3\u679c\u9875",
    1007: "\u5355\u4eba\u804a\u5929\u4f1a\u8bdd\u4e2d\u7684\u5c0f\u7a0b\u5e8f\u6d88\u606f\u5361\u7247",
    1008: "\u7fa4\u804a\u4f1a\u8bdd\u4e2d\u7684\u5c0f\u7a0b\u5e8f\u6d88\u606f\u5361\u7247",
    1011: "\u626b\u63cf\u4e8c\u7ef4\u7801",
    1012: "\u957f\u6309\u56fe\u7247\u8bc6\u522b\u4e8c\u7ef4\u7801",
    1013: "\u624b\u673a\u76f8\u518c\u9009\u53d6\u4e8c\u7ef4\u7801",
    1014: "\u5c0f\u7a0b\u5e8f\u6a21\u7248\u6d88\u606f",
    1017: "\u524d\u5f80\u4f53\u9a8c\u7248\u7684\u5165\u53e3\u9875",
    1019: "\u5fae\u4fe1\u94b1\u5305",
    1020: "\u516c\u4f17\u53f7 profile \u9875\u76f8\u5173\u5c0f\u7a0b\u5e8f\u5217\u8868",
    1022: "\u804a\u5929\u9876\u90e8\u7f6e\u9876\u5c0f\u7a0b\u5e8f\u5165\u53e3",
    1023: "\u5b89\u5353\u7cfb\u7edf\u684c\u9762\u56fe\u6807",
    1024: "\u5c0f\u7a0b\u5e8f profile \u9875",
    1025: "\u626b\u63cf\u4e00\u7ef4\u7801",
    1026: "\u9644\u8fd1\u5c0f\u7a0b\u5e8f\u5217\u8868",
    1027: "\u9876\u90e8\u641c\u7d22\u6846\u641c\u7d22\u7ed3\u679c\u9875“\u4f7f\u7528\u8fc7\u7684\u5c0f\u7a0b\u5e8f”\u5217\u8868",
    1028: "\u6211\u7684\u5361\u5305",
    1029: "\u5361\u5238\u8be6\u60c5\u9875",
    1030: "\u81ea\u52a8\u5316\u6d4b\u8bd5\u4e0b\u6253\u5f00\u5c0f\u7a0b\u5e8f",
    1031: "\u957f\u6309\u56fe\u7247\u8bc6\u522b\u4e00\u7ef4\u7801",
    1032: "\u624b\u673a\u76f8\u518c\u9009\u53d6\u4e00\u7ef4\u7801",
    1034: "\u5fae\u4fe1\u652f\u4ed8\u5b8c\u6210\u9875",
    1035: "\u516c\u4f17\u53f7\u81ea\u5b9a\u4e49\u83dc\u5355",
    1036: "App \u5206\u4eab\u6d88\u606f\u5361\u7247",
    1037: "\u5c0f\u7a0b\u5e8f\u6253\u5f00\u5c0f\u7a0b\u5e8f",
    1038: "\u4ece\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u8fd4\u56de",
    1039: "\u6447\u7535\u89c6",
    1042: "\u6dfb\u52a0\u597d\u53cb\u641c\u7d22\u6846\u7684\u641c\u7d22\u7ed3\u679c\u9875",
    1043: "\u516c\u4f17\u53f7\u6a21\u677f\u6d88\u606f",
    1044: "\u5e26 shareTicket \u7684\u5c0f\u7a0b\u5e8f\u6d88\u606f\u5361\u7247\uff08\u8be6\u60c5)",
    1045: "\u670b\u53cb\u5708\u5e7f\u544a",
    1046: "\u670b\u53cb\u5708\u5e7f\u544a\u8be6\u60c5\u9875",
    1047: "\u626b\u63cf\u5c0f\u7a0b\u5e8f\u7801",
    1048: "\u957f\u6309\u56fe\u7247\u8bc6\u522b\u5c0f\u7a0b\u5e8f\u7801",
    1049: "\u624b\u673a\u76f8\u518c\u9009\u53d6\u5c0f\u7a0b\u5e8f\u7801",
    1052: "\u5361\u5238\u7684\u9002\u7528\u95e8\u5e97\u5217\u8868",
    1053: "\u641c\u4e00\u641c\u7684\u7ed3\u679c\u9875",
    1054: "\u9876\u90e8\u641c\u7d22\u6846\u5c0f\u7a0b\u5e8f\u5feb\u6377\u5165\u53e3",
    1056: "\u97f3\u4e50\u64ad\u653e\u5668\u83dc\u5355",
    1057: "\u94b1\u5305\u4e2d\u7684\u94f6\u884c\u5361\u8be6\u60c5\u9875",
    1058: "\u516c\u4f17\u53f7\u6587\u7ae0",
    1059: "\u4f53\u9a8c\u7248\u5c0f\u7a0b\u5e8f\u7ed1\u5b9a\u9080\u8bf7\u9875",
    1064: "\u5fae\u4fe1\u8fdeWi-Fi\u72b6\u6001\u680f",
    1067: "\u516c\u4f17\u53f7\u6587\u7ae0\u5e7f\u544a",
    1068: "\u9644\u8fd1\u5c0f\u7a0b\u5e8f\u5217\u8868\u5e7f\u544a",
    1069: "\u79fb\u52a8\u5e94\u7528",
    1071: "\u94b1\u5305\u4e2d\u7684\u94f6\u884c\u5361\u5217\u8868\u9875",
    1072: "\u4e8c\u7ef4\u7801\u6536\u6b3e\u9875\u9762",
    1073: "\u5ba2\u670d\u6d88\u606f\u5217\u8868\u4e0b\u53d1\u7684\u5c0f\u7a0b\u5e8f\u6d88\u606f\u5361\u7247",
    1074: "\u516c\u4f17\u53f7\u4f1a\u8bdd\u4e0b\u53d1\u7684\u5c0f\u7a0b\u5e8f\u6d88\u606f\u5361\u7247",
    1077: "\u6447\u5468\u8fb9",
    1078: "\u8fdeWi-Fi\u6210\u529f\u9875",
    1079: "\u5fae\u4fe1\u6e38\u620f\u4e2d\u5fc3",
    1081: "\u5ba2\u670d\u6d88\u606f\u4e0b\u53d1\u7684\u6587\u5b57\u94fe",
    1082: "\u516c\u4f17\u53f7\u4f1a\u8bdd\u4e0b\u53d1\u7684\u6587\u5b57\u94fe",
    1084: "\u670b\u53cb\u5708\u5e7f\u544a\u539f\u751f\u9875",
    1089: "\u5fae\u4fe1\u804a\u5929\u4e3b\u754c\u9762\u4e0b\u62c9",
    1090: "\u957f\u6309\u5c0f\u7a0b\u5e8f\u53f3\u4e0a\u89d2\u83dc\u5355\u5524\u51fa\u6700\u8fd1\u4f7f\u7528\u5386\u53f2",
    1091: "\u516c\u4f17\u53f7\u6587\u7ae0\u5546\u54c1\u5361\u7247",
    1092: "\u57ce\u5e02\u670d\u52a1\u5165\u53e3",
    1095: "\u5c0f\u7a0b\u5e8f\u5e7f\u544a\u7ec4\u4ef6",
    1096: "\u804a\u5929\u8bb0\u5f55",
    1097: "\u5fae\u4fe1\u652f\u4ed8\u7b7e\u7ea6\u9875",
    1099: "\u9875\u9762\u5185\u5d4c\u63d2\u4ef6",
    1102: "\u516c\u4f17\u53f7 profile \u9875\u670d\u52a1\u9884\u89c8",
    1103: "\u53d1\u73b0\u680f\u5c0f\u7a0b\u5e8f\u4e3b\u5165\u53e3\uff0c“\u6211\u7684\u5c0f\u7a0b\u5e8f”\u5217\u8868",
    1104: "\u5fae\u4fe1\u804a\u5929\u4e3b\u754c\u9762\u4e0b\u62c9\uff0c“\u6211\u7684\u5c0f\u7a0b\u5e8f”\u680f",
    1129: "\u5fae\u4fe1\u722c\u866b\u8bbf\u95ee"
  },
  sa_referrer = "\u76f4\u63a5\u6253\u5f00";
sa.status.referrer = "\u76f4\u63a5\u6253\u5f00";
var mpshow_time = null,
  share_depth = 0,
  share_distinct_id = "",
  is_first_launch = !1;
function mp_proxy(e, t, r) {
  var a = sa.autoTrackCustom[r];
  if (e[t]) {
    var s = e[t];
    e[t] = function () {
      "onLaunch" === t && (this[sa.para.name] = sa),
        !sa.para.autoTrackIsFirst || _.isObject(sa.para.autoTrackIsFirst) && !sa.para.autoTrackIsFirst[r] ? (s.apply(this, arguments), a.apply(this, arguments)) : (!0 === sa.para.autoTrackIsFirst || _.isObject(sa.para.autoTrackIsFirst) && sa.para.autoTrackIsFirst[r]) && (a.apply(this, arguments), s.apply(this, arguments))
    }
  } else e[t] = function () {
    "onLaunch" === t && (this[sa.para.name] = sa),
      a.apply(this, arguments)
  }
}
sa.lib_version = LIB_VERSION,
  function () {
    FuncProto.bind;
    var e = ArrayProto.forEach,
      t = ArrayProto.indexOf,
      r = Array.isArray,
      a = {},
      s = _.each = function (t, r, s) {
        if (null == t) return !1;
        if (e && t.forEach === e) t.forEach(r, s);
        else if (t.length === +t.length) {
          for (var n = 0,
            i = t.length; n < i; n++) if (n in t && r.call(s, t[n], n, t) === a) return !1
        } else for (var o in t) if (hasOwnProperty.call(t, o) && r.call(s, t[o], o, t) === a) return !1
      };
    _.logger = logger,
      _.extend = function (e) {
        return s(slice.call(arguments, 1),
          function (t) {
            for (var r in t) void 0 !== t[r] && (e[r] = t[r])
          }),
          e
      },
      _.extend2Lev = function (e) {
        return s(slice.call(arguments, 1),
          function (t) {
            for (var r in t) void 0 !== t[r] && (_.isObject(t[r]) && _.isObject(e[r]) ? _.extend(e[r], t[r]) : e[r] = t[r])
          }),
          e
      },
      _.coverExtend = function (e) {
        return s(slice.call(arguments, 1),
          function (t) {
            for (var r in t) void 0 !== t[r] && void 0 === e[r] && (e[r] = t[r])
          }),
          e
      },
      _.isArray = r ||
      function (e) {
        return "[object Array]" === toString.call(e)
      },
      _.isFunction = function (e) {
        try {
          return /^\s*\bfunction\b/.test(e)
        } catch (e) {
          return !1
        }
      },
      _.isArguments = function (e) {
        return !(!e || !hasOwnProperty.call(e, "callee"))
      },
      _.toArray = function (e) {
        return e ? e.toArray ? e.toArray() : _.isArray(e) ? slice.call(e) : _.isArguments(e) ? slice.call(e) : _.values(e) : []
      },
      _.values = function (e) {
        var t = [];
        return null == e ? t : (s(e,
          function (e) {
            t[t.length] = e
          }), t)
      },
      _.include = function (e, r) {
        var n = !1;
        return null == e ? n : t && e.indexOf === t ? -1 != e.indexOf(r) : (s(e,
          function (e) {
            if (n || (n = e === r)) return a
          }), n)
      }
  }(),
  _.trim = function (e) {
    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
  },
  _.isObject = function (e) {
    return null != e && "[object Object]" == toString.call(e)
  },
  _.isEmptyObject = function (e) {
    if (_.isObject(e)) {
      for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
      return !0
    }
    return !1
  },
  _.isUndefined = function (e) {
    return void 0 === e
  },
  _.isString = function (e) {
    return "[object String]" == toString.call(e)
  },
  _.isDate = function (e) {
    return "[object Date]" == toString.call(e)
  },
  _.isBoolean = function (e) {
    return "[object Boolean]" == toString.call(e)
  },
  _.isNumber = function (e) {
    return "[object Number]" == toString.call(e) && /[\d\.]+/.test(String(e))
  },
  _.isJSONString = function (e) {
    try {
      JSON.parse(e)
    } catch (e) {
      return !1
    }
    return !0
  },
  _.decodeURIComponent = function (e) {
    var t = "";
    try {
      t = decodeURIComponent(e)
    } catch (r) {
      t = e
    }
    return t
  },
  _.encodeDates = function (e) {
    return _.each(e,
      function (t, r) {
        _.isDate(t) ? e[r] = _.formatDate(t) : _.isObject(t) && (e[r] = _.encodeDates(t))
      }),
      e
  },
  _.formatDate = function (e) {
    function t(e) {
      return e < 10 ? "0" + e : e
    }
    return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds())
  },
  _.searchObjDate = function (e) {
    _.isObject(e) && _.each(e,
      function (t, r) {
        _.isObject(t) ? _.searchObjDate(e[r]) : _.isDate(t) && (e[r] = _.formatDate(t))
      })
  },
  _.formatString = function (e) {
    return e.length > sa.para.max_string_length ? (logger.info("\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u9650\u5236\uff0c\u5df2\u7ecf\u505a\u622a\u53d6--" + e), e.slice(0, sa.para.max_string_length)) : e
  },
  _.searchObjString = function (e) {
    _.isObject(e) && _.each(e,
      function (t, r) {
        _.isObject(t) ? _.searchObjString(e[r]) : _.isString(t) && (e[r] = _.formatString(t))
      })
  },
  _.unique = function (e) {
    for (var t, r = [], a = {},
      s = 0; s < e.length; s++)(t = e[s]) in a || (a[t] = !0, r.push(t));
    return r
  },
  _.strip_sa_properties = function (e) {
    return _.isObject(e) ? (_.each(e,
      function (t, r) {
        if (_.isArray(t)) {
          var a = [];
          _.each(t,
            function (e) {
              _.isString(e) ? a.push(e) : logger.info("\u60a8\u7684\u6570\u636e-", t, "\u7684\u6570\u7ec4\u91cc\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32,\u5df2\u7ecf\u5c06\u5176\u5220\u9664")
            }),
            0 !== a.length ? e[r] = a : (delete e[r], logger.info("\u5df2\u7ecf\u5220\u9664\u7a7a\u7684\u6570\u7ec4"))
        }
        _.isString(t) || _.isNumber(t) || _.isDate(t) || _.isBoolean(t) || _.isArray(t) || (logger.info("\u60a8\u7684\u6570\u636e-", t, "-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"), delete e[r])
      }), e) : e
  },
  _.strip_empty_properties = function (e) {
    var t = {};
    return _.each(e,
      function (e, r) {
        null != e && (t[r] = e)
      }),
      t
  },
  _.utf8Encode = function (e) {
    var t, r, a, s, n = "";
    for (t = r = 0, a = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, s = 0; s < a; s++) {
      var i = e.charCodeAt(s),
        o = null;
      i < 128 ? r++ : o = i > 127 && i < 2048 ? String.fromCharCode(i >> 6 | 192, 63 & i | 128) : String.fromCharCode(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128),
        null !== o && (r > t && (n += e.substring(t, r)), n += o, t = r = s + 1)
    }
    return r > t && (n += e.substring(t, e.length)),
      n
  },
  _.base64Encode = function (e) {
    var t, r, a, s, n, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      o = 0,
      c = 0,
      u = "",
      p = [];
    if (!e) return e;
    e = _.utf8Encode(e);
    do {
      t = (n = e.charCodeAt(o++) << 16 | e.charCodeAt(o++) << 8 | e.charCodeAt(o++)) >> 18 & 63, r = n >> 12 & 63, a = n >> 6 & 63, s = 63 & n, p[c++] = i.charAt(t) + i.charAt(r) + i.charAt(a) + i.charAt(s)
    } while (o < e.length);
    switch (u = p.join(""), e.length % 3) {
      case 1:
        u = u.slice(0, -2) + "==";
        break;
      case 2:
        u = u.slice(0, -1) + "="
    }
    return u
  },
  _.getCurrentPath = function () {
    var e = "\u672a\u53d6\u5230";
    try {
      var t = getCurrentPages();
      e = t[t.length - 1].route
    } catch (e) {
      logger.info(e)
    }
    return e
  },
  _.getCurrentUrl = function (e) {
    var t = _.getCurrentPath(),
      r = "";
    return _.isObject(e) && e.sensors_mp_url_query && (r = e.sensors_mp_url_query),
      t ? r ? t + "?" + r : t : "\u672a\u53d6\u5230"
  },
  _.getPath = function (e) {
    return e = "string" == typeof e ? e.replace(/^\//, "") : "\u53d6\u503c\u5f02\u5e38"
  },
  _.getQueryParam = function (e, t) {
    var r = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
    return null === r || r && "string" != typeof r[1] && r[1].length ? "" : _.decodeURIComponent(r[1])
  },
  sa.initialState = {
    queue: [],
    isComplete: !1,
    systemIsComplete: !1,
    storeIsComplete: !1,
    checkIsComplete: function () {
      this.systemIsComplete && this.storeIsComplete && (this.isComplete = !0, this.queue.length > 0 && (_.each(this.queue,
        function (e) {
          sa[e[0]].apply(sa, slice.call(e[1]))
        }), sa.queue = []))
    }
  },
  _.getPrefixUtm = function (e, t, r) {
    if (t = t || "", r = r || "_", !_.isObject(e)) return {};
    var a = {},
      s = {};
    for (var n in e) - 1 !== (" " + source_channel_standard + " ").indexOf(" " + n + " ") ? a[t + n] = e[n] : s[r + n] = e[n];
    return {
      $utms: a,
      otherUtms: s
    }
  },
  _.convertObjToParam = function (e) {
    var t = [];
    for (var r in e) t.push(r + "=" + e[r]);
    return t.join("&")
  },
  _.getSource = function (e) {
    if (_.isObject(e)) {
      if (_.isEmptyObject(e)) return {};
      for (var t in e) - 1 === (" " + source_channel_standard + " ").indexOf(" " + t + " ") ? delete e[t] : e[t] = e[t].replace("?", "*");
      e = "?" + (e = _.convertObjToParam(e))
    } else e = _.decodeURIComponent(e);
    var r = source_channel_standard.split(" "),
      a = source_channel_standard.split(" "),
      s = "",
      n = {};
    return 2 !== (e = e.split("?")).length ? {} : (e = "?" + (e = e[1]), _.isArray(sa.para.source_channel) && sa.para.source_channel.length > 0 && (a = a.concat(sa.para.source_channel), a = _.unique(a)), _.each(a,
      function (t) {
        s = _.getQueryParam(e, t),
          (s = _.decodeURIComponent(s)).length && _.include(r, t) && (n[t] = s)
      }), n)
  },
  _.getObjFromQuery = function (e) {
    var t = e.split("?"),
      r = {};
    return t && t[1] ? (_.each(t[1].split("&"),
      function (e) {
        var t = e.split("=");
        t[0] && t[1] && (r[t[0]] = t[1])
      }), r) : {}
  },
  _.setStorageSync = function (e, t) {
    var r = function () {
      wx.setStorageSync(e, t)
    };
    try {
      r()
    } catch (e) {
      try {
        r()
      } catch (e) {
        logger.info("setStorage fail")
      }
    }
  },
  _.getStorageSync = function (e) {
    var t = "";
    try {
      t = wx.getStorageSync(e)
    } catch (r) {
      try {
        t = wx.getStorageSync(e)
      } catch (e) {
        logger.info("getStorage fail")
      }
    }
    return t
  },
  _.getUtm = function (e, t, r) {
    var a = _.getSource(e);
    return void 0 === r && t ? {
      pre1: _.getPrefixUtm(a, t).$utms || {},
      pre2: {}
    } : void 0 !== r && t ? {
      pre1: _.getPrefixUtm(a, t).$utms || {},
      pre2: _.getPrefixUtm(a, r).$utms || {}
    } : {
          pre1: {},
          pre2: {}
        }
  },
  _.getMPScene = function (e) {
    return "number" == typeof e || "string" == typeof e && "" !== e ? (e = String(e), mp_scene[e] || e) : "\u672a\u53d6\u5230\u503c"
  },
  _.getShareDepth = function () {
    if ("number" == typeof share_depth && 0 !== share_depth) {
      var e = sa.store.getDistinctId(),
        t = sa.store.getFirstId();
      return !share_distinct_id || share_distinct_id !== e && share_distinct_id !== t ? share_depth + 1 : share_depth
    }
    return 1
  },
  _.setShareInfo = function (e, t) {
    var r = {};
    if (!(e && _.isObject(e.query) && e.query.sampshare)) return {};
    if (r = _.decodeURIComponent(e.query.sampshare), !_.isJSONString(r)) return {};
    var a = (r = JSON.parse(r)).d,
      s = r.p,
      n = r.i;
    "string" == typeof n ? (t.$share_distinct_id = n, share_distinct_id = n) : t.$share_distinct_id = "\u53d6\u503c\u5f02\u5e38",
      "number" == typeof a ? (t.$share_depth = a, share_depth = a) : t.$share_depth = "-1",
      t.$share_url_path = "string" == typeof s ? s : "\u53d6\u503c\u5f02\u5e38"
  },
  _.getShareInfo = function () {
    return JSON.stringify({
      i: sa.store.getDistinctId() || "\u53d6\u503c\u5f02\u5e38",
      p: _.getCurrentPath(),
      d: _.getShareDepth()
    })
  },
  _.setUtm = function (e, t) {
    var r = {};
    if (e && _.isObject(e.query)) {
      var a = (r = _.extend({},
        e.query)).scene;
      a && (a = -1 !== (a = _.decodeURIComponent(a)).indexOf("?") ? "?" + a.replace(/\?/g, "") : "?" + a, _.extend(r, _.getObjFromQuery(a))),
        e.query.q && _.extend(r, _.getObjFromQuery(_.decodeURIComponent(e.query.q)))
    }
    if (e && _.isObject(e.referrerInfo) && e.referrerInfo.extraData) {
      var s = {};
      _.isObject(e.referrerInfo.extraData) && !_.isEmptyObject(e.referrerInfo.extraData) ? s = e.referrerInfo.extraData : _.isJSONString(e.referrerInfo.extraData) && (s = JSON.parse(e.referrerInfo.extraData)),
        _.extend(r, s)
    }
    var n = _.getUtm(r, "$", "$latest_");
    return _.extend(t, n.pre1),
      n
  },
  _.wxrequest = function (e) {
    logger.info("Send url @_.wxrequest" + e);
    var t = wx.request(e);
    setTimeout(function () {
      _.isObject(t) && _.isFunction(t.abort) && t.abort()
    },
      sa.para.datasend_timeout)
  },
  _.info = {
    currentProps: {},
    properties: {
      $lib: LIB_NAME,
      $lib_version: String(LIB_VERSION)
    },
    getSystem: function () {
      var e = this.properties;
      function t() {
        wx.getSystemInfo({
          success: function (t) {
            e.$manufacturer = t.brand,
              e.$model = t.model,
              e.$screen_width = Number(t.screenWidth),
              e.$screen_height = Number(t.screenHeight),
              e.$os = t.system.split(" ")[0],
              e.$os_version = t.system.split(" ")[1],
              e.$pixel_r = t.pixelRatio,
              e.$we_lang = t.language,
              e.$we_ver = t.version,
              e.$sys_plat = t.platform,
              e.$we_sdk = t.SDKVersion,
              e.$open_id = sa.openid.getWXStorage()
          },
          complete: function () {
            sa.initialState.systemIsComplete = !0,
              sa.initialState.checkIsComplete()
          }
        })
      }
      wx.getNetworkType({
        success: function (t) {
          e.$network_type = t.networkType
        },
        complete: t
      })
      // 获取用户地理位置信息
      wx.getSetting({
        success: function (n) {
          if (n.authSetting["scope.userLocation"]) {
            wx.getLocation({
              type: "wgs84", success: function (n) {
                e.$latitude = n.latitude, e.$longitude = n.longitude, e.$speed = n.speed;
              }
            })
          }
          if (n.authSetting["scope.userInfo"]) {
            wx.getUserInfo({
              success: function (res) {
                logger.info("getUserInfo success");
                e.$user_nick = res.userInfo.nickName;
                e.$user_avatar = res.userInfo.avatarUrl;
                e.$user_gender = res.userInfo.gender; //性别 0：未知、1：男、2：女
                e.$user_province = res.userInfo.province;
                e.$user_city = res.userInfo.city;
                e.$user_country = res.userInfo.country;
              },
              fail: () => { logger.info("getUserInfo failed"); },
              complete: () => { }
            })
          }
        }
      })
      // Get wifi list
      wx.getConnectedWifi({
        success: (result) => {
          logger.info("getConnectedWifi success");
          e.$wifi_ssid = result.SSID;
          e.$wifi_bssid = result.BSSID;
          e.$wifi_secure = result.secure;
          e.$wifi_signal = result.signalStrength;
        },
        fail: () => { logger.info("getConnectedWifi failed"); },
        complete: () => { }
      })
    }
  },
  sa._ = _,
  sa.prepareData = function (e, t) {
    var r = {
      distinct_id: this.store.getDistinctId(),
      lib: {
        $lib: LIB_NAME,
        $lib_method: "code",
        $lib_version: String(LIB_VERSION)
      },
      properties: {}
    };
    _.extend(r, e),
      _.isObject(e.properties) && !_.isEmptyObject(e.properties) && _.extend(r.properties, e.properties),
      e.type && "profile" === e.type.slice(0, 7) || (sa.para.batch_send && (r._track_id = Number(String(Math.random()).slice(2, 5) + String(Math.random()).slice(2, 4) + String(Date.now()).slice(- 4))), r.properties = _.extend({},
        _.info.properties, sa.store.getProps(), _.info.currentProps, r.properties), "object" == typeof sa.store._state && "number" == typeof sa.store._state.first_visit_day_time && sa.store._state.first_visit_day_time > (new Date).getTime() ? r.properties.$is_first_day = !0 : r.properties.$is_first_day = !1),
      r.properties.$time && _.isDate(r.properties.$time) ? (r.time = 1 * r.properties.$time, delete r.properties.$time) : sa.para.use_client_time && (r.time = 1 * new Date),
      _.searchObjDate(r),
      _.searchObjString(r),
      logger.info(r),
      sa.sendStrategy.send(r)
  },
  sa.store = {
    verifyDistinctId: function (e) {
      return "number" == typeof e && (e = String(e), /^\d+$/.test(e) || (e = "unexpected_id")),
        "string" == typeof e && "" !== e || (e = "unexpected_id"),
        e
    },
    storageInfo: null,
    getUUID: function () {
      return Date.now() + "-" + Math.floor(1e7 * Math.random()) + "-" + Math.random().toString(16).replace(".", "") + "-" + String(31242 * Math.random()).replace(".", "").slice(0, 8)
    },
    getStorage: function () {
      return this.storageInfo ? this.storageInfo : (this.storageInfo = sa._.getStorageSync("alphacloud2019_wechat") || "", this.storageInfo)
    },
    _state: {},
    mem: {
      mdata: [],
      getLength: function () {
        return this.mdata.length
      },
      add: function (e) {
        this.mdata.push(e)
      },
      clear: function (e) {
        this.mdata.splice(0, e)
      }
    },
    toState: function (e) {
      var t = null;
      _.isJSONString(e) ? (t = JSON.parse(e)).distinct_id ? this._state = t : this.set("distinct_id", this.getUUID()) : _.isObject(e) && (t = e).distinct_id ? this._state = t : this.set("distinct_id", this.getUUID())
    },
    getFirstId: function () {
      return this._state.first_id
    },
    getDistinctId: function () {
      return this._state.distinct_id
    },
    getProps: function () {
      return this._state.props || {}
    },
    setProps: function (e, t) {
      var r = this._state.props || {};
      t ? this.set("props", e) : (_.extend(r, e), this.set("props", r))
    },
    set: function (e, t) {
      var r = {};
      for (var a in "string" == typeof e ? r[e] = t : "object" == typeof e && (r = e), this._state = this._state || {},
        r) this._state[a] = r[a];
      this.save()
    },
    change: function (e, t) {
      this._state[e] = t
    },
    save: function () {
      sa._.setStorageSync("alphacloud2019_wechat", this._state)
    },
    init: function () {
      var e = this.getStorage();
      if (e) this.toState(e);
      else {
        is_first_launch = !0;
        var t = new Date,
          r = t.getTime();
        t.setHours(23),
          t.setMinutes(59),
          t.setSeconds(60),
          sa.setOnceProfile({
            $first_visit_time: new Date
          }),
          this.set({
            distinct_id: this.getUUID(),
            first_visit_time: r,
            first_visit_day_time: t.getTime()
          })
      }
    }
  },
  sa.setProfile = function (e, t) {
    sa.prepareData({
      type: "profile_set",
      properties: e
    },
      t)
  },
  sa.setOnceProfile = function (e, t) {
    sa.prepareData({
      type: "profile_set_once",
      properties: e
    },
      t)
  },
  sa.appendProfile = function (e, t) {
    if (!_.isObject(e)) return !1;
    _.each(e,
      function (t, r) {
        _.isString(t) ? e[r] = [t] : _.isArray(t) || (delete e[r], logger.info("appendProfile\u5c5e\u6027\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u6216\u8005\u6570\u7ec4"))
      }),
      sa.prepareData({
        type: "profile_append",
        properties: e
      },
        t)
  },
  sa.incrementProfile = function (e, t) {
    if (!_.isObject(e)) return !1;
    var r = e;
    _.isString(e) && ((e = {})[r] = 1),
      sa.prepareData({
        type: "profile_increment",
        properties: e
      },
        t)
  },
  sa.sendEvent = function (e, t, r) {
    console.log('神策');
    this.prepareData({
      type: "sendEvent",
      event: e,
      properties: t
    },
      r)
  },
  sa.identify = function (e, t) {
    if ("string" != typeof e && "number" != typeof e) return !1;
    e = sa.store.verifyDistinctId(e);
    var r = sa.store.getFirstId(); !0 === t ? r ? sa.store.set("first_id", e) : sa.store.set("distinct_id", e) : r ? sa.store.change("first_id", e) : sa.store.change("distinct_id", e)
  },
  sa.trackSignup = function (e, t, r, a) {
    sa.prepareData({
      original_id: sa.store.getFirstId() || sa.store.getDistinctId(),
      distinct_id: e,
      type: "track_signup",
      event: t,
      properties: r
    },
      a),
      sa.store.set("distinct_id", e)
  },
  sa.registerApp = function (e) {
    _.isObject(e) && !_.isEmptyObject(e) && (_.info.currentProps = _.extend(_.info.currentProps, e))
  },
  sa.register = function (e) {
    _.isObject(e) && !_.isEmptyObject(e) && sa.store.setProps(e)
  },
  sa.clearAllRegister = function () {
    sa.store.setProps({},
      !0)
  },
  sa.login = function (e) {
    if ("string" != typeof e && "number" != typeof e) return !1;
    e = sa.store.verifyDistinctId(e);
    var t = sa.store.getFirstId(),
      r = sa.store.getDistinctId();
    e !== r && (t ? sa.trackSignup(e, "$SignUp") : (sa.store.set("first_id", r), sa.trackSignup(e, "$SignUp")))
  },
  sa.openid = {
    getRequest: function (e) {
      wx.login({
        success: function (t) {
          t.code && sa.para.appid && sa.para.openid_url ? _.wxrequest({
            url: sa.para.openid_url + "&code=" + t.code + "&appid=" + sa.para.appid,
            method: "GET",
            complete: function (t) {
              _.isObject(t) && _.isObject(t.data) && t.data.openid ? e(t.data.openid) : e()
            }
          }) : e()
        }
      })
    },
    getWXStorage: function () {
      var e = sa.store.getStorage();
      if (e && _.isObject(e)) return e.openid
    },
    getOpenid: function (e) {
      if (!sa.para.appid) return e(),
        !1;
      var t = this.getWXStorage();
      t ? e(t) : this.getRequest(e)
    }
  },
  sa.initial = function () {
    this._.info.getSystem(),
      this.store.init()
  },
  sa.init = function (e) {
    if (!0 === this.hasInit) return !1;
    this.hasInit = !0,
      sa.setPara(e),
      sa.para.batch_send && sa.sendStrategy.batchInterval(),
      sa.initialState.storeIsComplete = !0,
      sa.initialState.checkIsComplete()
  },
  sa.getPresetProperties = function () {
    if (_.info && _.info.properties && _.info.properties.$lib) {
      var e = {};
      _.each(_.info.currentProps,
        function (t, r) {
          0 === r.indexOf("$") && (e[r] = t)
        });
      var t = _.extend(e, {
        $url_path: _.getCurrentPath()
      },
        _.info.properties, sa.store.getProps());
      return delete t.$lib,
        t
    }
    return {}
  },
  _.autoExeQueue = function () {
    return {
      items: [],
      enqueue: function (e) {
        this.items.push(e),
          this.start()
      },
      dequeue: function () {
        return this.items.shift()
      },
      getCurrentItem: function () {
        return this.items[0]
      },
      isRun: !1,
      start: function () {
        this.items.length > 0 && !this.isRun && (this.isRun = !0, this.getCurrentItem().start())
      },
      close: function () {
        this.dequeue(),
          this.isRun = !1,
          this.start()
      }
    }
  },
  sa.requestQueue = function (e) {
    this.url = e.url
  },
  sa.requestQueue.prototype.isEnd = function () {
    this.received || (this.received = !0, this.close())
  },
  sa.requestQueue.prototype.start = function () {
    var e = this;
    setTimeout(function () {
      e.isEnd()
    },
      sa.para.send_timeout),
      _.wxrequest({
        url: this.url,
        method: "GET",
        complete: function () {
          e.isEnd()
        }
      })
  },
  sa.dataQueue = _.autoExeQueue(),
  sa.sendStrategy = {
    dataHasSend: !0,
    dataHasChange: !1,
    onAppHide: function () {
      sa.para.batch_send && this.batchSend()
    },
    send: function (e) {
      if (sa.para.batch_send) {
        if (this.dataHasChange = !0, sa.store.mem.getLength() >= 300) return logger.info("\u6570\u636e\u91cf\u5b58\u50a8\u8fc7\u5927\uff0c\u6709\u5f02\u5e38"),
          !1;
        sa.store.mem.add(e),
          sa.store.mem.getLength() >= sa.para.batch_send.max_length && this.batchSend()
      } else this.queueSend(e)
    },
    queueSend: function (e) {
      e = JSON.stringify(e),
        logger.info("Send url " + sa.para.server_url + ", event " + e);
      //e = -1 !== sa.para.server_url.indexOf("?") ? sa.para.server_url + "&data=" + encodeURIComponent(_.base64Encode(e)) : sa.para.server_url + "?data=" + encodeURIComponent(_.base64Encode(e));
      e = -1 !== sa.para.server_url.indexOf("?") ? sa.para.server_url + "&data=" + e : sa.para.server_url + "?data=" + e;
      var t = new sa.requestQueue({
        url: e
      });
      t.close = function () {
        sa.dataQueue.close()
      },
        sa.dataQueue.enqueue(t)
    },
    wxrequest: function (e) {
      if (_.isArray(e.data) && e.data.length > 0) {
        var t = Date.now();
        e.data.forEach(function (e) {
          e._flush_time = t
        }),
          e.data = JSON.stringify(e.data),
          logger.info("Send url @wxrequest " + sa.para.server_url + ", event " + e.data);
        _.wxrequest({
          url: sa.para.server_url,
          method: "POST",
          dataType: "text",
          data: "data_list=" + encodeURIComponent(_.base64Encode(e.data)),
          success: function () {
            e.success(e.len)
          }
        })
      } else e.success(e.len)
    },
    batchSend: function () {
      if (this.dataHasSend) {
        var e = sa.store.mem.mdata,
          t = e.length;
        t > 0 && (this.dataHasSend = !1, this.wxrequest({
          data: e,
          len: t,
          success: this.batchRemove.bind(this)
        }))
      }
    },
    batchRemove: function (e) {
      sa.store.mem.clear(e),
        this.dataHasSend = !0,
        this.dataHasChange = !0,
        this.batchWrite()
    },
    is_first_batch_write: !0,
    batchWrite: function () {
      var e = this;
      this.dataHasChange && (this.is_first_batch_write && (this.is_first_batch_write = !1, setTimeout(function () {
        e.batchSend()
      },
        1e3)), this.dataHasChange = !1, sa._.setStorageSync("sensors_mp_prepare_data", sa.store.mem.mdata))
    },
    batchInterval: function () {
      var e = this; !
        function t() {
          setTimeout(function () {
            e.batchWrite(),
              t()
          },
            1e3)
        }(),
        function t() {
          setTimeout(function () {
            e.batchSend(),
              t()
          },
            sa.para.batch_send.send_timeout)
        }()
    }
  },
  sa.setOpenid = function (e, t) {
    sa.store.set("openid", e),
      t ? sa.store.set("distinct_id", e) : sa.identify(e, !0)
  },
  sa.initWithOpenid = function (e, t) {
    (e = e || {}).appid && (sa.para.appid = e.appid),
      sa.openid.getOpenid(function (r) {
        r && sa.setOpenid(r, e.isCoverLogin),
          t && _.isFunction(t) && t(r),
          sa.init(e)
      })
  },
  // 这段代码会覆盖掉已经定义的函数，但是用处何在？
  // _.each(["setProfile", "setOnceProfile", "sendEvent", "register", "clearAllRegister", "quick", "incrementProfile", "appendProfile"],
  //   function (e) {
  //     var t = sa[e];
  //     console.log(e)
  //     console.log('in')
  //     sa[e] = function () {
  //       sa.initialState.isComplete ? t.apply(sa, arguments) : sa.initialState.queue.push([e, arguments])
  //     };
  //     console.log(sa[e])
  //   }),
  _.setQuery = function (e) {
    if (e && _.isObject(e) && !_.isEmptyObject(e)) {
      var t = [];
      return _.each(e,
        function (e, r) {
          "q" === r && _.isString(e) && 0 === e.indexOf("http") || "scene" === r || t.push(r + "=" + e)
        }),
        t.join("&")
    }
    return ""
  },

  sa.autoTrackCustom = {
    trackCustom: function (e, t, r) {
      var a = sa.para.autoTrack[e],
        s = "";
      sa.para.autoTrack && a && ("function" == typeof a ? (s = a(), _.isObject(s) && _.extend(t, s)) : _.isObject(a) && (_.extend(t, a), sa.para.autoTrack[e] = !0), sa.sendEvent(r, t))
    },
    appLaunch: function (e, t) {
      logger.info("appLaunch triggered");
      "object" != typeof this || this.trackCustom || (this[sa.para.name] = sa);
      var r = {};
      e && e.path && (r.$url_path = _.getPath(e.path)),
        _.setShareInfo(e, r);
      var a = _.setUtm(e, r);
      is_first_launch ? (r.$is_first_time = !0, _.isEmptyObject(a.pre1) || sa.setOnceProfile(a.pre1)) : r.$is_first_time = !1,
        _.isEmptyObject(a.pre2) || sa.registerApp(a.pre2),
        e.scene = e.scene || "\u672a\u53d6\u5230\u503c",
        r.$scene = _.getMPScene(e.scene),
        sa.registerApp({
          $latest_scene: r.$scene
        }),
        r.$url_query = _.setQuery(e.query),
        t ? (r = _.extend(r, t), sa.sendEvent("$MPLaunch", r)) : sa.para.autoTrack && sa.para.autoTrack.appLaunch && sa.autoTrackCustom.trackCustom("appLaunch", r, "$MPLaunch")
    },
    appShow: function (e, t) {
      logger.info("appShow triggered");
      var r = {};
      mpshow_time = (new Date).getTime(),
        e && e.path && (r.$url_path = _.getPath(e.path)),
        _.setShareInfo(e, r);
      var a = _.setUtm(e, r);
      _.isEmptyObject(a.pre2) || sa.registerApp(a.pre2),
        e.scene = e.scene || "\u672a\u53d6\u5230\u503c",
        r.$scene = _.getMPScene(e.scene),
        sa.registerApp({
          $latest_scene: r.$scene
        }),
        r.$url_query = _.setQuery(e.query),
        t ? (r = _.extend(r, t), sa.sendEvent("$MPShow", r)) : sa.para.autoTrack && sa.para.autoTrack.appShow && sa.autoTrackCustom.trackCustom("appShow", r, "$MPShow")
    },
    appHide: function (e) {
      logger.info("appHide triggered");
      var t = (new Date).getTime(),
        r = {};
      r.$url_path = _.getCurrentPath(),
        mpshow_time && t - mpshow_time > 0 && (t - mpshow_time) / 36e5 < 24 && (r.event_duration = (t - mpshow_time) / 1e3),
        e ? (r = _.extend(r, e), sa.sendEvent("$MPHide", r)) : sa.para.autoTrack && sa.para.autoTrack.appHide && sa.autoTrackCustom.trackCustom("appHide", r, "$MPHide"),
        sa.sendStrategy.onAppHide()
    },
    pageLoad: function (e) {
      console.log("页面载入啦——————————————————————————————————————————————————————————")
      logger.info("pageLoad triggered");
      e && _.isObject(e) && (this.sensors_mp_url_query = _.setQuery(e))
    },
    pageShow: function (e) {
      logger.info("pageShow triggered");
      var t = {},
        r = _.getCurrentPath();
      t.$referrer = sa_referrer,
        t.$url_path = r,
        sa.status.last_referrer = sa_referrer,
        this.sensors_mp_url_query && (t.$url_query = this.sensors_mp_url_query),
        e ? (t = _.extend(t, e), sa.sendEvent("$MPViewScreen", t)) : sa.para.onshow ? sa.para.onshow(sa, r, this) : sa.para.autoTrack && sa.para.autoTrack.pageShow && sa.autoTrackCustom.trackCustom("pageShow", t, "$MPViewScreen"),
        sa_referrer = r,
        sa.status.referrer = r
    },
    pageShare: function (e, t) {
      logger.info("pageShare triggered");
      var r = e.onShareAppMessage;
      e.onShareAppMessage = function () {
        var e = r.apply(this, arguments);
        return sa.para.autoTrack && sa.para.autoTrack.pageShare && sa.autoTrackCustom.trackCustom("pageShare", {
          $url_path: _.getCurrentPath(),
          $share_depth: _.getShareDepth()
        },
          "$MPShare"),
          sa.para.allow_amend_share_path && ("object" != typeof e && ((e = {}).path = _.getCurrentUrl(this)), "object" != typeof e || void 0 !== e.path && "" !== e.path || (e.path = _.getCurrentUrl(this)), "object" == typeof e && "string" == typeof e.path && (- 1 === e.path.indexOf("?") ? e.path = e.path + "?" : "&" !== e.path.slice(- 1) && (e.path = e.path + "&")), e.path = e.path + "sampshare=" + encodeURIComponent(_.getShareInfo())),
          e
      }
    }
  },
  sa.quick = function () {
    var e = arguments[0],
      t = arguments[1],
      r = arguments[2],
      a = _.isObject(r) ? r : {};
    if ("getAnonymousID" === e) {
      if (!_.isEmptyObject(sa.store._state)) return sa.store._state.first_id ? sa.store._state.first_id : sa.store._state.distinct_id;
      logger.info("\u8bf7\u5148\u521d\u59cb\u5316SDK")
    } else "appLaunch" === e || "appShow" === e ? t ? sa.autoTrackCustom[e](t, a) : logger.info("Please check!") : "appHide" === e && (a = _.isObject(t) ? t : {},
      sa.autoTrackCustom[e](a))
  };
var oldApp = App;
App = function (e) {
  mp_proxy(e, "onLaunch", "appLaunch"),
    mp_proxy(e, "onShow", "appShow"),
    mp_proxy(e, "onHide", "appHide"),
    oldApp.apply(this, arguments)
};
var oldPage = Page;
Page = function (e) {
  mp_proxy(e, "onLoad", "pageLoad"),
    mp_proxy(e, "onShow", "pageShow"),
    "function" == typeof e.onShareAppMessage && sa.autoTrackCustom.pageShare(e),
    oldPage.apply(this, arguments)
},
  sa.initial()
module.exports = sa;
