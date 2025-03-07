"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../../../models");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _mailer = _interopRequireDefault(require("../../../mailer"));
var _config = _interopRequireDefault(require("../../../config"));
var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));
var _speakeasy = _interopRequireDefault(require("speakeasy"));
var _md = _interopRequireDefault(require("md5"));
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _axios = _interopRequireDefault(require("axios"));
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; } // import { validateEmail } from './../../../functions'
var JWTSign = function JWTSign(user, date) {
  return _jsonwebtoken["default"].sign({
    iss: _config["default"].app.name,
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
      var _req$body, firstName, lastName, phoneNo, email, address, password, role, verify, passwordHash, token, otp;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, phoneNo = _req$body.phoneNo, email = _req$body.email, address = _req$body.address, password = _req$body.password, role = _req$body.role, verify = _req$body.verify;
            passwordHash = (0, _md["default"])(password);
            token = generateOtp();
            otp = verifyOtp(token);
            _models.db.user.findOne({
              where: {
                email: email
              },
              paranoid: false
            }).then(function (find) {
              if (find) {
                return res.status(409).json("Email is already in use");
              }
              return _models.db.user.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNo: phoneNo,
                address: address,
                password: passwordHash,
                verify: verify,
                role: role
              });
            }).then(function (user) {
              if (user) {
                _mailer["default"].sendEmployeePassword(email, token);
                return res.status(200).json({
                  success: true,
                  key: otp,
                  msg: "New Registration added and password has been sent to " + email + " ."
                });
              } else res.status(500).json({
                'success': false
              });
            })["catch"](function (err) {
              console.log(err);
              next(err);
            });
          case 5:
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
            _models.db.user.findOne({
              attributes: ["firstName", "lastName", "email"],
              where: {
                id: req.query.user_id
              }
            }).then(function (user) {
              if (user) {
                return res.status(200).json({
                  success: true,
                  data: user,
                  ok: true
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
  getAllUserList: function getAllUserList(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _models.db.user.findAll().then(function (user) {
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
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  userUpdate: function userUpdate(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _req$body2, id, firstName, lastName, email, address, password, role, verify, passwordHash;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, id = _req$body2.id, firstName = _req$body2.firstName, lastName = _req$body2.lastName, email = _req$body2.email, address = _req$body2.address, password = _req$body2.password, role = _req$body2.role, verify = _req$body2.verify;
            passwordHash = _bcryptNodejs["default"].hashSync(password);
            _models.db.user.findOne({
              where: {
                email: email
              },
              paranoid: false
            }).then(function (user) {
              if (!user) {
                throw new RequestError('User is not found', 409);
              }
              return _models.db.user.update({
                firstName: firstName ? firstName : user.firstName,
                lastName: lastName ? lastName : user.lastName,
                password: password ? passwordHash : user.passwordHash,
                address: address ? address : user.address,
                role: role ? role : user.role,
                verify: verify ? verify : user.verify
              }, {
                where: {
                  id: id
                }
              });
            }).then(function (user) {
              if (user) {
                return res.status(200).json({
                  success: true,
                  msg: "User update successsfully"
                });
              } else res.status(500).json({
                'success': false
              });
            })["catch"](function (err) {
              console.log(err);
              next(err);
            });
          case 3:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  // async login(req, res, next) {
  //     var date = new Date();
  //     var token = JWTSign(req.user, date);
  //     res.cookie('XSRF-token',token, {
  //         expire: new Date().setMinutes(date.getMinutes() + 30),
  //         httpOnly: true, secure: config.app.secure
  //     });
  //     return res.status(200).json({ success: true ,token, role: req.user.role});
  // },
  login: function login(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _req$body3, email, password, findUser, token;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _req$body3 = req.body, email = _req$body3.email, password = _req$body3.password; // var date = new Date();
            // console.log(password)
            // console.log(bcrypt.hashSync(password))
            _context5.next = 3;
            return _models.db.user.findOne({
              where: {
                email: email,
                password: (0, _md["default"])(password)
              }
            });
          case 3:
            findUser = _context5.sent;
            if (!findUser) {
              _context5.next = 9;
              break;
            }
            token = _jsonwebtoken["default"].sign({
              uid: findUser.dataValues.id,
              id: findUser.dataValues.id
            }, process.env.JWT_SECRET);
            return _context5.abrupt("return", res.status(200).json({
              success: true,
              token: token,
              auid: findUser.dataValues.id,
              role: findUser.dataValues.role
            }));
          case 9:
            return _context5.abrupt("return", res.status(200).json({
              success: false
            }));
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  },
  deleteUserList: function deleteUserList(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _models.db.user.findOne({
              where: {
                id: req.body.id
              }
            }).then(function (data) {
              if (data) {
                return _models.db.user.destroy({
                  where: {
                    id: req.body.id
                  }
                }).then(function (r) {
                  return [r, data];
                });
              }
              throw new RequestError('User is not found', 409);
            }).then(function (re) {
              return res.status(200).json({
                'status': "deleted userlist Seccessfully"
              });
            })["catch"](function (err) {
              next(err);
            });
          case 1:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }))();
  },
  verifyMail: function verifyMail(req, res) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var _req$body4, email, password, firstName, transporter, mailOptions;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            // Nhận email từ request body
            _req$body4 = req.body, email = _req$body4.email, password = _req$body4.password, firstName = _req$body4.firstName; // Tạo một mã xác thực ngẫu nhiên
            // Cấu hình thông tin mail server (dùng Gmail làm ví dụ)
            transporter = _nodemailer["default"].createTransport({
              service: 'gmail',
              auth: {
                user: process.env.MAIL_USERNAME,
                // Thay bằng địa chỉ email của bạn
                pass: process.env.MAIL_PASSWORD // Thay bằng mật khẩu email của bạn
              }
            }); // Cấu hình nội dung email
            mailOptions = {
              from: process.env.MAIL_USERNAME,
              // Thay bằng địa chỉ email của bạn
              to: email,
              // Địa chỉ email người dùng cần xác thực
              subject: 'Email Verification',
              // Tiêu đề email
              html: "\n                    <a href=\"".concat(process.env.URL_FRONTEND, "/signup/success\" style=\"padding: 10px; border-radius: 10px; background-color: #2e89ff; color: #fff; width: 100%\">Click here to complete singup process</a>\n                ") // Nội dung email chứa mã xác thực
            }; // Gửi email
            _context7.next = 6;
            return transporter.sendMail(mailOptions);
          case 6:
            // Trả về mã xác thực để sử dụng sau này (ví dụ để kiểm tra mã khi người dùng nhập vào)
            res.json({
              success: true
            });
            _context7.next = 13;
            break;
          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](0);
            // Xử lý lỗi nếu có
            console.error('Error sending verification email:', _context7.t0);
            res.status(500).json({
              success: false,
              error: 'Error sending verification email'
            });
          case 13:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 9]]);
    }))();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwicmVxdWlyZSIsIl9qc29ud2VidG9rZW4iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX21haWxlciIsIl9jb25maWciLCJfYmNyeXB0Tm9kZWpzIiwiX3NwZWFrZWFzeSIsIl9tZCIsIl9ub2RlbWFpbGVyIiwiX2F4aW9zIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIkpXVFNpZ24iLCJ1c2VyIiwiZGF0ZSIsIkpXVCIsInNpZ24iLCJpc3MiLCJjb25maWciLCJhcHAiLCJzdWIiLCJpZCIsImlhbSIsImlhdCIsImdldFRpbWUiLCJleHAiLCJEYXRlIiwic2V0TWludXRlcyIsImdldE1pbnV0ZXMiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImdlbmVyYXRlT3RwIiwidG9rZW4iLCJzcGVha2Vhc3kiLCJ0b3RwIiwic2VjcmV0IiwiT1RQX0tFWSIsImVuY29kaW5nIiwic3RlcCIsIk1hdGgiLCJmbG9vciIsInZlcmlmeU90cCIsImV4cGlyeSIsInZlcmlmeSIsIndpbmRvdyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsImFkZFVzZXIiLCJyZXEiLCJyZXMiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfY2FsbGVlIiwiX3JlcSRib2R5IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJwaG9uZU5vIiwiZW1haWwiLCJhZGRyZXNzIiwicGFzc3dvcmQiLCJyb2xlIiwicGFzc3dvcmRIYXNoIiwib3RwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImJvZHkiLCJtZDUiLCJkYiIsImZpbmRPbmUiLCJ3aGVyZSIsInBhcmFub2lkIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJtYWlsZXIiLCJzZW5kRW1wbG95ZWVQYXNzd29yZCIsInN1Y2Nlc3MiLCJrZXkiLCJtc2ciLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZmluZFVzZXIiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImF0dHJpYnV0ZXMiLCJxdWVyeSIsInVzZXJfaWQiLCJkYXRhIiwib2siLCJnZXRBbGxVc2VyTGlzdCIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZmluZEFsbCIsInVzZXJVcGRhdGUiLCJfY2FsbGVlNCIsIl9yZXEkYm9keTIiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJiY3J5cHQiLCJoYXNoU3luYyIsIlJlcXVlc3RFcnJvciIsInVwZGF0ZSIsImxvZ2luIiwiX2NhbGxlZTUiLCJfcmVxJGJvZHkzIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwidWlkIiwiZGF0YVZhbHVlcyIsImF1aWQiLCJkZWxldGVVc2VyTGlzdCIsIl9jYWxsZWU2IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiZGVzdHJveSIsInJlIiwidmVyaWZ5TWFpbCIsIl9jYWxsZWU3IiwiX3JlcSRib2R5NCIsInRyYW5zcG9ydGVyIiwibWFpbE9wdGlvbnMiLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJub2RlbWFpbGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImF1dGgiLCJNQUlMX1VTRVJOQU1FIiwicGFzcyIsIk1BSUxfUEFTU1dPUkQiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiaHRtbCIsImNvbmNhdCIsIlVSTF9GUk9OVEVORCIsInNlbmRNYWlsIiwidDAiLCJlcnJvciJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2F1dGgvYXV0aC5jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IEpXVCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgbWFpbGVyIGZyb20gJy4uLy4uLy4uL21haWxlcic7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQtbm9kZWpzJztcclxuaW1wb3J0IHNwZWFrZWFzeSBmcm9tICdzcGVha2Vhc3knO1xyXG4vLyBpbXBvcnQgeyB2YWxpZGF0ZUVtYWlsIH0gZnJvbSAnLi8uLi8uLi8uLi9mdW5jdGlvbnMnXHJcbmltcG9ydCBtZDUgZnJvbSBcIm1kNVwiXHJcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gXCJub2RlbWFpbGVyXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG52YXIgSldUU2lnbiA9IGZ1bmN0aW9uICh1c2VyLCBkYXRlKSB7XHJcbiAgICByZXR1cm4gSldULnNpZ24oe1xyXG4gICAgICAgIGlzczogY29uZmlnLmFwcC5uYW1lLFxyXG4gICAgICAgIHN1YjogdXNlci5pZCxcclxuICAgICAgICBpYW0gOiB1c2VyLnR5cGUsXHJcbiAgICAgICAgaWF0OiBkYXRlLmdldFRpbWUoKSxcclxuICAgICAgICBleHA6IG5ldyBEYXRlKCkuc2V0TWludXRlcyhkYXRlLmdldE1pbnV0ZXMoKSArIDMwKVxyXG4gICAgfSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlT3RwKCkge1xyXG4gICAgbGV0IHRva2VuID0gc3BlYWtlYXN5LnRvdHAoe1xyXG4gICAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuT1RQX0tFWSxcclxuICAgICAgICBlbmNvZGluZzogJ2Jhc2UzMicsXHJcbiAgICAgICAgc3RlcDogKDMwIC0gTWF0aC5mbG9vcigobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwLjAgJSAzMCkpKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdG9rZW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlcmlmeU90cCh0b2tlbikge1xyXG4gICAgbGV0IGV4cGlyeSA9IHNwZWFrZWFzeS50b3RwLnZlcmlmeSh7XHJcbiAgICAgICAgc2VjcmV0OiBwcm9jZXNzLmVudi5PVFBfS0VZLFxyXG4gICAgICAgIGVuY29kaW5nOiAnYmFzZTMyJyxcclxuICAgICAgICB0b2tlbjogdG9rZW4sXHJcbiAgICAgICAgc3RlcDogKDMwIC0gTWF0aC5mbG9vcigobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwLjAgJSAzMCkpKSxcclxuICAgICAgICB3aW5kb3c6IDBcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGV4cGlyeVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgYXN5bmMgYWRkVXNlcihyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGhvbmVObywgZW1haWwsIGFkZHJlc3MsIHBhc3N3b3JkLCByb2xlLCB2ZXJpZnkgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIHZhciBwYXNzd29yZEhhc2ggPSBtZDUocGFzc3dvcmQpO1xyXG4gICAgICAgIHZhciB0b2tlbiA9IGdlbmVyYXRlT3RwKCk7XHJcbiAgICAgICAgdmFyIG90cCA9IHZlcmlmeU90cCh0b2tlbik7XHJcbiAgICAgICAgZGIudXNlci5maW5kT25lKHsgd2hlcmU6IHsgZW1haWw6IGVtYWlsIH0sIHBhcmFub2lkOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICAudGhlbihmaW5kID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmaW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKFwiRW1haWwgaXMgYWxyZWFkeSBpbiB1c2VcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGIudXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBsYXN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVObzogcGhvbmVObyxcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZEhhc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgdmVyaWZ5OiB2ZXJpZnksXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogcm9sZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYWlsZXIuc2VuZEVtcGxveWVlUGFzc3dvcmQoZW1haWwsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBrZXk6IG90cCwgbXNnOiBcIk5ldyBSZWdpc3RyYXRpb24gYWRkZWQgYW5kIHBhc3N3b3JkIGhhcyBiZWVuIHNlbnQgdG8gXCIgKyBlbWFpbCArIFwiIC5cIiB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7ICdzdWNjZXNzJzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgICAgbmV4dChlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBmaW5kVXNlcihyZXEscmVzLG5leHQpe1xyXG4gICAgICAgIGRiLnVzZXIuZmluZE9uZSh7IGF0dHJpYnV0ZXM6W1wiZmlyc3ROYW1lXCIsXCJsYXN0TmFtZVwiLCBcImVtYWlsXCJdLCB3aGVyZTogeyBpZDogcmVxLnF1ZXJ5LnVzZXJfaWQgfX0pXHJcbiAgICAgICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOnVzZXIsIG9rOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyAnc3VjY2Vzcyc6IGZhbHNlIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgbmV4dChlcnIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgICBhc3luYyBnZXRBbGxVc2VyTGlzdChyZXEscmVzLG5leHQpe1xyXG4gICAgICAgIGRiLnVzZXIuZmluZEFsbCgpXHJcbiAgICAgICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOnVzZXJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7ICdzdWNjZXNzJzogZmFsc2UgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBuZXh0KGVycik7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgIGFzeW5jIHVzZXJVcGRhdGUocmVxLHJlcyxuZXh0KXtcclxuICAgICAgICBjb25zdCB7IGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgYWRkcmVzcywgcGFzc3dvcmQsIHJvbGUsIHZlcmlmeSB9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgdmFyIHBhc3N3b3JkSGFzaCA9IGJjcnlwdC5oYXNoU3luYyhwYXNzd29yZCk7XHJcbiAgICAgICAgZGIudXNlci5maW5kT25lKHsgd2hlcmU6IHsgZW1haWw6IGVtYWlsIH0sIHBhcmFub2lkOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICAudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoJ1VzZXIgaXMgbm90IGZvdW5kJywgNDA5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBkYi51c2VyLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUgPyBmaXJzdE5hbWU6IHVzZXIuZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBsYXN0TmFtZSA/IGxhc3ROYW1lOiB1c2VyLmxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCA/IHBhc3N3b3JkSGFzaDogdXNlci5wYXNzd29yZEhhc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyA/IGFkZHJlc3MgOiB1c2VyLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogcm9sZSA/IHJvbGU6IHVzZXIucm9sZSxcclxuICAgICAgICAgICAgICAgICAgICB2ZXJpZnkgOiB2ZXJpZnk/IHZlcmlmeTogdXNlci52ZXJpZnlcclxuICAgICAgICAgICAgICAgIH0sIHsgd2hlcmU6IHsgaWQ6IGlkIH0gfSlcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBtc2c6IFwiVXNlciB1cGRhdGUgc3VjY2Vzc3NmdWxseVwifSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyAnc3VjY2Vzcyc6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgLy8gYXN5bmMgbG9naW4ocmVxLCByZXMsIG5leHQpIHtcclxuICAgIC8vICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyAgICAgdmFyIHRva2VuID0gSldUU2lnbihyZXEudXNlciwgZGF0ZSk7XHJcbiAgICAvLyAgICAgcmVzLmNvb2tpZSgnWFNSRi10b2tlbicsdG9rZW4sIHtcclxuICAgIC8vICAgICAgICAgZXhwaXJlOiBuZXcgRGF0ZSgpLnNldE1pbnV0ZXMoZGF0ZS5nZXRNaW51dGVzKCkgKyAzMCksXHJcbiAgICAvLyAgICAgICAgIGh0dHBPbmx5OiB0cnVlLCBzZWN1cmU6IGNvbmZpZy5hcHAuc2VjdXJlXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSAsdG9rZW4sIHJvbGU6IHJlcS51c2VyLnJvbGV9KTtcclxuICAgIC8vIH0sXHJcbiAgICBhc3luYyBsb2dpbihyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIGNvbnN0IHtlbWFpbCwgcGFzc3dvcmQgfT0gcmVxLmJvZHlcclxuICAgICAgICAvLyB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGFzc3dvcmQpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYmNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkKSlcclxuICAgICAgICBjb25zdCBmaW5kVXNlcj0gYXdhaXQgZGIudXNlci5maW5kT25lKHt3aGVyZToge2VtYWlsLCBwYXNzd29yZDogbWQ1KHBhc3N3b3JkKX19KVxyXG4gICAgICAgIGlmKGZpbmRVc2VyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuPSBKV1Quc2lnbih7dWlkOiBmaW5kVXNlci5kYXRhVmFsdWVzLmlkLCBpZDogZmluZFVzZXIuZGF0YVZhbHVlcy5pZH0sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpXHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIHRva2VuLCBhdWlkOiBmaW5kVXNlci5kYXRhVmFsdWVzLmlkLCByb2xlOiBmaW5kVXNlci5kYXRhVmFsdWVzLnJvbGUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgICBhc3luYyBkZWxldGVVc2VyTGlzdChyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIGRiLnVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IGlkOiByZXEuYm9keS5pZH0gfSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi51c2VyLmRlc3Ryb3koeyB3aGVyZTogeyBpZDogcmVxLmJvZHkuaWQgfSB9KS50aGVuKHIgPT4gW3IsIGRhdGFdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcignVXNlciBpcyBub3QgZm91bmQnLCA0MDkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7ICdzdGF0dXMnOiBcImRlbGV0ZWQgdXNlcmxpc3QgU2VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXh0KGVycilcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhc3luYyB2ZXJpZnlNYWlsKHJlcSwgcmVzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gTmjhuq1uIGVtYWlsIHThu6sgcmVxdWVzdCBib2R5XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCBmaXJzdE5hbWUgfSA9IHJlcS5ib2R5O1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIFThuqFvIG3hu5l0IG3DoyB4w6FjIHRo4buxYyBuZ+G6q3Ugbmhpw6puXHJcbiAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQ+G6pXUgaMOsbmggdGjDtG5nIHRpbiBtYWlsIHNlcnZlciAoZMO5bmcgR21haWwgbMOgbSB2w60gZOG7pSlcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiAnZ21haWwnLFxyXG4gICAgICAgICAgICAgICAgYXV0aDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52Lk1BSUxfVVNFUk5BTUUsIC8vIFRoYXkgYuG6sW5nIMSR4buLYSBjaOG7iSBlbWFpbCBj4bunYSBi4bqhblxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52Lk1BSUxfUEFTU1dPUkQgLy8gVGhheSBi4bqxbmcgbeG6rXQga2jhuql1IGVtYWlsIGPhu6dhIGLhuqFuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIEPhuqV1IGjDrG5oIG7hu5lpIGR1bmcgZW1haWxcclxuICAgICAgICAgICAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5NQUlMX1VTRVJOQU1FLCAvLyBUaGF5IGLhurFuZyDEkeG7i2EgY2jhu4kgZW1haWwgY+G7p2EgYuG6oW5cclxuICAgICAgICAgICAgICAgIHRvOiBlbWFpbCwgLy8gxJDhu4thIGNo4buJIGVtYWlsIG5nxrDhu51pIGTDuW5nIGPhuqduIHjDoWMgdGjhu7FjXHJcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiAnRW1haWwgVmVyaWZpY2F0aW9uJywgLy8gVGnDqnUgxJHhu4EgZW1haWxcclxuICAgICAgICAgICAgICAgIGh0bWw6IGBcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtwcm9jZXNzLmVudi5VUkxfRlJPTlRFTkR9L3NpZ251cC9zdWNjZXNzXCIgc3R5bGU9XCJwYWRkaW5nOiAxMHB4OyBib3JkZXItcmFkaXVzOiAxMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU4OWZmOyBjb2xvcjogI2ZmZjsgd2lkdGg6IDEwMCVcIj5DbGljayBoZXJlIHRvIGNvbXBsZXRlIHNpbmd1cCBwcm9jZXNzPC9hPlxyXG4gICAgICAgICAgICAgICAgYCAvLyBO4buZaSBkdW5nIGVtYWlsIGNo4bupYSBtw6MgeMOhYyB0aOG7sWNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEfhu61pIGVtYWlsXHJcbiAgICAgICAgICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKTtcclxuICAgICAgICAgICAgLy8gVHLhuqMgduG7gSBtw6MgeMOhYyB0aOG7sWMgxJHhu4Mgc+G7rSBk4bulbmcgc2F1IG7DoHkgKHbDrSBk4bulIMSR4buDIGtp4buDbSB0cmEgbcOjIGtoaSBuZ8aw4budaSBkw7luZyBuaOG6rXAgdsOgbylcclxuICAgICAgICAgICAgcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFjhu60gbMO9IGzhu5dpIG7hur91IGPDs1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZW5kaW5nIHZlcmlmaWNhdGlvbiBlbWFpbDonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRXJyb3Igc2VuZGluZyB2ZXJpZmljYXRpb24gZW1haWwnIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7QUFDQSxJQUFBQyxhQUFBLEdBQUFDLHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBRyxPQUFBLEdBQUFELHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBSSxPQUFBLEdBQUFGLHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBSyxhQUFBLEdBQUFILHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBTSxVQUFBLEdBQUFKLHNCQUFBLENBQUFGLE9BQUE7QUFFQSxJQUFBTyxHQUFBLEdBQUFMLHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBUSxXQUFBLEdBQUFOLHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBUyxNQUFBLEdBQUFQLHNCQUFBLENBQUFGLE9BQUE7QUFBeUIsU0FB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