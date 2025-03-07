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
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _mailer = _interopRequireDefault(require("../../../mailer"));
var _config = _interopRequireDefault(require("../../../config"));
var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));
var _speakeasy = _interopRequireDefault(require("speakeasy"));
var _functions = require("./../../../functions");
var _sequelize = require("sequelize");
var _md = _interopRequireDefault(require("md5"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var JWTSign = function JWTSign(user, date) {
  return _jsonwebtoken["default"].sign({
    // iss: config.app.name,
    sub: user.id,
    iam: user.type,
    iat: date.getTime(),
    exp: new Date().setMinutes(date.getMinutes() + 30)
  }, process.env.JWT_SECRET);
};
function generateOtp() {
  var token = _speakeasy["default"].totp({
    secret: process.env.OTP_KEY,
    encoding: 'base32',
    step: 30 - Math.floor(new Date().getTime() / 1000.0 % 30)
  });
  return token;
}
function verifyOtp(token) {
  var expiry = _speakeasy["default"].totp.verify({
    secret: process.env.OTP_KEY,
    encoding: 'base32',
    token: token,
    step: 30 - Math.floor(new Date().getTime() / 1000.0 % 30),
    window: 0
  });
  return expiry;
}
var _default = exports["default"] = {
  addUser: function addUser(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _req$body, firstName, lastName, phone, email, address, password, passwordHash;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, phone = _req$body.phone, email = _req$body.email, address = _req$body.address, password = _req$body.password;
            passwordHash = _bcryptNodejs["default"].hashSync(password); // var token = generateOtp();
            // var otp = verifyOtp(token);
            _models.db.customer.findOne({
              where: {
                email: email
              },
              paranoid: false
            }).then(function (find) {
              if (find) {
                return res.status(409).json("Email is already in use");
              }
              _models.db.customer.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                address: address,
                password: passwordHash
              });
              return res.status(200).json({
                "success": true
              });
            })["catch"](function (err) {
              console.log(err);
              next(err);
            });
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  findUser: function findUser(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _models.db.customer.findOne({
              where: {
                email: req.query.email
              },
              paranoid: false,
              include: [{
                model: _models.db.Address
              }]
            }).then(function (user) {
              if (user) {
                return res.status(200).json({
                  success: true,
                  data: user
                });
              } else res.status(500).json({
                'success': false
              });
            })["catch"](function (err) {
              console.log(err);
              next(err);
            });
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  login: function login(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _req$body2, email, password, passwordHash, findUser, token;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password; // var date = new Date();
            passwordHash = (0, _md["default"])(password);
            _context3.next = 4;
            return _models.db.customer.findOne({
              where: {
                email: email,
                password: passwordHash
              }
            });
          case 4:
            findUser = _context3.sent;
            console.log("findUser", findUser);
            if (!findUser) {
              _context3.next = 12;
              break;
            }
            token = _jsonwebtoken["default"].sign({
              uid: findUser.dataValues.id,
              id: findUser.dataValues.id
            }, process.env.JWT_SECRET);
            console.log(findUser.dataValues.id);
            return _context3.abrupt("return", res.status(200).json({
              success: true,
              token: token,
              findUser: findUser
            }));
          case 12:
            return _context3.abrupt("return", res.status(200).json({
              success: false
            }));
          case 13:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  rootUserCheck: function rootUserCheck(req, res) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if ((0, _functions.validateEmail)(req.body.email)) {
              _models.db.user.findOne({
                where: {
                  email: req.body.email
                }
              }).then(function (user) {
                if (user) return res.status(200).json({
                  success: true,
                  redirect: false,
                  email: req.body.email
                });
                return res.status(401).json({
                  success: false,
                  redirect: false,
                  msg: "Jankpur Grocerry account with that sign-in information does not exist. Try again or create a new account."
                });
              });
            }
          case 1:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  sendReset: function sendReset(req, res) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var email;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            email = req.body.email;
            _mailer["default"].sendResetPassword(email).then(function (r) {
              return res.status(200).json({
                success: true
              });
            })["catch"](function (err) {
              console.log(err);
              return res.status(500).json({
                errors: ['Error Sending Email!']
              });
            });
          case 2:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  },
  resetPassword: function resetPassword(req, res) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var _req$body3, email, verificationCode, password;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _req$body3 = req.body, email = _req$body3.email, verificationCode = _req$body3.verificationCode, password = _req$body3.password;
            _models.db.user.findOne({
              where: {
                email: email,
                verf_key: verificationCode
              }
            }).then(function (result) {
              if (result) {
                var hash = _bcryptNodejs["default"].hashSync(password);
                _models.db.user.update({
                  password: hash,
                  verf_key: null,
                  attempt: 0,
                  isVerify: 1
                }, {
                  where: {
                    email: email
                  }
                });
                return res.status(200).json({
                  success: true
                });
              } else {
                return res.status(500).json({
                  errors: ['Invalid verification code!']
                });
              }
            })["catch"](function (err) {
              console.log(err);
              return res.status(500).json({
                errors: ['Error Updating Password!']
              });
            });
          case 2:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }))();
  },
  getAllCustomer: function getAllCustomer(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _models.db.customer.findAll().then(function (user) {
              if (user) {
                return res.status(200).json({
                  success: true,
                  data: user
                });
              } else res.status(500).json({
                'success': false
              });
            })["catch"](function (err) {
              console.log(err);
              next(err);
            });
          case 1:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }))();
  },
  deleteCustomer: function deleteCustomer(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _models.db.customer.findOne({
              where: {
                id: parseInt(req.query.id)
              }
            }).then(function (customer) {
              if (customer) {
                return _models.db.customer.destroy({
                  where: {
                    id: customer.id
                  }
                });
              }
              throw new RequestError('Customer is not found');
            }).then(function (re) {
              return res.status(200).json({
                'msg': 'success',
                'status': "deleted Customer Seccessfully"
              });
            })["catch"](function (err) {
              next(err);
            });
            _context8.next = 7;
            break;
          case 4:
            _context8.prev = 4;
            _context8.t0 = _context8["catch"](0);
            throw new RequestError('Error');
          case 7:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 4]]);
    }))();
  },
  //Api customer update 
  getCustomerUpdate: function getCustomerUpdate(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var _req$body$data, id, firstName, lastName, phone, gender;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _req$body$data = req.body.data, id = _req$body$data.id, firstName = _req$body$data.firstName, lastName = _req$body$data.lastName, phone = _req$body$data.phone, gender = _req$body$data.gender;
            _models.db.customer.findOne({
              where: {
                id: id
              }
            }).then(function (customer) {
              if (customer) {
                return _models.db.customer.update({
                  firstName: firstName,
                  lastName: lastName,
                  phone: phone,
                  gender: gender
                }, {
                  where: {
                    id: customer.id
                  }
                });
              }
              throw new RequestError('Customer is not found');
            }).then(function (re) {
              return res.status(200).json({
                'msg': 'success',
                'status': "deleted Customer Seccessfully"
              });
            })["catch"](function (err) {
              next(err);
            });
            _context9.next = 8;
            break;
          case 5:
            _context9.prev = 5;
            _context9.t0 = _context9["catch"](0);
            throw new RequestError('Error');
          case 8:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 5]]);
    }))();
  },
  getVoucherCustomer: function getVoucherCustomer(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var id;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            console.log(req.user);
            id = req.body.id;
            _models.db.vouchercustomer.findAll({
              where: {
                customerId: id
              }
            }).then(function (data) {
              return res.status(200).json({
                ok: true,
                data: data
              });
            })["catch"](function (e) {
              return next(e);
            });
          case 3:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }))();
  },
  getVoucherCustomer2: function getVoucherCustomer2(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var uid, email, data;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            console.log(req.user);
            uid = req.user.uid;
            email = req.query.email;
            _context11.next = 5;
            return _models.db.sequelize.query("SELECT vouchers.*, vouchercustomers.is_use AS is_use FROM vouchers INNER JOIN vouchercustomers ON vouchercustomers.voucherId = vouchers.id INNER JOIN customers ON customers.id = vouchercustomers.customerId WHERE customers.id= ".concat(uid)).then(function (data) {
              return res.status(200).json({
                ok: true,
                data: data
              });
            })["catch"](function (e) {
              return next(e);
            });
          case 5:
            data = _context11.sent;
          case 6:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }))();
  },
  postVoucherCustomer: function postVoucherCustomer(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      var uid, voucherId;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            uid = req.user.uid;
            voucherId = req.body.voucherId;
            _models.db.vouchercustomer.create(_objectSpread(_objectSpread({}, req.body), {}, {
              customerId: uid,
              is_use: false
            }));
            return _context12.abrupt("return", res.status(200).json({
              ok: true
            }));
          case 4:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }))();
  },
  putVoucherCustomer: function putVoucherCustomer(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      var uid, voucherId;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            uid = req.user.uid;
            voucherId = req.body.voucherId;
            _models.db.vouchercustomer.update({
              is_use: true
            }, {
              where: {
                voucherId: voucherId,
                customerId: uid
              }
            });
            return _context13.abrupt("return", res.status(200).json({
              ok: true
            }));
          case 4:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }))();
  },
  deleteVoucherCustomer: function deleteVoucherCustomer(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      var uid, voucherId;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            uid = req.user.uid;
            voucherId = req.body.voucherId;
            _models.db.vouchercustomer.destroy({
              where: _objectSpread(_objectSpread({}, req.body), {}, {
                customerId: uid
              })
            });
            return _context14.abrupt("return", res.status(200).json({
              ok: true
            }));
          case 4:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }))();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwicmVxdWlyZSIsIl9qc29ud2VidG9rZW4iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX21haWxlciIsIl9jb25maWciLCJfYmNyeXB0Tm9kZWpzIiwiX3NwZWFrZWFzeSIsIl9mdW5jdGlvbnMiLCJfc2VxdWVsaXplIiwiX21kIiwib3duS2V5cyIsImUiLCJyIiwidCIsIk9iamVjdCIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJvIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5MiIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJKV1RTaWduIiwidXNlciIsImRhdGUiLCJKV1QiLCJzaWduIiwic3ViIiwiaWQiLCJpYW0iLCJpYXQiLCJnZXRUaW1lIiwiZXhwIiwiRGF0ZSIsInNldE1pbnV0ZXMiLCJnZXRNaW51dGVzIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJnZW5lcmF0ZU90cCIsInRva2VuIiwic3BlYWtlYXN5IiwidG90cCIsInNlY3JldCIsIk9UUF9LRVkiLCJlbmNvZGluZyIsInN0ZXAiLCJNYXRoIiwiZmxvb3IiLCJ2ZXJpZnlPdHAiLCJleHBpcnkiLCJ2ZXJpZnkiLCJ3aW5kb3ciLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJhZGRVc2VyIiwicmVxIiwicmVzIiwiX2FzeW5jVG9HZW5lcmF0b3IyIiwiX2NhbGxlZSIsIl9yZXEkYm9keSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGhvbmUiLCJlbWFpbCIsImFkZHJlc3MiLCJwYXNzd29yZCIsInBhc3N3b3JkSGFzaCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJib2R5IiwiYmNyeXB0IiwiaGFzaFN5bmMiLCJkYiIsImN1c3RvbWVyIiwiZmluZE9uZSIsIndoZXJlIiwicGFyYW5vaWQiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJmaW5kVXNlciIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwicXVlcnkiLCJpbmNsdWRlIiwibW9kZWwiLCJBZGRyZXNzIiwic3VjY2VzcyIsImRhdGEiLCJsb2dpbiIsIl9jYWxsZWUzIiwiX3JlcSRib2R5MiIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIm1kNSIsInVpZCIsImRhdGFWYWx1ZXMiLCJyb290VXNlckNoZWNrIiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJ2YWxpZGF0ZUVtYWlsIiwicmVkaXJlY3QiLCJtc2ciLCJzZW5kUmVzZXQiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsIm1haWxlciIsInNlbmRSZXNldFBhc3N3b3JkIiwiZXJyb3JzIiwicmVzZXRQYXNzd29yZCIsIl9jYWxsZWU2IiwiX3JlcSRib2R5MyIsInZlcmlmaWNhdGlvbkNvZGUiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJ2ZXJmX2tleSIsInJlc3VsdCIsImhhc2giLCJ1cGRhdGUiLCJhdHRlbXB0IiwiaXNWZXJpZnkiLCJnZXRBbGxDdXN0b21lciIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiZmluZEFsbCIsImRlbGV0ZUN1c3RvbWVyIiwiX2NhbGxlZTgiLCJfY2FsbGVlOCQiLCJfY29udGV4dDgiLCJwYXJzZUludCIsImRlc3Ryb3kiLCJSZXF1ZXN0RXJyb3IiLCJyZSIsInQwIiwiZ2V0Q3VzdG9tZXJVcGRhdGUiLCJfY2FsbGVlOSIsIl9yZXEkYm9keSRkYXRhIiwiZ2VuZGVyIiwiX2NhbGxlZTkkIiwiX2NvbnRleHQ5IiwiZ2V0Vm91Y2hlckN1c3RvbWVyIiwiX2NhbGxlZTEwIiwiX2NhbGxlZTEwJCIsIl9jb250ZXh0MTAiLCJ2b3VjaGVyY3VzdG9tZXIiLCJjdXN0b21lcklkIiwib2siLCJnZXRWb3VjaGVyQ3VzdG9tZXIyIiwiX2NhbGxlZTExIiwiX2NhbGxlZTExJCIsIl9jb250ZXh0MTEiLCJzZXF1ZWxpemUiLCJjb25jYXQiLCJwb3N0Vm91Y2hlckN1c3RvbWVyIiwiX2NhbGxlZTEyIiwidm91Y2hlcklkIiwiX2NhbGxlZTEyJCIsIl9jb250ZXh0MTIiLCJpc191c2UiLCJwdXRWb3VjaGVyQ3VzdG9tZXIiLCJfY2FsbGVlMTMiLCJfY2FsbGVlMTMkIiwiX2NvbnRleHQxMyIsImRlbGV0ZVZvdWNoZXJDdXN0b21lciIsIl9jYWxsZWUxNCIsIl9jYWxsZWUxNCQiLCJfY29udGV4dDE0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS9yZXNvdXJjZXMvY3VzdG9tZXIvY3VzdG9tZXIuY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL21vZGVscyc7XHJcbmltcG9ydCBKV1QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IG1haWxlciBmcm9tICcuLi8uLi8uLi9tYWlsZXInO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0LW5vZGVqcyc7XHJcbmltcG9ydCBzcGVha2Vhc3kgZnJvbSAnc3BlYWtlYXN5JztcclxuaW1wb3J0IHsgdmFsaWRhdGVFbWFpbCB9IGZyb20gJy4vLi4vLi4vLi4vZnVuY3Rpb25zJ1xyXG5pbXBvcnQgeyBTZXF1ZWxpemUgfSBmcm9tICdzZXF1ZWxpemUnO1xyXG5pbXBvcnQgbWQ1IGZyb20gXCJtZDVcIlxyXG5cclxudmFyIEpXVFNpZ24gPSBmdW5jdGlvbiAodXNlciwgZGF0ZSkge1xyXG4gICAgcmV0dXJuIEpXVC5zaWduKHtcclxuICAgICAgICAvLyBpc3M6IGNvbmZpZy5hcHAubmFtZSxcclxuICAgICAgICBzdWI6IHVzZXIuaWQsXHJcbiAgICAgICAgaWFtIDogdXNlci50eXBlLFxyXG4gICAgICAgIGlhdDogZGF0ZS5nZXRUaW1lKCksXHJcbiAgICAgICAgZXhwOiBuZXcgRGF0ZSgpLnNldE1pbnV0ZXMoZGF0ZS5nZXRNaW51dGVzKCkgKyAzMClcclxuICAgIH0sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZU90cCgpIHtcclxuICAgIGxldCB0b2tlbiA9IHNwZWFrZWFzeS50b3RwKHtcclxuICAgICAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk9UUF9LRVksXHJcbiAgICAgICAgZW5jb2Rpbmc6ICdiYXNlMzInLFxyXG4gICAgICAgIHN0ZXA6ICgzMCAtIE1hdGguZmxvb3IoKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMC4wICUgMzApKSlcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRva2VuO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2ZXJpZnlPdHAodG9rZW4pIHtcclxuICAgIGxldCBleHBpcnkgPSBzcGVha2Vhc3kudG90cC52ZXJpZnkoe1xyXG4gICAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuT1RQX0tFWSxcclxuICAgICAgICBlbmNvZGluZzogJ2Jhc2UzMicsXHJcbiAgICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICAgIHN0ZXA6ICgzMCAtIE1hdGguZmxvb3IoKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMC4wICUgMzApKSksXHJcbiAgICAgICAgd2luZG93OiAwXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBleHBpcnlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGFzeW5jIGFkZFVzZXIocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICBjb25zdCB7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIHBob25lLCBlbWFpbCwgYWRkcmVzcywgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIHZhciBwYXNzd29yZEhhc2ggPSBiY3J5cHQuaGFzaFN5bmMocGFzc3dvcmQpO1xyXG4gICAgICAgIC8vIHZhciB0b2tlbiA9IGdlbmVyYXRlT3RwKCk7XHJcbiAgICAgICAgLy8gdmFyIG90cCA9IHZlcmlmeU90cCh0b2tlbik7XHJcbiAgICAgICAgZGIuY3VzdG9tZXIuZmluZE9uZSh7IHdoZXJlOiB7IGVtYWlsOiBlbWFpbCB9LCBwYXJhbm9pZDogZmFsc2UgfSlcclxuICAgICAgICAgICAgLnRoZW4oZmluZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmluZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihcIkVtYWlsIGlzIGFscmVhZHkgaW4gdXNlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIGRiLmN1c3RvbWVyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogcGhvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRIYXNoXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcInN1Y2Nlc3NcIjogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgICAgbmV4dChlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBmaW5kVXNlcihyZXEscmVzLG5leHQpe1xyXG4gICAgICAgIGRiLmN1c3RvbWVyLmZpbmRPbmUoeyBcclxuICAgICAgICAgICAgd2hlcmU6IHsgZW1haWw6IHJlcS5xdWVyeS5lbWFpbCB9LCBwYXJhbm9pZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IFt7IG1vZGVsOiBkYi5BZGRyZXNzIH1dXHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOnVzZXJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7ICdzdWNjZXNzJzogZmFsc2UgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBuZXh0KGVycik7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgbG9naW4ocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICBjb25zdCB7ZW1haWwsIHBhc3N3b3JkIH09IHJlcS5ib2R5XHJcbiAgICAgICAgLy8gdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkSGFzaD0gbWQ1KHBhc3N3b3JkKVxyXG4gICAgICAgIGNvbnN0IGZpbmRVc2VyPSBhd2FpdCBkYi5jdXN0b21lci5maW5kT25lKHt3aGVyZToge2VtYWlsLCBwYXNzd29yZDogcGFzc3dvcmRIYXNofX0pXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaW5kVXNlclwiLCBmaW5kVXNlcilcclxuICAgICAgICBpZihmaW5kVXNlcikge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbj0gSldULnNpZ24oe3VpZDogZmluZFVzZXIuZGF0YVZhbHVlcy5pZCwgaWQ6IGZpbmRVc2VyLmRhdGFWYWx1ZXMuaWR9LCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaW5kVXNlci5kYXRhVmFsdWVzLmlkKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCB0b2tlbiwgZmluZFVzZXIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIHJvb3RVc2VyQ2hlY2socmVxLCByZXMpIHtcclxuICAgICAgICBpZiAodmFsaWRhdGVFbWFpbChyZXEuYm9keS5lbWFpbCkpIHtcclxuICAgICAgICAgICAgZGIudXNlci5maW5kT25lKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogcmVxLmJvZHkuZW1haWxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2c6IFwiSmFua3B1ciBHcm9jZXJyeSBhY2NvdW50IHdpdGggdGhhdCBzaWduLWluIGluZm9ybWF0aW9uIGRvZXMgbm90IGV4aXN0LiBUcnkgYWdhaW4gb3IgY3JlYXRlIGEgbmV3IGFjY291bnQuXCJcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIHNlbmRSZXNldChyZXEsIHJlcykge1xyXG4gICAgICAgIGNvbnN0IHsgZW1haWwgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIG1haWxlci5zZW5kUmVzZXRQYXNzd29yZChlbWFpbClcclxuICAgICAgICAgICAgLnRoZW4ociA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcnM6IFsnRXJyb3IgU2VuZGluZyBFbWFpbCEnXSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIHJlc2V0UGFzc3dvcmQocmVxLCByZXMpIHtcclxuICAgICAgICBjb25zdCB7IGVtYWlsLCB2ZXJpZmljYXRpb25Db2RlLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgZGIudXNlci5maW5kT25lKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgZW1haWw6IGVtYWlsLCB2ZXJmX2tleTogdmVyaWZpY2F0aW9uQ29kZSB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IGJjcnlwdC5oYXNoU3luYyhwYXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGIudXNlci51cGRhdGUoeyBwYXNzd29yZDogaGFzaCwgdmVyZl9rZXk6IG51bGwsIGF0dGVtcHQ6IDAgLGlzVmVyaWZ5OiAxfSwgeyB3aGVyZTogeyBlbWFpbDogZW1haWwgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcnM6IFsnSW52YWxpZCB2ZXJpZmljYXRpb24gY29kZSEnXSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3JzOiBbJ0Vycm9yIFVwZGF0aW5nIFBhc3N3b3JkISddIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGFzeW5jIGdldEFsbEN1c3RvbWVyKHJlcSxyZXMsbmV4dCl7XHJcbiAgICAgICAgZGIuY3VzdG9tZXIuZmluZEFsbCgpXHJcbiAgICAgICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOnVzZXJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7ICdzdWNjZXNzJzogZmFsc2UgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBuZXh0KGVycik7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgZGVsZXRlQ3VzdG9tZXIocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkYi5jdXN0b21lci5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IHBhcnNlSW50KHJlcS5xdWVyeS5pZCkgfSB9KVxyXG4gICAgICAgICAgICAudGhlbihjdXN0b21lciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIuY3VzdG9tZXIuZGVzdHJveSh7IHdoZXJlOiB7IGlkOiBjdXN0b21lci5pZCB9IH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdDdXN0b21lciBpcyBub3QgZm91bmQnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeydtc2cnOidzdWNjZXNzJywnc3RhdHVzJzogXCJkZWxldGVkIEN1c3RvbWVyIFNlY2Nlc3NmdWxseVwiIH0pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV4dChlcnIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcignRXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vQXBpIGN1c3RvbWVyIHVwZGF0ZSBcclxuICAgIGFzeW5jIGdldEN1c3RvbWVyVXBkYXRlKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3R7IGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBwaG9uZSwgZ2VuZGVyIH09IHJlcS5ib2R5LmRhdGE7XHJcbiAgICAgICAgICAgIGRiLmN1c3RvbWVyLmZpbmRPbmUoeyB3aGVyZTogeyBpZDogaWQgfSB9KVxyXG4gICAgICAgICAgICAudGhlbihjdXN0b21lciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIuY3VzdG9tZXIudXBkYXRlKHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lLCBsYXN0TmFtZTogbGFzdE5hbWUsIHBob25lOiBwaG9uZSwgZ2VuZGVyOiBnZW5kZXJcclxuICAgICAgICAgICAgICAgICAgICAgfSx7d2hlcmU6IHtpZDogY3VzdG9tZXIuaWR9fSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoJ0N1c3RvbWVyIGlzIG5vdCBmb3VuZCcpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7J21zZyc6J3N1Y2Nlc3MnLCdzdGF0dXMnOiBcImRlbGV0ZWQgQ3VzdG9tZXIgU2VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXh0KGVycilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdFcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBnZXRWb3VjaGVyQ3VzdG9tZXIocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXEudXNlcilcclxuICAgICAgICBjb25zdCB7aWQgfT0gcmVxLmJvZHlcclxuICAgICAgICBkYi52b3VjaGVyY3VzdG9tZXIuZmluZEFsbCh7d2hlcmU6IHtjdXN0b21lcklkOiBpZH19KVxyXG4gICAgICAgIC50aGVuKGRhdGE9PiByZXMuc3RhdHVzKDIwMCkuanNvbih7b2s6IHRydWUsIGRhdGF9KSlcclxuICAgICAgICAuY2F0Y2goZT0+IG5leHQoZSkpXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZ2V0Vm91Y2hlckN1c3RvbWVyMihyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcS51c2VyKVxyXG4gICAgICAgIGNvbnN0IHt1aWQgfSA9cmVxLnVzZXJcclxuICAgICAgICBjb25zdCB7ZW1haWwgfT0gcmVxLnF1ZXJ5XHJcbiAgICAgICAgY29uc3QgZGF0YT0gYXdhaXQgZGIuc2VxdWVsaXplLnF1ZXJ5KGBTRUxFQ1Qgdm91Y2hlcnMuKiwgdm91Y2hlcmN1c3RvbWVycy5pc191c2UgQVMgaXNfdXNlIEZST00gdm91Y2hlcnMgSU5ORVIgSk9JTiB2b3VjaGVyY3VzdG9tZXJzIE9OIHZvdWNoZXJjdXN0b21lcnMudm91Y2hlcklkID0gdm91Y2hlcnMuaWQgSU5ORVIgSk9JTiBjdXN0b21lcnMgT04gY3VzdG9tZXJzLmlkID0gdm91Y2hlcmN1c3RvbWVycy5jdXN0b21lcklkIFdIRVJFIGN1c3RvbWVycy5pZD0gJHt1aWR9YClcclxuICAgICAgICAudGhlbihkYXRhPT4gcmVzLnN0YXR1cygyMDApLmpzb24oe29rOiB0cnVlLCBkYXRhfSkpXHJcbiAgICAgICAgLmNhdGNoKGU9PiBuZXh0KGUpKVxyXG4gICAgfSxcclxuICAgIGFzeW5jIHBvc3RWb3VjaGVyQ3VzdG9tZXIocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICBjb25zdCB7dWlkIH09IHJlcS51c2VyXHJcbiAgICAgICAgY29uc3Qge3ZvdWNoZXJJZCB9PSByZXEuYm9keVxyXG4gICAgICAgIGRiLnZvdWNoZXJjdXN0b21lci5jcmVhdGUoey4uLnJlcS5ib2R5LCBjdXN0b21lcklkOiB1aWQsIGlzX3VzZTogZmFsc2V9KVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7b2s6IHRydWV9KVxyXG4gICAgfSxcclxuICAgIGFzeW5jIHB1dFZvdWNoZXJDdXN0b21lcihyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIGNvbnN0IHt1aWQgfT0gcmVxLnVzZXJcclxuICAgICAgICBjb25zdCB7dm91Y2hlcklkIH09IHJlcS5ib2R5XHJcbiAgICAgICAgZGIudm91Y2hlcmN1c3RvbWVyLnVwZGF0ZSh7aXNfdXNlOiB0cnVlfSx7d2hlcmU6IHtcclxuICAgICAgICAgICAgdm91Y2hlcklkLCBjdXN0b21lcklkOiB1aWRcclxuICAgICAgICB9fSlcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe29rOiB0cnVlfSlcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGFzeW5jIGRlbGV0ZVZvdWNoZXJDdXN0b21lcihyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIGNvbnN0IHt1aWQgfT0gcmVxLnVzZXIgIFxyXG4gICAgICAgIGNvbnN0IHt2b3VjaGVySWQgfT0gcmVxLmJvZHlcclxuICAgICAgICBkYi52b3VjaGVyY3VzdG9tZXIuZGVzdHJveSh7d2hlcmU6IHtcclxuICAgICAgICAgICAgLi4ucmVxLmJvZHksIGN1c3RvbWVySWQ6IHVpZFxyXG4gICAgICAgIH19KVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7b2s6IHRydWV9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7QUFDQSxJQUFBQyxhQUFBLEdBQUFDLHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBRyxPQUFBLEdBQUFELHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBSSxPQUFBLEdBQUFGLHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBSyxhQUFBLEdBQUFILHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBTSxVQUFBLEdBQUFKLHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBTyxVQUFBLEdBQUFQLE9BQUE7QUFDQSxJQUFBUSxVQUFBLEdBQUFSLE9BQUE7QUFDQSxJQUFBUyxHQUFBLEdBQUFQLHNCQUFBLENBQUFGLE9BQUE7QUFBcUIsU0FBQVUsUUFBQUMsQ0FBQSxFQUFBQyxDQUFBLFFBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxJQUFBLENBQUFKLENBQUEsT0FBQUcsTUFBQSxDQUFBRSxxQkFBQSxRQUFBQyxDQUFBLEdBQUFILE1BQUEsQ0FBQUUscUJBQUEsQ0FBQUwsQ0FBQSxHQUFBQyxDQUFBLEtBQUFLLENBQUEsR0FBQUEsQ0FBQSxDQUFBQyxNQUFBLFdBQUFOLENBQUEsV0FBQUUsTUFBQSxDQUFBSyx3QkFBQSxDQUFBUixDQUFBLEVBQUFDLENBQUEsRUFBQVEsVUFBQSxPQUFBUCxDQUFBLENBQUFRLElBQUEsQ0FBQUMsS0FBQSxDQUFBVCxDQUFBLEVBQUFJLENBQUEsWUFBQUosQ0FBQTtBQUFBLFNBQUFVLGNBQUFaLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFZLFNBQUEsQ0FBQUMsTUFBQSxFQUFBYixDQUFBLFVBQUFDLENBQUEsV0FBQVcsU0FBQSxDQUFBWixDQUFBLElBQUFZLFNBQUEs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