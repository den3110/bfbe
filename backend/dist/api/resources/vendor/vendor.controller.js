"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../../../models");
var _uuid = require("uuid");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var Sequelize = require("sequelize");
var Op = Sequelize.Op;
var _default = exports["default"] = {
  /* Add user api start here................................*/index: function index(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var id, _req$body, storename, status, shopaddress, shopdesc, ownername, owneraddress, email, password, phone, areaId, accountNo, accountHolderName, IFSC, bankName, branch, adharCardNo, panCardNo, GSTNo;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = (0, _uuid.v4)();
            _req$body = req.body, storename = _req$body.storename, status = _req$body.status, shopaddress = _req$body.shopaddress, shopdesc = _req$body.shopdesc, ownername = _req$body.ownername, owneraddress = _req$body.owneraddress, email = _req$body.email, password = _req$body.password, phone = _req$body.phone, areaId = _req$body.areaId, accountNo = _req$body.accountNo, accountHolderName = _req$body.accountHolderName, IFSC = _req$body.IFSC, bankName = _req$body.bankName, branch = _req$body.branch, adharCardNo = _req$body.adharCardNo, panCardNo = _req$body.panCardNo, GSTNo = _req$body.GSTNo;
            _models.db.vendor.findOne({
              where: {
                id: id
              }
            }).then(function (supplier) {
              if (supplier) {
                return _models.db.vendor.update({
                  storename: storename ? storename : supplier.storename,
                  status: status ? status : supplier.status,
                  shopaddress: shopaddress ? shopaddress : supplier.shopaddress,
                  shopdesc: shopdesc ? shopdesc : supplier.shopdesc,
                  ownername: ownername ? ownername : supplier.ownername,
                  owneraddress: owneraddress ? owneraddress : supplier.owneraddress,
                  email: email ? email : supplier.email,
                  phone: phone ? phone : supplier.phone,
                  accountNo: accountNo ? accountNo : supplier.accountNo,
                  accountHolderName: accountHolderName ? accountHolderName : supplier.accountHolderName,
                  IFSC: IFSC ? IFSC : supplier.IFSC,
                  bankName: bankName ? bankName : supplier.bankName,
                  branch: branch ? branch : supplier.branch,
                  adharCardNo: adharCardNo ? adharCardNo : supplier.adharCardNo,
                  panCardNo: panCardNo ? panCardNo : supplier.panCardNo,
                  GSTNo: GSTNo ? GSTNo : supplier.GSTNo
                }, {
                  where: {
                    id: id
                  }
                });
              }
              return _models.db.vendor.create({
                storename: storename,
                status: status,
                shopaddress: shopaddress,
                shopdesc: shopdesc,
                ownername: ownername,
                owneraddress: owneraddress,
                email: email,
                password: password,
                phone: phone,
                accountNo: accountNo,
                accountHolderName: accountHolderName,
                IFSC: IFSC,
                bankName: bankName,
                branch: branch,
                adharCardNo: adharCardNo,
                panCardNo: panCardNo,
                GSTNo: GSTNo
              });
            }).then(function (vendor) {
              if (areaId) {
                var areaList = [];
                for (var i = 0; i < areaId.length; i++) {
                  areaList.push({
                    vendorId: vendor.id,
                    areaId: areaId[i]
                  });
                }
                return _models.db.vendor_area.bulkCreate(areaList);
              }
              return true;
            }).then(function (success) {
              res.status(200).json({
                'success': true,
                msg: "Successfully inserted supplier"
              });
            })["catch"](function (err) {
              console.log(err);
              next(err);
            });
            _context.next = 10;
            break;
          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            throw new RequestError('Error');
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 6]]);
    }))();
  },
  vendorAddProduct: function vendorAddProduct(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _req$body2, supplierId, productId, unitSize, buyerPrice, id;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, supplierId = _req$body2.supplierId, productId = _req$body2.productId, unitSize = _req$body2.unitSize, buyerPrice = _req$body2.buyerPrice;
            id = productId;
            _models.db.vendor_product.findAll({
              where: {
                supplierId: supplierId,
                productId: productId,
                unitSize: unitSize
              }
            }).then(function (data) {
              if (!data.length > 0) {
                return _models.db.vendor_product.create({
                  supplierId: supplierId,
                  productId: productId,
                  unitSize: unitSize,
                  price: buyerPrice
                });
              } else {
                return _models.db.vendor_product.update({
                  unitSize: unitSize ? unitSize : data.unitSize,
                  price: buyerPrice ? buyerPrice : data.buyerPrice
                }, {
                  where: {
                    supplierId: supplierId,
                    productId: productId
                  }
                });
              }
            }).then(function (success) {
              res.status(200).json({
                'success': true,
                msg: "Successfully inserted product in VendorList"
              });
            })["catch"](function (err) {
              next(err);
            });
            _context2.next = 9;
            break;
          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            throw new RequestError('Error');
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 6]]);
    }))();
  },
  getAllvendor: function getAllvendor(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _models.db.vendor.findAll({
              include: [{
                model: _models.db.area,
                attributes: ["id", "name"],
                include: [{
                  model: _models.db.location,
                  attributes: ["id", "name"]
                }]
              }]
            }).then(function (list) {
              res.status(200).json({
                'success': true,
                data: list
              });
            })["catch"](function (err) {
              next(err);
            });
            _context3.next = 7;
            break;
          case 4:
            _context3.prev = 4;
            _context3.t0 = _context3["catch"](0);
            throw new RequestError('Error');
          case 7:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 4]]);
    }))();
  },
  getAllVendorProduct: function getAllVendorProduct(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _models.db.product.findAll({
              attributes: ["id", "name", "brand"],
              include: [{
                model: _models.db.vendor_product,
                attributes: ["id", "supplierId", "productId", "unitSize", "price"],
                include: [{
                  model: _models.db.vendor,
                  attributes: ["id", "storename", "ownername"]
                }]
              }]
            }).then(function (list) {
              res.status(200).json({
                'success': true,
                data: list
              });
            })["catch"](function (err) {
              next(err);
            });
            _context4.next = 7;
            break;
          case 4:
            _context4.prev = 4;
            _context4.t0 = _context4["catch"](0);
            throw new RequestError('Error');
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 4]]);
    }))();
  },
  getProductByVendor: function getProductByVendor(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _models.db.vendor_product.findAll({
              attributes: ["id", "supplierId", "productId", "unitSize", "price"],
              where: {
                supplierId: req.body.id
              },
              include: [{
                model: _models.db.product,
                attributes: ["id", "name", "brand", "photo", "status"]
              }]
            }).then(function (list) {
              res.status(200).json({
                'success': true,
                data: list
              });
            })["catch"](function (err) {
              next(err);
            });
            _context5.next = 7;
            break;
          case 4:
            _context5.prev = 4;
            _context5.t0 = _context5["catch"](0);
            throw new RequestError('Error');
          case 7:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 4]]);
    }))();
  },
  vendorUpdate: function vendorUpdate(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var _req$body3, id, storename, status, shopaddress, shopdesc, ownername, owneraddress, email, password, phone;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _req$body3 = req.body, id = _req$body3.id, storename = _req$body3.storename, status = _req$body3.status, shopaddress = _req$body3.shopaddress, shopdesc = _req$body3.shopdesc, ownername = _req$body3.ownername, owneraddress = _req$body3.owneraddress, email = _req$body3.email, password = _req$body3.password, phone = _req$body3.phone;
            _models.db.vendor.findOne({
              where: {
                id: id
              }
            }).then(function (list) {
              if (list) {
                return _models.db.vendor.update({
                  storename: storename,
                  status: parseInt(status) ? 'active' : 'inactive',
                  shopaddress: shopaddress ? shopaddress : list.shopaddress,
                  shopdesc: shopdesc ? shopdesc : list.shopdesc,
                  ownername: ownername ? ownername : list.ownername,
                  owneraddress: owneraddress ? owneraddress : list.owneraddress,
                  email: email ? email : list.email,
                  password: password ? password : list.password,
                  phone: phone ? phone : list.phone
                }, {
                  where: {
                    id: id
                  }
                });
              }
              throw new RequestError("No data found", 409);
            }).then(function (e) {
              res.status(200).json({
                'success': true,
                msg: 'Updated Successfully'
              });
            })["catch"](function (err) {
              next(err);
            });
            _context6.next = 8;
            break;
          case 5:
            _context6.prev = 5;
            _context6.t0 = _context6["catch"](0);
            throw new RequestError('Error');
          case 8:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 5]]);
    }))();
  },
  vendorDelete: function vendorDelete(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _models.db.vendor.findOne({
              where: {
                id: parseInt(req.query.id)
              }
            }).then(function (data) {
              if (data) {
                return _models.db.vendor.destroy({
                  where: {
                    id: data.id
                  }
                });
              }
              throw new RequestError('Sellar is not found');
            }).then(function (re) {
              return res.status(200).json({
                success: true,
                'status': "deleted Product Seccessfully"
              });
            })["catch"](function (err) {
              next(err);
            });
            _context7.next = 7;
            break;
          case 4:
            _context7.prev = 4;
            _context7.t0 = _context7["catch"](0);
            throw new RequestError('Error');
          case 7:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 4]]);
    }))();
  },
  vendorProductDelete: function vendorProductDelete(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            console.log("hi", req.body);
            _models.db.vendor_product.findOne({
              where: {
                id: req.body.id
              }
            }).then(function (data) {
              if (data) {
                return _models.db.vendor_product.destroy({
                  where: {
                    id: req.body.id
                  }
                });
              }
              throw new RequestError('Product is not found');
            }).then(function (re) {
              return res.status(200).json({
                success: true,
                'status': "Seccessfully deleted Product from Vendorlist"
              });
            })["catch"](function (err) {
              next(err);
            });
            _context8.next = 8;
            break;
          case 5:
            _context8.prev = 5;
            _context8.t0 = _context8["catch"](0);
            throw new RequestError('Error');
          case 8:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 5]]);
    }))();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwicmVxdWlyZSIsIl91dWlkIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIlNlcXVlbGl6ZSIsIk9wIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiaW5kZXgiLCJyZXEiLCJyZXMiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfY2FsbGVlIiwiaWQiLCJfcmVxJGJvZHkiLCJzdG9yZW5hbWUiLCJzdGF0dXMiLCJzaG9wYWRkcmVzcyIsInNob3BkZXNjIiwib3duZXJuYW1lIiwib3duZXJhZGRyZXNzIiwiZW1haWwiLCJwYXNzd29yZCIsInBob25lIiwiYXJlYUlkIiwiYWNjb3VudE5vIiwiYWNjb3VudEhvbGRlck5hbWUiLCJJRlNDIiwiYmFua05hbWUiLCJicmFuY2giLCJhZGhhckNhcmRObyIsInBhbkNhcmRObyIsIkdTVE5vIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInY0IiwiYm9keSIsImRiIiwidmVuZG9yIiwiZmluZE9uZSIsIndoZXJlIiwic3VwcGxpZXIiLCJ1cGRhdGUiLCJhcmVhTGlzdCIsInZlbmRvcklkIiwidmVuZG9yX2FyZWEiLCJidWxrQ3JlYXRlIiwic3VjY2VzcyIsImpzb24iLCJtc2ciLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidDAiLCJSZXF1ZXN0RXJyb3IiLCJ2ZW5kb3JBZGRQcm9kdWN0IiwiX2NhbGxlZTIiLCJfcmVxJGJvZHkyIiwic3VwcGxpZXJJZCIsInByb2R1Y3RJZCIsInVuaXRTaXplIiwiYnV5ZXJQcmljZSIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInZlbmRvcl9wcm9kdWN0IiwiZmluZEFsbCIsImRhdGEiLCJwcmljZSIsImdldEFsbHZlbmRvciIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiaW5jbHVkZSIsIm1vZGVsIiwiYXJlYSIsImF0dHJpYnV0ZXMiLCJsb2NhdGlvbiIsImxpc3QiLCJnZXRBbGxWZW5kb3JQcm9kdWN0IiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJwcm9kdWN0IiwiZ2V0UHJvZHVjdEJ5VmVuZG9yIiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJ2ZW5kb3JVcGRhdGUiLCJfY2FsbGVlNiIsIl9yZXEkYm9keTMiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJwYXJzZUludCIsInZlbmRvckRlbGV0ZSIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwicXVlcnkiLCJkZXN0cm95IiwicmUiLCJ2ZW5kb3JQcm9kdWN0RGVsZXRlIiwiX2NhbGxlZTgiLCJfY2FsbGVlOCQiLCJfY29udGV4dDgiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3Jlc291cmNlcy92ZW5kb3IvdmVuZG9yLmNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQge3Y0IH0gZnJvbSBcInV1aWRcIlxyXG5jb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpO1xyXG5jb25zdCBPcCA9IFNlcXVlbGl6ZS5PcDtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyogQWRkIHVzZXIgYXBpIHN0YXJ0IGhlcmUuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiovXHJcblxyXG4gICAgYXN5bmMgaW5kZXgocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBpZD0gdjQoKVxyXG4gICAgICAgICAgICBjb25zdCB7ICBzdG9yZW5hbWUsIHN0YXR1cywgc2hvcGFkZHJlc3MsIHNob3BkZXNjLCBvd25lcm5hbWUsIG93bmVyYWRkcmVzcywgZW1haWwscGFzc3dvcmQsIHBob25lLCBhcmVhSWQsIGFjY291bnRObywgYWNjb3VudEhvbGRlck5hbWUsIElGU0MsIGJhbmtOYW1lLCBicmFuY2gsIGFkaGFyQ2FyZE5vLCBwYW5DYXJkTm8sIEdTVE5vIH0gPSByZXEuYm9keTtcclxuICAgICAgICAgICAgZGIudmVuZG9yLmZpbmRPbmUoeyB3aGVyZTogeyBpZDogaWR9IH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihzdXBwbGllciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1cHBsaWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi52ZW5kb3IudXBkYXRlKHtzdG9yZW5hbWU6IHN0b3JlbmFtZSA/IHN0b3JlbmFtZTogc3VwcGxpZXIuc3RvcmVuYW1lLCBzdGF0dXM6IHN0YXR1cyA/IHN0YXR1czogc3VwcGxpZXIuc3RhdHVzLCBzaG9wYWRkcmVzczogc2hvcGFkZHJlc3MgPyBzaG9wYWRkcmVzczogc3VwcGxpZXIuc2hvcGFkZHJlc3MsIHNob3BkZXNjOiBzaG9wZGVzYyA/IHNob3BkZXNjOiBzdXBwbGllci5zaG9wZGVzYywgb3duZXJuYW1lOiBvd25lcm5hbWUgPyBvd25lcm5hbWU6IHN1cHBsaWVyLm93bmVybmFtZSwgb3duZXJhZGRyZXNzOiBvd25lcmFkZHJlc3MgPyBvd25lcmFkZHJlc3MgOiBzdXBwbGllci5vd25lcmFkZHJlc3MsIGVtYWlsOiBlbWFpbCA/IGVtYWlsOiBzdXBwbGllci5lbWFpbCwgcGhvbmU6IHBob25lID8gcGhvbmU6IHN1cHBsaWVyLnBob25lLCBhY2NvdW50Tm86IGFjY291bnRObyA/IGFjY291bnRObyA6IHN1cHBsaWVyLmFjY291bnRObywgYWNjb3VudEhvbGRlck5hbWU6IGFjY291bnRIb2xkZXJOYW1lID8gYWNjb3VudEhvbGRlck5hbWU6IHN1cHBsaWVyLmFjY291bnRIb2xkZXJOYW1lLCBJRlNDOiBJRlNDID8gSUZTQzogc3VwcGxpZXIuSUZTQywgYmFua05hbWU6IGJhbmtOYW1lID8gYmFua05hbWU6IHN1cHBsaWVyLmJhbmtOYW1lLCBicmFuY2g6IGJyYW5jaCA/IGJyYW5jaCA6IHN1cHBsaWVyLmJyYW5jaCwgYWRoYXJDYXJkTm86IGFkaGFyQ2FyZE5vID8gYWRoYXJDYXJkTm86IHN1cHBsaWVyLmFkaGFyQ2FyZE5vLCBwYW5DYXJkTm86IHBhbkNhcmRObyA/IHBhbkNhcmRObzogc3VwcGxpZXIucGFuQ2FyZE5vLCBHU1RObzogR1NUTm8/IEdTVE5vOiBzdXBwbGllci5HU1ROb30sIHt3aGVyZTp7IGlkOiBpZH19ICkgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIudmVuZG9yLmNyZWF0ZSh7c3RvcmVuYW1lOiBzdG9yZW5hbWUsc3RhdHVzOiBzdGF0dXMsIHNob3BhZGRyZXNzOiBzaG9wYWRkcmVzcywgc2hvcGRlc2M6IHNob3BkZXNjLCBvd25lcm5hbWU6IG93bmVybmFtZSwgb3duZXJhZGRyZXNzOiBvd25lcmFkZHJlc3MsIGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkLCBwaG9uZTogcGhvbmUsIGFjY291bnRObzogYWNjb3VudE5vLCBhY2NvdW50SG9sZGVyTmFtZTogYWNjb3VudEhvbGRlck5hbWUsIElGU0M6IElGU0MsIGJhbmtOYW1lOiBiYW5rTmFtZSwgYnJhbmNoOiBicmFuY2gsIGFkaGFyQ2FyZE5vOiBhZGhhckNhcmRObywgcGFuQ2FyZE5vOiBwYW5DYXJkTm8sIEdTVE5vOiBHU1ROb30pICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbih2ZW5kb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFyZWFJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcmVhTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpPCBhcmVhSWQubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZWFMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVuZG9ySWQ6IHZlbmRvci5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZWFJZDogYXJlYUlkW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi52ZW5kb3JfYXJlYS5idWxrQ3JlYXRlKGFyZWFMaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgJ3N1Y2Nlc3MnOiB0cnVlLCBtc2c6IFwiU3VjY2Vzc2Z1bGx5IGluc2VydGVkIHN1cHBsaWVyXCIgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChlcnIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoJ0Vycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYXN5bmMgdmVuZG9yQWRkUHJvZHVjdChyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0eyBzdXBwbGllcklkLCBwcm9kdWN0SWQsIHVuaXRTaXplLCBidXllclByaWNlfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBwcm9kdWN0SWRcclxuICAgICAgICAgICAgZGIudmVuZG9yX3Byb2R1Y3QuZmluZEFsbCh7IHdoZXJlOiB7IHN1cHBsaWVySWQ6IHN1cHBsaWVySWQsIHByb2R1Y3RJZDogcHJvZHVjdElkLCB1bml0U2l6ZTogdW5pdFNpemUgfSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmxlbmd0aD4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi52ZW5kb3JfcHJvZHVjdC5jcmVhdGUoe3N1cHBsaWVySWQ6IHN1cHBsaWVySWQsIHByb2R1Y3RJZDogcHJvZHVjdElkLCB1bml0U2l6ZTogdW5pdFNpemUsIHByaWNlOiBidXllclByaWNlfSkgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIudmVuZG9yX3Byb2R1Y3QudXBkYXRlKHsgdW5pdFNpemU6IHVuaXRTaXplID8gdW5pdFNpemU6IGRhdGEudW5pdFNpemUsIHByaWNlOmJ1eWVyUHJpY2UgPyBidXllclByaWNlOiBkYXRhLmJ1eWVyUHJpY2V9LHsgd2hlcmU6IHsgc3VwcGxpZXJJZDogc3VwcGxpZXJJZCwgcHJvZHVjdElkOiBwcm9kdWN0SWR9fSkgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ICdzdWNjZXNzJzogdHJ1ZSwgbXNnOiBcIlN1Y2Nlc3NmdWxseSBpbnNlcnRlZCBwcm9kdWN0IGluIFZlbmRvckxpc3RcIiB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcignRXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIGdldEFsbHZlbmRvcihyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRiLnZlbmRvci5maW5kQWxsKHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IFt7IG1vZGVsOiBkYi5hcmVhLCBhdHRyaWJ1dGVzOiBbXCJpZFwiLCBcIm5hbWVcIl0gLCBpbmNsdWRlOiBbeyBtb2RlbDogZGIubG9jYXRpb24sIGF0dHJpYnV0ZXM6IFtcImlkXCIsIFwibmFtZVwiXSB9XX1dXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihsaXN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ICdzdWNjZXNzJzogdHJ1ZSwgZGF0YTpsaXN0IH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChlcnIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdFcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgIGFzeW5jIGdldEFsbFZlbmRvclByb2R1Y3QocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkYi5wcm9kdWN0LmZpbmRBbGwoe1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczpbXCJpZFwiLFwibmFtZVwiLFwiYnJhbmRcIl0sXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBbeyBtb2RlbDogZGIudmVuZG9yX3Byb2R1Y3QsIGF0dHJpYnV0ZXM6W1wiaWRcIiwgXCJzdXBwbGllcklkXCIsXCJwcm9kdWN0SWRcIiwgXCJ1bml0U2l6ZVwiLCBcInByaWNlXCJdLCAgaW5jbHVkZTogW3sgbW9kZWw6IGRiLnZlbmRvciwgYXR0cmlidXRlczpbXCJpZFwiLCBcInN0b3JlbmFtZVwiLCBcIm93bmVybmFtZVwiXSB9XSB9XSxcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihsaXN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ICdzdWNjZXNzJzogdHJ1ZSwgZGF0YTpsaXN0IH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChlcnIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdFcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgZ2V0UHJvZHVjdEJ5VmVuZG9yKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZGIudmVuZG9yX3Byb2R1Y3QuZmluZEFsbCh7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOltcImlkXCIsXCJzdXBwbGllcklkXCIsXCJwcm9kdWN0SWRcIixcInVuaXRTaXplXCIsXCJwcmljZVwiXSxcclxuICAgICAgICAgICAgICAgIHdoZXJlOnsgc3VwcGxpZXJJZDogcmVxLmJvZHkuaWR9LFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZTpbeyBtb2RlbDogZGIucHJvZHVjdCwgYXR0cmlidXRlczpbXCJpZFwiLCBcIm5hbWVcIiwgXCJicmFuZFwiLCBcInBob3RvXCIsXCJzdGF0dXNcIl0gfV0gXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihsaXN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ICdzdWNjZXNzJzogdHJ1ZSwgZGF0YTpsaXN0IH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChlcnIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdFcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgdmVuZG9yVXBkYXRlKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qge2lkLCBzdG9yZW5hbWUsIHN0YXR1cywgc2hvcGFkZHJlc3MsIHNob3BkZXNjLCBvd25lcm5hbWUsIG93bmVyYWRkcmVzcywgZW1haWwscGFzc3dvcmQsIHBob25lLH0gPSByZXEuYm9keTtcclxuICAgICAgICAgICAgZGIudmVuZG9yLmZpbmRPbmUoeyB3aGVyZToge2lkIDogaWR9fSlcclxuICAgICAgICAgICAgLnRoZW4obGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihsaXN0KXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIudmVuZG9yLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlbmFtZTogc3RvcmVuYW1lLCBzdGF0dXM6cGFyc2VJbnQoc3RhdHVzKT8nYWN0aXZlJzonaW5hY3RpdmUnLCBzaG9wYWRkcmVzczogc2hvcGFkZHJlc3M/c2hvcGFkZHJlc3M6bGlzdC5zaG9wYWRkcmVzcywgc2hvcGRlc2M6IHNob3BkZXNjP3Nob3BkZXNjOmxpc3Quc2hvcGRlc2MsIG93bmVybmFtZTogb3duZXJuYW1lP293bmVybmFtZTpsaXN0Lm93bmVybmFtZSwgb3duZXJhZGRyZXNzOiBvd25lcmFkZHJlc3M/b3duZXJhZGRyZXNzOmxpc3Qub3duZXJhZGRyZXNzLCBlbWFpbDogZW1haWw/ZW1haWw6bGlzdC5lbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkP3Bhc3N3b3JkOmxpc3QucGFzc3dvcmQsIHBob25lOiBwaG9uZT9waG9uZTpsaXN0LnBob25lLCBcclxuICAgICAgICAgICAgICAgICAgICB9LHt3aGVyZToge2lkOiBpZH19KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcihcIk5vIGRhdGEgZm91bmRcIiw0MDkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGU9PntcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgJ3N1Y2Nlc3MnOiB0cnVlICwgbXNnOidVcGRhdGVkIFN1Y2Nlc3NmdWxseSd9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIG5leHQoZXJyKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdFcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG4gICAgYXN5bmMgdmVuZG9yRGVsZXRlKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZGIudmVuZG9yLmZpbmRPbmUoeyB3aGVyZTogeyBpZDogcGFyc2VJbnQocmVxLnF1ZXJ5LmlkKSB9IH0pXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRiLnZlbmRvci5kZXN0cm95KHsgd2hlcmU6IHsgaWQ6IGRhdGEuaWQgfSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcignU2VsbGFyIGlzIG5vdCBmb3VuZCcpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsICdzdGF0dXMnOiBcImRlbGV0ZWQgUHJvZHVjdCBTZWNjZXNzZnVsbHlcIiB9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIG5leHQoZXJyKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoJ0Vycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAgIGFzeW5jIHZlbmRvclByb2R1Y3REZWxldGUocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpXCIscmVxLmJvZHkpXHJcbiAgICAgICAgICAgIGRiLnZlbmRvcl9wcm9kdWN0LmZpbmRPbmUoeyB3aGVyZTogeyBpZDogcmVxLmJvZHkuaWQgfSB9KVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi52ZW5kb3JfcHJvZHVjdC5kZXN0cm95KHsgd2hlcmU6IHsgaWQ6IHJlcS5ib2R5LmlkIH0gfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoJ1Byb2R1Y3QgaXMgbm90IGZvdW5kJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgJ3N0YXR1cyc6IFwiU2VjY2Vzc2Z1bGx5IGRlbGV0ZWQgUHJvZHVjdCBmcm9tIFZlbmRvcmxpc3RcIiB9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIG5leHQoZXJyKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoJ0Vycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbn1cclxuXHJcblxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtBQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtBQUF3QixTQUFBRSxvQkFBQSxrQkFBeEIscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFB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