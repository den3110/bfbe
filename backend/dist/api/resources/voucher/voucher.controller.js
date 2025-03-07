"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../../../models");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var _require = require("sequelize"),
  Op = _require.Op,
  Sequelize = _require.Sequelize;
var generateVoucher = function generateVoucher() {
  var min = 2;
  var max = 20;
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  var voucherValue = randomNumber * 5000;
  var expireDate = new Date();
  // Thêm 30 ngày vào ngày hiện tại để tạo expire date
  expireDate.setDate(expireDate.getDate() + 30);
  var code = generateCode();
  return {
    discount: voucherValue,
    expire: expireDate.toISOString(),
    code: code
  };
};
function generateCode() {
  // Tạo một mã code ngẫu nhiên, ví dụ: ABCD1234
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  var code = '';
  for (var i = 0; i < 8; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}
var _default = exports["default"] = {
  getAllVoucher: function getAllVoucher(req, res) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var voucherList;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models.db.voucher.findAll({
              order: [['createdAt', 'DESC']]
            });
          case 2:
            voucherList = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              ok: true,
              data: voucherList
            }));
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  createVoucher: function createVoucher(req, res) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _models.db.voucher.create(_objectSpread({}, req.body));
          case 2:
            return _context2.abrupt("return", res.status(200).json({
              ok: true
            }));
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  deleteVoucher: function deleteVoucher(req, res) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var voucherId;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            voucherId = req.body.voucherId;
            _context3.next = 3;
            return _models.db.voucher.destroy({
              where: {
                id: voucherId
              }
            });
          case 3:
            return _context3.abrupt("return", res.status(200).json({
              ok: true
            }));
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  detailVoucher: function detailVoucher(req, res) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var voucherId, data;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            voucherId = req.query.voucherId;
            _context4.next = 3;
            return _models.db.voucher.findOne({
              where: {
                id: voucherId
              }
            });
          case 3:
            data = _context4.sent;
            return _context4.abrupt("return", res.status(200).json({
              ok: true,
              data: data
            }));
          case 5:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  applyVoucher: function applyVoucher(req, res) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var uid, code, data, data1;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            uid = req.user.uid;
            code = req.body.code;
            _context5.next = 4;
            return _models.db.voucher.findOne({
              where: {
                code: code
              }
            });
          case 4:
            data = _context5.sent;
            if (!data) {
              _context5.next = 14;
              break;
            }
            _context5.next = 8;
            return _models.db.vouchercustomer.findOne({
              where: {
                voucherId: data.id,
                customerId: uid
              }
            });
          case 8:
            data1 = _context5.sent;
            if (!(data1.is_use == 1)) {
              _context5.next = 11;
              break;
            }
            return _context5.abrupt("return", res.status(200).json({
              ok: false,
              used: true
            }));
          case 11:
            return _context5.abrupt("return", res.status(200).json({
              ok: true,
              data: {
                id: data.id
              }
            }));
          case 14:
            return _context5.abrupt("return", res.status(200).json({
              ok: false,
              data: data
            }));
          case 15:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  },
  createSchedule: function createSchedule(req, res) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var _req$body, date_start, date_end, amount_voucher, vouchers, i, voucher;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _req$body = req.body, date_start = _req$body.date_start, date_end = _req$body.date_end, amount_voucher = _req$body.amount_voucher;
            vouchers = [];
            for (i = 0; i < parseInt(amount_voucher); i++) {
              voucher = generateVoucher();
              vouchers.push(voucher);
            }
            _models.db.voucher.bulkCreate(vouchers);
            _models.db.voucherschedule.create({
              date_start: date_start,
              date_end: date_end,
              amount_voucher: amount_voucher
            });
            return _context6.abrupt("return", res.status(200).json({
              ok: true
            }));
          case 6:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }))();
  },
  getSchedule: function getSchedule(req, res) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var data;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _models.db.voucherschedule.findOne();
          case 2:
            data = _context7.sent;
            return _context7.abrupt("return", res.status(200).json({
              ok: true,
              data: data
            }));
          case 4:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }))();
  },
  getVoucherHuting: function getVoucherHuting(req, res) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var data1, data;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _models.db.voucherschedule.findOne();
          case 2:
            data1 = _context8.sent;
            _context8.next = 5;
            return _models.db.voucher.findAll({
              order: Sequelize.literal('RAND()'),
              limit: (data1 === null || data1 === void 0 ? void 0 : data1.amount_voucher) || 0
            });
          case 5:
            data = _context8.sent;
            return _context8.abrupt("return", res.status(200).json({
              ok: true,
              data: data
            }));
          case 7:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }))();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwicmVxdWlyZSIsIm93bktleXMiLCJlIiwiciIsInQiLCJPYmplY3QiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiX3JlcXVpcmUiLCJPcCIsIlNlcXVlbGl6ZSIsImdlbmVyYXRlVm91Y2hlciIsIm1pbiIsIm1heCIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInZvdWNoZXJWYWx1ZSIsImV4cGlyZURhdGUiLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJjb2RlIiwiZ2VuZXJhdGVDb2RlIiwiZGlzY291bnQiLCJleHBpcmUiLCJ0b0lTT1N0cmluZyIsImNoYXJhY3RlcnMiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJnZXRBbGxWb3VjaGVyIiwicmVxIiwicmVzIiwiX2FzeW5jVG9HZW5lcmF0b3IyIiwiX2NhbGxlZSIsInZvdWNoZXJMaXN0IiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImRiIiwidm91Y2hlciIsImZpbmRBbGwiLCJvcmRlciIsInN0YXR1cyIsImpzb24iLCJvayIsImRhdGEiLCJjcmVhdGVWb3VjaGVyIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJib2R5IiwiZGVsZXRlVm91Y2hlciIsIl9jYWxsZWUzIiwidm91Y2hlcklkIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZGVzdHJveSIsIndoZXJlIiwiaWQiLCJkZXRhaWxWb3VjaGVyIiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJxdWVyeSIsImZpbmRPbmUiLCJhcHBseVZvdWNoZXIiLCJfY2FsbGVlNSIsInVpZCIsImRhdGExIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwidXNlciIsInZvdWNoZXJjdXN0b21lciIsImN1c3RvbWVySWQiLCJpc191c2UiLCJ1c2VkIiwiY3JlYXRlU2NoZWR1bGUiLCJfY2FsbGVlNiIsIl9yZXEkYm9keSIsImRhdGVfc3RhcnQiLCJkYXRlX2VuZCIsImFtb3VudF92b3VjaGVyIiwidm91Y2hlcnMiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJwYXJzZUludCIsImJ1bGtDcmVhdGUiLCJ2b3VjaGVyc2NoZWR1bGUiLCJnZXRTY2hlZHVsZSIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiZ2V0Vm91Y2hlckh1dGluZyIsIl9jYWxsZWU4IiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwibGl0ZXJhbCIsImxpbWl0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS9yZXNvdXJjZXMvdm91Y2hlci92b3VjaGVyLmNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCJcclxuY29uc3QgeyBPcCwgU2VxdWVsaXplIH0gPSByZXF1aXJlKFwic2VxdWVsaXplXCIpO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVWb3VjaGVyID0oKT0+IHtcclxuICAgIGNvbnN0IG1pbiA9IDI7XHJcbiAgICBjb25zdCBtYXggPSAyMDtcclxuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgICBjb25zdCB2b3VjaGVyVmFsdWUgPSByYW5kb21OdW1iZXIgKiA1MDAwO1xyXG5cclxuICAgIGNvbnN0IGV4cGlyZURhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8gVGjDqm0gMzAgbmfDoHkgdsOgbyBuZ8OgeSBoaeG7h24gdOG6oWkgxJHhu4MgdOG6oW8gZXhwaXJlIGRhdGVcclxuICAgIGV4cGlyZURhdGUuc2V0RGF0ZShleHBpcmVEYXRlLmdldERhdGUoKSArIDMwKTtcclxuXHJcbiAgICBjb25zdCBjb2RlID0gZ2VuZXJhdGVDb2RlKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGlzY291bnQ6IHZvdWNoZXJWYWx1ZSxcclxuICAgICAgZXhwaXJlOiBleHBpcmVEYXRlLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIGNvZGU6IGNvZGVcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ29kZSgpIHtcclxuICAgIC8vIFThuqFvIG3hu5l0IG3DoyBjb2RlIG5n4bqrdSBuaGnDqm4sIHbDrSBk4bulOiBBQkNEMTIzNFxyXG4gICAgY29uc3QgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjEyMzQ1Njc4OTAnO1xyXG4gICAgbGV0IGNvZGUgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgIGNvZGUgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVycy5sZW5ndGgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb2RlO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGFzeW5jIGdldEFsbFZvdWNoZXIocmVxLCByZXMpIHtcclxuICAgICAgICBjb25zdCB2b3VjaGVyTGlzdD0gYXdhaXQgZGIudm91Y2hlci5maW5kQWxsKHtcclxuICAgICAgICAgICAgb3JkZXI6IFtbJ2NyZWF0ZWRBdCcsICdERVNDJ11dXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe29rOiB0cnVlLCBkYXRhOiB2b3VjaGVyTGlzdH0pXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgY3JlYXRlVm91Y2hlcihyZXEsIHJlcykge1xyXG4gICAgICAgIGF3YWl0IGRiLnZvdWNoZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgLi4ucmVxLmJvZHlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7b2s6IHRydWV9KVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGRlbGV0ZVZvdWNoZXIocmVxLCByZXMpIHtcclxuICAgICAgICBjb25zdCB7dm91Y2hlcklkIH09IHJlcS5ib2R5XHJcbiAgICAgICAgYXdhaXQgZGIudm91Y2hlci5kZXN0cm95KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGlkOiB2b3VjaGVySWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7b2s6IHRydWV9KVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGRldGFpbFZvdWNoZXIocmVxLCByZXMpIHtcclxuICAgICAgICBjb25zdCB7dm91Y2hlcklkIH09IHJlcS5xdWVyeVxyXG4gICAgICAgIGNvbnN0IGRhdGE9IGF3YWl0IGRiLnZvdWNoZXIuZmluZE9uZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdm91Y2hlcklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7b2s6IHRydWUsIGRhdGF9KVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGFwcGx5Vm91Y2hlcihyZXEsIHJlcykge1xyXG4gICAgICAgIGNvbnN0IHt1aWQgfT0gcmVxLnVzZXJcclxuICAgICAgICBjb25zdCB7Y29kZSB9PSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IGRhdGE9IGF3YWl0IGRiLnZvdWNoZXIuZmluZE9uZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBjb2RlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YTE9IGF3YWl0IGRiLnZvdWNoZXJjdXN0b21lci5maW5kT25lKHt3aGVyZToge3ZvdWNoZXJJZDogZGF0YS5pZCwgY3VzdG9tZXJJZDogdWlkfX0pXHJcbiAgICAgICAgICAgIGlmKGRhdGExLmlzX3VzZT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7b2s6IGZhbHNlLCB1c2VkOiB0cnVlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe29rOiB0cnVlLCBkYXRhOiB7aWQ6IGRhdGEuaWR9fSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7b2s6IGZhbHNlLCBkYXRhfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgY3JlYXRlU2NoZWR1bGUocmVxLCByZXMpIHtcclxuICAgICAgICBjb25zdCB7ZGF0ZV9zdGFydCwgZGF0ZV9lbmQsIGFtb3VudF92b3VjaGVyIH09IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3Qgdm91Y2hlcnMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnNlSW50KGFtb3VudF92b3VjaGVyKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZvdWNoZXIgPSBnZW5lcmF0ZVZvdWNoZXIoKTtcclxuICAgICAgICAgICAgdm91Y2hlcnMucHVzaCh2b3VjaGVyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBkYi52b3VjaGVyLmJ1bGtDcmVhdGUodm91Y2hlcnMpXHJcbiAgICAgICAgZGIudm91Y2hlcnNjaGVkdWxlLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGVfc3RhcnQsIGRhdGVfZW5kLCBhbW91bnRfdm91Y2hlclxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtvazogdHJ1ZX0pXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZ2V0U2NoZWR1bGUocmVxLCByZXMpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBkYXRhPSBhd2FpdCBkYi52b3VjaGVyc2NoZWR1bGUuZmluZE9uZSgpXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtvazogdHJ1ZSwgZGF0YX0pXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZ2V0Vm91Y2hlckh1dGluZyhyZXEsIHJlcykge1xyXG4gICAgICAgIGNvbnN0IGRhdGExPSBhd2FpdCBkYi52b3VjaGVyc2NoZWR1bGUuZmluZE9uZSgpXHJcbiAgICAgICAgY29uc3QgZGF0YT0gYXdhaXQgZGIudm91Y2hlci5maW5kQWxsKHtcclxuICAgICAgICAgICAgb3JkZXI6IFNlcXVlbGl6ZS5saXRlcmFsKCdSQU5EKCknKSxcclxuICAgICAgICAgICAgbGltaXQ6IGRhdGExPy5hbW91bnRfdm91Y2hlciB8fCAwXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe29rOiB0cnVlLCBkYXRhfSlcclxuICAgIH1cclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtBQUFvQyxTQUFBQyxRQUFBQyxDQUFBLEVBQUFDLENBQUEsUUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLElBQUEsQ0FBQUosQ0FBQSxPQUFBRyxNQUFBLENBQUFFLHFCQUFBLFFBQUFDLENBQUEsR0FBQUgsTUFBQSxDQUFBRSxxQkFBQSxDQUFBTCxDQUFBLEdBQUFDLENBQUEsS0FBQUssQ0FBQSxHQUFBQSxDQUFBLENB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