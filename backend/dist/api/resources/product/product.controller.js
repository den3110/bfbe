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
var _config = _interopRequireDefault(require("../../../config"));
var _awsSdk = _interopRequireDefault(require("aws-sdk"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var _require = require("sequelize"),
  Op = _require.Op,
  Sequelize = _require.Sequelize;
// import { queue } from '../../../kue';

var s3 = new _awsSdk["default"].S3({
  accessKeyId: _config["default"].app.AWS_ACCESS_KEY,
  secretAccessKey: _config["default"].app.AWS_SECRET_KEY
});
var deleteFileFromS3 = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(imgUrl) {
    var lastItem, params;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          try {
            lastItem = imgUrl.substring(imgUrl.lastIndexOf("/") + 1);
            params = {
              Bucket: "photoabhi",
              Key: lastItem
            };
            s3.deleteObject(params, function (error, data) {
              if (error) {
                console.log(error, error.stack);
              }
              return data;
            });
          } catch (error) {
            assert.isNotOk(error, "Promise error");
            done();
          }
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function deleteFileFromS3(_x) {
    return _ref.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  /* Add user api start here................................*/getPhotoProduct: function getPhotoProduct(req, res) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var productId;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            productId = req.query.productId;
            _models.db.productphoto.findAll({
              where: {
                productId: productId
              }
            }).then(function (product) {
              return res.status(200).json({
                ok: true,
                data: product
              });
            });
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  addProduct: function addProduct(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _req$body, categoryId, subCategoryId, childCategoryId, name, slug, brand, status, unitSize, sortDesc, desc, buyerPrice, price, qty, discount, discountPer, total, netPrice, image, size, newaddimage;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, categoryId = _req$body.categoryId, subCategoryId = _req$body.subCategoryId, childCategoryId = _req$body.childCategoryId, name = _req$body.name, slug = _req$body.slug, brand = _req$body.brand, status = _req$body.status, unitSize = _req$body.unitSize, sortDesc = _req$body.sortDesc, desc = _req$body.desc, buyerPrice = _req$body.buyerPrice, price = _req$body.price, qty = _req$body.qty, discount = _req$body.discount, discountPer = _req$body.discountPer, total = _req$body.total, netPrice = _req$body.netPrice, image = _req$body.image, size = _req$body.size, newaddimage = _req$body.newaddimage;
            _models.db.product.create({
              categoryId: categoryId,
              subCategoryId: subCategoryId,
              childCategoryId: childCategoryId || 0,
              name: name,
              slug: slug,
              status: parseInt(status) ? "active" : "inactive",
              brand: brand,
              unitSize: unitSize,
              sortDesc: sortDesc,
              desc: desc,
              buyerPrice: buyerPrice,
              price: price,
              qty: qty,
              discount: discount,
              discountPer: discountPer,
              total: total,
              netPrice: netPrice,
              photo: req.file ? req.file.path : ""
            }).then(function (product) {
              var _JSON$parse, _JSON$parse3;
              (_JSON$parse = JSON.parse(image)) === null || _JSON$parse === void 0 || _JSON$parse.map(function (item) {
                return _models.db.productphoto.create({
                  imgUrl: item === null || item === void 0 ? void 0 : item.path,
                  productId: product.dataValues.id
                });
              });
              if (newaddimage) {
                var _JSON$parse2;
                (_JSON$parse2 = JSON.parse(newaddimage)) === null || _JSON$parse2 === void 0 || _JSON$parse2.map(function (item) {
                  return _models.db.productphoto.create({
                    imgUrl: item === null || item === void 0 ? void 0 : item.imageUrl,
                    productId: productId
                  });
                });
              }
              (_JSON$parse3 = JSON.parse(size)) === null || _JSON$parse3 === void 0 || _JSON$parse3.map(function (item) {
                return _models.db.productsize.create({
                  size: item === null || item === void 0 ? void 0 : item.size,
                  productId: product.dataValues.id,
                  amount: item === null || item === void 0 ? void 0 : item.amount
                });
              });
              res.status(200).json({
                success: true,
                msg: "Successfully inserted product"
              });
            })["catch"](function (err) {
              console.log(err);
              next(err);
            });
            _context3.next = 8;
            break;
          case 5:
            _context3.prev = 5;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).json(_context3.t0));
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 5]]);
    }))();
  },
  index: function index(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _req$query, supplierId, categoryId, subCategoryId;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _req$query = req.query, supplierId = _req$query.supplierId, categoryId = _req$query.categoryId, subCategoryId = _req$query.subCategoryId;
            _models.db.product.findAll({
              order: [["createdAt", "DESC"]],
              where: {
                supplierId: supplierId,
                categoryId: categoryId,
                subCategoryId: subCategoryId
              }
            }).then(function (product) {
              res.status(200).json({
                success: true,
                product: product
              });
            })["catch"](function (err) {
              next(err);
            });
            _context4.next = 8;
            break;
          case 5:
            _context4.prev = 5;
            _context4.t0 = _context4["catch"](0);
            throw new RequestError("Error");
          case 8:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 5]]);
    }))();
  },
  getAllProductList: function getAllProductList(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _models.db.product.findAll({
              order: [["createdAt", "DESC"]],
              include: [{
                model: _models.db.SubCategory,
                attributes: ["id", "sub_name"],
                include: [{
                  model: _models.db.category,
                  attributes: ["id", "name"]
                }]
              }]
            }).then(function (product) {
              res.status(200).json({
                success: true,
                product: product
              });
            })["catch"](function (err) {
              next(err);
            });
            _context5.next = 7;
            break;
          case 4:
            _context5.prev = 4;
            _context5.t0 = _context5["catch"](0);
            throw new RequestError("Error");
          case 7:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 4]]);
    }))();
  },
  update: function update(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var _req$body2, _productId, categoryId, subCategoryId, childCategoryId, name, slug, brand, status, unitSize, desc, buyerPrice, price, qty, discount, discountPer, total, netPrice, images, size, newaddimage;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _req$body2 = req.body, _productId = _req$body2.productId, categoryId = _req$body2.categoryId, subCategoryId = _req$body2.subCategoryId, childCategoryId = _req$body2.childCategoryId, name = _req$body2.name, slug = _req$body2.slug, brand = _req$body2.brand, status = _req$body2.status, unitSize = _req$body2.unitSize, desc = _req$body2.desc, buyerPrice = _req$body2.buyerPrice, price = _req$body2.price, qty = _req$body2.qty, discount = _req$body2.discount, discountPer = _req$body2.discountPer, total = _req$body2.total, netPrice = _req$body2.netPrice, images = _req$body2.images, size = _req$body2.size, newaddimage = _req$body2.newaddimage;
            _models.db.product.findOne({
              where: {
                id: _productId
              }
            }).then(function (product) {
              if (product) {
                return _models.db.product.update({
                  categoryId: categoryId ? categoryId : product.categoryId,
                  subCategoryId: subCategoryId ? subCategoryId : product.subCategoryId,
                  childCategoryId: childCategoryId ? childCategoryId : product.childCategoryId,
                  name: name,
                  slug: slug,
                  status: parseInt(status) ? "active" : "inactive",
                  brand: brand,
                  unitSize: unitSize,
                  desc: desc,
                  buyerPrice: buyerPrice,
                  price: price,
                  qty: qty,
                  discount: discount,
                  discountPer: discountPer,
                  total: total,
                  netPrice: netPrice,
                  photo: req.file ? req.file.location : product.photo
                }, {
                  where: {
                    id: _productId
                  }
                });
              }
              throw new RequestError("Not Found Product", 409);
            }).then(function (p) {
              if (newaddimage) {
                var _JSON$parse4;
                (_JSON$parse4 = JSON.parse(newaddimage)) === null || _JSON$parse4 === void 0 || _JSON$parse4.map(function (item) {
                  return _models.db.productphoto.create({
                    imgUrl: item === null || item === void 0 ? void 0 : item.imageUrl,
                    productId: _productId
                  });
                });
              }
              if (size) {
                _models.db.productsize.destroy({
                  where: {
                    productId: _productId
                  }
                });
                _models.db.productsize.bulkCreate(JSON.parse(size).map(function (_ref2) {
                  var size = _ref2.size,
                    amount = _ref2.amount;
                  return {
                    size: size,
                    amount: amount,
                    productId: _productId
                  };
                }));
              }
              if (images) {
                _models.db.productphoto.destroy({
                  where: {
                    productId: _productId
                  }
                });
                _models.db.productphoto.bulkCreate(JSON.parse(images).map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    productId: _productId
                  });
                }));
              }
              res.status(200).json({
                success: true,
                msg: "Updated Successfully"
              });
            })["catch"](function (err) {
              next(err);
            });
            _context6.next = 8;
            break;
          case 5:
            _context6.prev = 5;
            _context6.t0 = _context6["catch"](0);
            throw new RequestError("Error");
          case 8:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 5]]);
    }))();
  },
  getProductListByCategory: function getProductListByCategory(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _models.db.product.findAll({
              order: [["createdAt", "DESC"]],
              where: {
                categoryId: req.query.categoryId,
                subCategoryId: req.query.subCategoryId
              }
            }).then(function (list) {
              res.status(200).json({
                success: true,
                data: list
              });
            })["catch"](function (err) {
              next(err);
            });
            _context7.next = 7;
            break;
          case 4:
            _context7.prev = 4;
            _context7.t0 = _context7["catch"](0);
            throw new RequestError("Error");
          case 7:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 4]]);
    }))();
  },
  getProductListById: function getProductListById(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _models.db.product.findAll({
              where: {
                id: req.query.id
              },
              include: [{
                model: _models.db.productphoto,
                attributes: ["id", "imgUrl"]
              }],
              order: [["createdAt", "DESC"]]
            }).then(function (list) {
              res.status(200).json({
                success: true,
                data: list
              });
            })["catch"](function (err) {
              next(err);
            });
            _context8.next = 7;
            break;
          case 4:
            _context8.prev = 4;
            _context8.t0 = _context8["catch"](0);
            throw new RequestError("Error");
          case 7:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 4]]);
    }))();
  },
  getWebProductListById: function getWebProductListById(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var size;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _models.db.productsize.findAll({
              where: {
                productId: req.query.id
              }
            });
          case 3:
            size = _context9.sent;
            _models.db.product.findOne({
              where: {
                id: req.query.id
              },
              include: [{
                model: _models.db.productphoto,
                attributes: ["id", "imgUrl"]
              }],
              order: [["createdAt", "DESC"]]
            }).then(function (list) {
              res.status(200).json({
                success: true,
                data: list,
                datasize: size
              });
            })["catch"](function (err) {
              next(err);
            });
            _context9.next = 10;
            break;
          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9["catch"](0);
            throw new RequestError("Error");
          case 10:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 7]]);
    }))();
  },
  addProductOffer: function addProductOffer(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var _req$body3, _productId2, qty, discount_per, discount_price, total, net_price;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _req$body3 = req.body, _productId2 = _req$body3.productId, qty = _req$body3.qty, discount_per = _req$body3.discount_per, discount_price = _req$body3.discount_price, total = _req$body3.total, net_price = _req$body3.net_price;
            _models.db.ProductOffer.findOne({
              where: {
                id: _productId2
              }
            }).then(function (list) {
              if (!list) {
                return _models.db.ProductOffer.create({
                  productId: _productId2,
                  image: req.file ? req.file.location : "",
                  qty: qty,
                  discount_per: discount_per,
                  discount_price: discount_price,
                  total: total,
                  net_price: net_price
                });
              } else {
                return _models.db.ProductOffer.update({
                  qty: qty,
                  discount_per: discount_per,
                  discount_price: discount_price,
                  total: total,
                  net_price: net_price
                }, {
                  where: {
                    id: list.id
                  }
                });
              }
            }).then(function (p) {
              res.status(200).json({
                success: true,
                msg: "Successfully"
              });
            })["catch"](function (err) {
              next(err);
            });
            _context10.next = 8;
            break;
          case 5:
            _context10.prev = 5;
            _context10.t0 = _context10["catch"](0);
            throw new RequestError("Error");
          case 8:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 5]]);
    }))();
  },
  getProductOffer: function getProductOffer(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _models.db.ProductOffer.findAll({
              include: [{
                model: _models.db.product,
                attributes: ["id", "categoryId", "price", "item_name", "description", "brand"],
                include: [{
                  model: _models.db.category,
                  attributes: ["id", "name"]
                }]
              }]
            }).then(function (list) {
              res.status(200).json({
                success: true,
                data: list
              });
            })["catch"](function (err) {
              next(err);
            });
            _context11.next = 7;
            break;
          case 4:
            _context11.prev = 4;
            _context11.t0 = _context11["catch"](0);
            throw new RequestError("Error");
          case 7:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 4]]);
    }))();
  },
  searchProductBySubCat: function searchProductBySubCat(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _models.db.SubCategory.findOne({
              where: {
                sub_name: req.body.subCat
              }
            }).then(function (data) {
              if (data) {
                return _models.db.product.findAll({
                  where: {
                    subCategoryId: data.id
                  }
                });
              }
            }).then(function (list) {
              console.log(JSON.stringify(list));
              res.status(200).json({
                success: true,
                data: list
              });
            });
            _context12.next = 7;
            break;
          case 4:
            _context12.prev = 4;
            _context12.t0 = _context12["catch"](0);
            throw new RequestError("Error");
          case 7:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 4]]);
    }))();
  },
  productDelete: function productDelete(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _models.db.product.findOne({
              where: {
                id: parseInt(req.query.id)
              }
            }).then(function (product) {
              if (product) {
                return _models.db.product.destroy({
                  where: {
                    id: product.id
                  }
                });
              }
              throw new RequestError("Product is not found");
            }).then(function (re) {
              return res.status(200).json({
                status: "deleted Product Seccessfully"
              });
            })["catch"](function (err) {
              next(err);
            });
          case 1:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }))();
  },
  productOfferDelete: function productOfferDelete(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _models.db.ProductOffer.findOne({
              where: {
                id: parseInt(req.params.id)
              }
            }).then(function (product) {
              if (product) {
                return _models.db.ProductOffer.destroy({
                  where: {
                    id: product.id
                  }
                });
              }
              throw new RequestError("Product is not found");
            }).then(function (re) {
              return res.status(200).json({
                status: "deleted Product Seccessfully"
              });
            })["catch"](function (err) {
              next(err);
            });
          case 1:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }))();
  },
  multiplePhotoUpload: function multiplePhotoUpload(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
      var attachmentEntries, productId, i;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            attachmentEntries = [];
            productId = req.body.productId;
            for (i = 0; i < req.files.length; i++) {
              attachmentEntries.push({
                productId: productId,
                name: req.files[i].filename,
                mime: req.files[i].mimetype,
                imgUrl: req.files[i].path
              });
            }
            _models.db.product.findOne({
              where: {
                id: productId
              }
            }).then(function (r) {
              if (r) {
                // return queue.create('img-upload', {
                //     productId: productId,
                //     productName: r.item_name,
                //     attachmentEntries: attachmentEntries,
                // }).save();
                for (var i = 0; i < req.files.length; i++) {
                  _models.db.productphoto.create(_objectSpread({}, attachmentEntries[i]));
                }
              }
            }).then(function (r) {
              res.status(200).json({
                success: true,
                data: req.files
              });
            })["catch"](function (error) {
              console.log(error);
              res.status(500).json({
                errors: ["Error insert photo"]
              });
            });
          case 4:
          case "end":
            return _context15.stop();
        }
      }, _callee15);
    }))();
  },
  getAllPhoto: function getAllPhoto(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            _models.db.product.findAll({
              order: [["createdAt", "DESC"]],
              attributes: ["id", "name", "brand"],
              include: [{
                model: _models.db.productphoto,
                attributes: ["id", "imgUrl"]
              }]
            }).then(function (data) {
              res.status(200).json({
                success: true,
                data: data
              });
            })["catch"](function (err) {
              next(err);
            });
            _context16.next = 7;
            break;
          case 4:
            _context16.prev = 4;
            _context16.t0 = _context16["catch"](0);
            throw new RequestError("Error");
          case 7:
          case "end":
            return _context16.stop();
        }
      }, _callee16, null, [[0, 4]]);
    }))();
  },
  deleteSliderPhoto: function deleteSliderPhoto(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            _models.db.productphoto.findOne({
              where: {
                id: parseInt(req.query.id)
              }
            }).then(function (product) {
              if (product) {
                return _models.db.productphoto.destroy({
                  where: {
                    id: req.query.id
                  }
                });
              }
              throw new RequestError("Product is not found");
            }).then(function (re) {
              return res.status(200).json({
                status: "deleted Product Seccessfully"
              });
            })["catch"](function (err) {
              next(err);
            });
          case 1:
          case "end":
            return _context17.stop();
        }
      }, _callee17);
    }))();
  },
  //All GroceryStample product
  // edit to sale product
  getAllGrocerryStaples: function getAllGrocerryStaples(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            _models.db.product.findAll({
              // attributes: ["id", "slug"],
              // where: { discount: 'grocery-staple' },
              order: [["discountPer", "DESC"]],
              limit: 8
            }).then(function (product) {
              res.status(200).json({
                success: true,
                data: product || []
              });
            })["catch"](function (err) {
              next(err);
            });
            _context18.next = 7;
            break;
          case 4:
            _context18.prev = 4;
            _context18.t0 = _context18["catch"](0);
            throw new RequestError("Error");
          case 7:
          case "end":
            return _context18.stop();
        }
      }, _callee18, null, [[0, 4]]);
    }))();
  },
  getAllProductBySlug: function getAllProductBySlug(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            _models.db.category.findOne({
              attributes: ["id"],
              include: [{
                model: _models.db.product,
                order: [["createdAt", "DESC"]],
                include: [{
                  model: _models.db.productphoto,
                  attributes: ["id", "imgUrl"]
                }]
              }]
            }).then(function (product) {
              res.status(200).json({
                success: true,
                data: product
              });
            })["catch"](function (err) {
              next(err);
            });
            _context19.next = 7;
            break;
          case 4:
            _context19.prev = 4;
            _context19.t0 = _context19["catch"](0);
            throw new RequestError("Error");
          case 7:
          case "end":
            return _context19.stop();
        }
      }, _callee19, null, [[0, 4]]);
    }))();
  },
  // filter product
  getFilterbyProduct: function getFilterbyProduct(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
      var search;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            search = "%%";
            if (req.query.search) {
              search = "%" + req.query.search + "%";
            }
            _models.db.SubCategory.findAll({
              attributes: ["id", "sub_name"],
              include: [{
                model: _models.db.product,
                order: [["createdAt", "DESC"]],
                required: true,
                where: (0, _defineProperty2["default"])({}, Op.or, [{
                  name: (0, _defineProperty2["default"])({}, Op.like, search),
                  slug: (0, _defineProperty2["default"])({}, Op.like, search)
                }])
              }]
            }).then(function (product) {
              res.status(200).json({
                success: true,
                data: product
              });
            })["catch"](function (err) {
              next(err);
            });
            _context20.next = 9;
            break;
          case 6:
            _context20.prev = 6;
            _context20.t0 = _context20["catch"](0);
            throw new RequestError("Error");
          case 9:
          case "end":
            return _context20.stop();
        }
      }, _callee20, null, [[0, 6]]);
    }))();
  },
  GetAllByCategory: function GetAllByCategory(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            _context21.prev = 0;
            _models.db.SubCategory.findOne({
              where: {
                sub_name: req.body.name
              },
              include: [{
                model: _models.db.SubChildCategory,
                include: [{
                  model: _models.db.product,
                  order: [["createdAt", "DESC"]],
                  include: [{
                    model: _models.db.productphoto,
                    attributes: ["id", "imgUrl"]
                  }]
                }]
              }]
            }).then(function (product) {
              res.status(200).json({
                success: true,
                data: product
              });
            })["catch"](function (err) {
              next(err);
            });
            _context21.next = 7;
            break;
          case 4:
            _context21.prev = 4;
            _context21.t0 = _context21["catch"](0);
            throw new RequestError("Error");
          case 7:
          case "end":
            return _context21.stop();
        }
      }, _callee21, null, [[0, 4]]);
    }))();
  },
  // aws image delete
  awsProductPhotoDelete: function awsProductPhotoDelete(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
      var _req$body4, id, imgUrl;
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            try {
              _req$body4 = req.body, id = _req$body4.id, imgUrl = _req$body4.imgUrl; // db.productphoto.destroy({where: {imgUrl, id}})
              // deleteFileFromS3(imgUrl)
              _models.db.productphoto.destroy({
                where: {
                  id: id
                }
              }).then(function (success) {
                res.status(200).json({
                  success: true,
                  msg: "Successflly deleted image from s3 Bucket"
                });
              });
            } catch (err) {
              next(err);
              // res.status(500).json({ 'success':false, msg: err})
            }
          case 1:
          case "end":
            return _context22.stop();
        }
      }, _callee22);
    }))();
  },
  getProductSubChildCat: function getProductSubChildCat(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
      var _req$body5, subCategoryId, childCategoryId;
      return _regeneratorRuntime().wrap(function _callee23$(_context23) {
        while (1) switch (_context23.prev = _context23.next) {
          case 0:
            try {
              _req$body5 = req.body, subCategoryId = _req$body5.subCategoryId, childCategoryId = _req$body5.childCategoryId;
              _models.db.product.findAll({
                where: {
                  childCategoryId: childCategoryId,
                  subCategoryId: childCategoryId
                }
              }).then(function (product) {
                res.status(200).json({
                  success: true,
                  data: product
                });
              })["catch"](function (err) {
                next(err);
              });
            } catch (err) {
              next(err);
              // res.status(500).json({ 'success':false, msg: err})
            }
          case 1:
          case "end":
            return _context23.stop();
        }
      }, _callee23);
    }))();
  },
  getProductSuggest: function getProductSuggest(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
      return _regeneratorRuntime().wrap(function _callee24$(_context24) {
        while (1) switch (_context24.prev = _context24.next) {
          case 0:
            try {
              // const{ subCategoryId, childCategoryId } = req.body;
              _models.db.product.findAll({
                // where: { childCategoryId: childCategoryId, subCategoryId: childCategoryId },
                order: Sequelize.literal("RAND()"),
                limit: 8
              }).then(function (product) {
                res.status(200).json({
                  success: true,
                  data: product
                });
              })["catch"](function (err) {
                console.log(err);
                next(err);
              });
            } catch (err) {
              next(err);
              // res.status(500).json({ 'success':false, msg: err})
            }
          case 1:
          case "end":
            return _context24.stop();
        }
      }, _callee24);
    }))();
  },
  getSizeProduct: function getSizeProduct(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
      var _productId3;
      return _regeneratorRuntime().wrap(function _callee25$(_context25) {
        while (1) switch (_context25.prev = _context25.next) {
          case 0:
            try {
              _productId3 = req.query.productId;
              _models.db.productsize.findAll({
                where: {
                  productId: _productId3
                }
              }).then(function (product) {
                res.status(200).json({
                  success: true,
                  data: product
                });
              })["catch"](function (err) {
                console.log(err);
                next(err);
              });
            } catch (err) {
              next(err);
              res.status(500).json({
                success: false,
                msg: err
              });
            }
          case 1:
          case "end":
            return _context25.stop();
        }
      }, _callee25);
    }))();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwicmVxdWlyZSIsIl9jb25maWciLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2F3c1NkayIsIm93bktleXMiLCJlIiwiciIsInQiLCJPYmplY3QiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiX3JlcXVpcmUiLCJPcCIsIlNlcXVlbGl6ZSIsInMzIiwiQVdTIiwiUzMiLCJhY2Nlc3NLZXlJZCIsImNvbmZpZyIsImFwcCIsIkFXU19BQ0NFU1NfS0VZIiwic2VjcmV0QWNjZXNzS2V5IiwiQVdTX1NFQ1JFVF9LRVkiLCJkZWxldGVGaWxlRnJvbVMzIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yMiIsIl9jYWxsZWUiLCJpbWdVcmwiLCJsYXN0SXRlbSIsInBhcmFtcyIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsIkJ1Y2tldCIsIktleSIsImRlbGV0ZU9iamVjdCIsImVycm9yIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsImFzc2VydCIsImlzTm90T2siLCJfeCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsImdldFBob3RvUHJvZHVjdCIsInJlcSIsInJlcyIsIl9jYWxsZWUyIiwicHJvZHVjdElkIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwicXVlcnkiLCJkYiIsInByb2R1Y3RwaG90byIsImZpbmRBbGwiLCJ3aGVyZSIsInByb2R1Y3QiLCJzdGF0dXMiLCJqc29uIiwib2siLCJhZGRQcm9kdWN0IiwiX2NhbGxlZTMiLCJfcmVxJGJvZHkiLCJjYXRlZ29yeUlkIiwic3ViQ2F0ZWdvcnlJZCIsImNoaWxkQ2F0ZWdvcnlJZCIsInNsdWciLCJicmFuZCIsInVuaXRTaXplIiwic29ydERlc2MiLCJkZXNjIiwiYnV5ZXJQcmljZSIsInByaWNlIiwicXR5IiwiZGlzY291bnQiLCJkaXNjb3VudFBlciIsInRvdGFsIiwibmV0UHJpY2UiLCJpbWFnZSIsInNpemUiLCJuZXdhZGRpbWFnZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImJvZHkiLCJwYXJzZUludCIsInBob3RvIiwiZmlsZSIsInBhdGgiLCJfSlNPTiRwYXJzZSIsIl9KU09OJHBhcnNlMyIsIkpTT04iLCJwYXJzZSIsIm1hcCIsIml0ZW0iLCJkYXRhVmFsdWVzIiwiaWQiLCJfSlNPTiRwYXJzZTIiLCJpbWFnZVVybCIsInByb2R1Y3RzaXplIiwiYW1vdW50Iiwic3VjY2VzcyIsIm1zZyIsImVyciIsInQwIiwiaW5kZXgiLCJfY2FsbGVlNCIsIl9yZXEkcXVlcnkiLCJzdXBwbGllcklkIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0Iiwib3JkZXIiLCJSZXF1ZXN0RXJyb3IiLCJnZXRBbGxQcm9kdWN0TGlzdCIsIl9jYWxsZWU1IiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwiaW5jbHVkZSIsIm1vZGVsIiwiU3ViQ2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwiY2F0ZWdvcnkiLCJ1cGRhdGUiLCJfY2FsbGVlNiIsIl9yZXEkYm9keTIiLCJfcHJvZHVjdElkIiwiaW1hZ2VzIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiZmluZE9uZSIsImxvY2F0aW9uIiwiX0pTT04kcGFyc2U0IiwiZGVzdHJveSIsImJ1bGtDcmVhdGUiLCJfcmVmMiIsImdldFByb2R1Y3RMaXN0QnlDYXRlZ29yeSIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwibGlzdCIsImdldFByb2R1Y3RMaXN0QnlJZCIsIl9jYWxsZWU4IiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwiZ2V0V2ViUHJvZHVjdExpc3RCeUlkIiwiX2NhbGxlZTkiLCJfY2FsbGVlOSQiLCJfY29udGV4dDkiLCJkYXRhc2l6ZSIsImFkZFByb2R1Y3RPZmZlciIsIl9jYWxsZWUxMCIsIl9yZXEkYm9keTMiLCJfcHJvZHVjdElkMiIsImRpc2NvdW50X3BlciIsImRpc2NvdW50X3ByaWNlIiwibmV0X3ByaWNlIiwiX2NhbGxlZTEwJCIsIl9jb250ZXh0MTAiLCJQcm9kdWN0T2ZmZXIiLCJnZXRQcm9kdWN0T2ZmZXIiLCJfY2FsbGVlMTEiLCJfY2FsbGVlMTEkIiwiX2NvbnRleHQxMSIsInNlYXJjaFByb2R1Y3RCeVN1YkNhdCIsIl9jYWxsZWUxMiIsIl9jYWxsZWUxMiQiLCJfY29udGV4dDEyIiwic3ViX25hbWUiLCJzdWJDYXQiLCJzdHJpbmdpZnkiLCJwcm9kdWN0RGVsZXRlIiwiX2NhbGxlZTEzIiwiX2NhbGxlZTEzJCIsIl9jb250ZXh0MTMiLCJyZSIsInByb2R1Y3RPZmZlckRlbGV0ZSIsIl9jYWxsZWUxNCIsIl9jYWxsZWUxNCQiLCJfY29udGV4dDE0IiwibXVsdGlwbGVQaG90b1VwbG9hZCIsIl9jYWxsZWUxNSIsImF0dGFjaG1lbnRFbnRyaWVzIiwiX2NhbGxlZTE1JCIsIl9jb250ZXh0MTUiLCJmaWxlcyIsImZpbGVuYW1lIiwibWltZSIsIm1pbWV0eXBlIiwiZXJyb3JzIiwiZ2V0QWxsUGhvdG8iLCJfY2FsbGVlMTYiLCJfY2FsbGVlMTYkIiwiX2NvbnRleHQxNiIsImRlbGV0ZVNsaWRlclBob3RvIiwiX2NhbGxlZTE3IiwiX2NhbGxlZTE3JCIsIl9jb250ZXh0MTciLCJnZXRBbGxHcm9jZXJyeVN0YXBsZXMiLCJfY2FsbGVlMTgiLCJfY2FsbGVlMTgkIiwiX2NvbnRleHQxOCIsImxpbWl0IiwiZ2V0QWxsUHJvZHVjdEJ5U2x1ZyIsIl9jYWxsZWUxOSIsIl9jYWxsZWUxOSQiLCJfY29udGV4dDE5IiwiZ2V0RmlsdGVyYnlQcm9kdWN0IiwiX2NhbGxlZTIwIiwic2VhcmNoIiwiX2NhbGxlZTIwJCIsIl9jb250ZXh0MjAiLCJyZXF1aXJlZCIsIm9yIiwibGlrZSIsIkdldEFsbEJ5Q2F0ZWdvcnkiLCJfY2FsbGVlMjEiLCJfY2FsbGVlMjEkIiwiX2NvbnRleHQyMSIsIlN1YkNoaWxkQ2F0ZWdvcnkiLCJhd3NQcm9kdWN0UGhvdG9EZWxldGUiLCJfY2FsbGVlMjIiLCJfcmVxJGJvZHk0IiwiX2NhbGxlZTIyJCIsIl9jb250ZXh0MjIiLCJnZXRQcm9kdWN0U3ViQ2hpbGRDYXQiLCJfY2FsbGVlMjMiLCJfcmVxJGJvZHk1IiwiX2NhbGxlZTIzJCIsIl9jb250ZXh0MjMiLCJnZXRQcm9kdWN0U3VnZ2VzdCIsIl9jYWxsZWUyNCIsIl9jYWxsZWUyNCQiLCJfY29udGV4dDI0IiwibGl0ZXJhbCIsImdldFNpemVQcm9kdWN0IiwiX2NhbGxlZTI1IiwiX3Byb2R1Y3RJZDMiLCJfY2FsbGVlMjUkIiwiX2NvbnRleHQyNSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3Byb2R1Y3QvcHJvZHVjdC5jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5jb25zdCB7IE9wLCBTZXF1ZWxpemUgfSA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7XHJcbi8vIGltcG9ydCB7IHF1ZXVlIH0gZnJvbSAnLi4vLi4vLi4va3VlJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCBBV1MgZnJvbSBcImF3cy1zZGtcIjtcclxuXHJcbmNvbnN0IHMzID0gbmV3IEFXUy5TMyh7XHJcbiAgYWNjZXNzS2V5SWQ6IGNvbmZpZy5hcHAuQVdTX0FDQ0VTU19LRVksXHJcbiAgc2VjcmV0QWNjZXNzS2V5OiBjb25maWcuYXBwLkFXU19TRUNSRVRfS0VZLFxyXG59KTtcclxuXHJcbnZhciBkZWxldGVGaWxlRnJvbVMzID0gYXN5bmMgKGltZ1VybCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBsYXN0SXRlbSA9IGltZ1VybC5zdWJzdHJpbmcoaW1nVXJsLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xyXG4gICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgQnVja2V0OiBcInBob3RvYWJoaVwiLFxyXG4gICAgICBLZXk6IGxhc3RJdGVtLFxyXG4gICAgfTtcclxuICAgIHMzLmRlbGV0ZU9iamVjdChwYXJhbXMsIChlcnJvciwgZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3Iuc3RhY2spO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFzc2VydC5pc05vdE9rKGVycm9yLCBcIlByb21pc2UgZXJyb3JcIik7XHJcbiAgICBkb25lKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8qIEFkZCB1c2VyIGFwaSBzdGFydCBoZXJlLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4qL1xyXG4gIGFzeW5jIGdldFBob3RvUHJvZHVjdChyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0SWQgfSA9IHJlcS5xdWVyeTtcclxuICAgIGRiLnByb2R1Y3RwaG90b1xyXG4gICAgICAuZmluZEFsbCh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgIHByb2R1Y3RJZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG9rOiB0cnVlLCBkYXRhOiBwcm9kdWN0IH0pO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIGFzeW5jIGFkZFByb2R1Y3QocmVxLCByZXMsIG5leHQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBjYXRlZ29yeUlkLFxyXG4gICAgICAgIHN1YkNhdGVnb3J5SWQsXHJcbiAgICAgICAgY2hpbGRDYXRlZ29yeUlkLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgc2x1ZyxcclxuICAgICAgICBicmFuZCxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgdW5pdFNpemUsXHJcbiAgICAgICAgc29ydERlc2MsXHJcbiAgICAgICAgZGVzYyxcclxuICAgICAgICBidXllclByaWNlLFxyXG4gICAgICAgIHByaWNlLFxyXG4gICAgICAgIHF0eSxcclxuICAgICAgICBkaXNjb3VudCxcclxuICAgICAgICBkaXNjb3VudFBlcixcclxuICAgICAgICB0b3RhbCxcclxuICAgICAgICBuZXRQcmljZSxcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICBzaXplLFxyXG4gICAgICAgIG5ld2FkZGltYWdlLFxyXG4gICAgICB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgICBkYi5wcm9kdWN0XHJcbiAgICAgICAgLmNyZWF0ZSh7XHJcbiAgICAgICAgICBjYXRlZ29yeUlkOiBjYXRlZ29yeUlkLFxyXG4gICAgICAgICAgc3ViQ2F0ZWdvcnlJZDogc3ViQ2F0ZWdvcnlJZCxcclxuICAgICAgICAgIGNoaWxkQ2F0ZWdvcnlJZDogY2hpbGRDYXRlZ29yeUlkIHx8IDAsXHJcbiAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgc2x1Zzogc2x1ZyxcclxuICAgICAgICAgIHN0YXR1czogcGFyc2VJbnQoc3RhdHVzKSA/IFwiYWN0aXZlXCIgOiBcImluYWN0aXZlXCIsXHJcbiAgICAgICAgICBicmFuZDogYnJhbmQsXHJcbiAgICAgICAgICB1bml0U2l6ZTogdW5pdFNpemUsXHJcbiAgICAgICAgICBzb3J0RGVzYzogc29ydERlc2MsXHJcbiAgICAgICAgICBkZXNjOiBkZXNjLFxyXG4gICAgICAgICAgYnV5ZXJQcmljZTogYnV5ZXJQcmljZSxcclxuICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgIHF0eTogcXR5LFxyXG4gICAgICAgICAgZGlzY291bnQ6IGRpc2NvdW50LFxyXG4gICAgICAgICAgZGlzY291bnRQZXI6IGRpc2NvdW50UGVyLFxyXG4gICAgICAgICAgdG90YWw6IHRvdGFsLFxyXG4gICAgICAgICAgbmV0UHJpY2U6IG5ldFByaWNlLFxyXG4gICAgICAgICAgcGhvdG86IHJlcS5maWxlID8gcmVxLmZpbGUucGF0aCA6IFwiXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgSlNPTi5wYXJzZShpbWFnZSk/Lm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgICAgZGIucHJvZHVjdHBob3RvLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgaW1nVXJsOiBpdGVtPy5wYXRoLFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5kYXRhVmFsdWVzLmlkLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChuZXdhZGRpbWFnZSkge1xyXG4gICAgICAgICAgICBKU09OLnBhcnNlKG5ld2FkZGltYWdlKT8ubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgICAgIGRiLnByb2R1Y3RwaG90by5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgaW1nVXJsOiBpdGVtPy5pbWFnZVVybCxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdElkLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBKU09OLnBhcnNlKHNpemUpPy5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgICAgIGRiLnByb2R1Y3RzaXplLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgc2l6ZTogaXRlbT8uc2l6ZSxcclxuICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuZGF0YVZhbHVlcy5pZCxcclxuICAgICAgICAgICAgICBhbW91bnQ6IGl0ZW0/LmFtb3VudCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXNcclxuICAgICAgICAgICAgLnN0YXR1cygyMDApXHJcbiAgICAgICAgICAgIC5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbXNnOiBcIlN1Y2Nlc3NmdWxseSBpbnNlcnRlZCBwcm9kdWN0XCIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAvLyB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdFcnJvcicpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhc3luYyBpbmRleChyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBzdXBwbGllcklkLCBjYXRlZ29yeUlkLCBzdWJDYXRlZ29yeUlkIH0gPSByZXEucXVlcnk7XHJcbiAgICAgIGRiLnByb2R1Y3RcclxuICAgICAgICAuZmluZEFsbCh7XHJcbiAgICAgICAgICBvcmRlcjogW1tcImNyZWF0ZWRBdFwiLCBcIkRFU0NcIl1dLFxyXG4gICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgc3VwcGxpZXJJZDogc3VwcGxpZXJJZCxcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogY2F0ZWdvcnlJZCxcclxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnlJZDogc3ViQ2F0ZWdvcnlJZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBwcm9kdWN0IH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKFwiRXJyb3JcIik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgZ2V0QWxsUHJvZHVjdExpc3QocmVxLCByZXMsIG5leHQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRiLnByb2R1Y3RcclxuICAgICAgICAuZmluZEFsbCh7XHJcbiAgICAgICAgICBvcmRlcjogW1tcImNyZWF0ZWRBdFwiLCBcIkRFU0NcIl1dLFxyXG4gICAgICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbW9kZWw6IGRiLlN1YkNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcImlkXCIsIFwic3ViX25hbWVcIl0sXHJcbiAgICAgICAgICAgICAgaW5jbHVkZTogW3sgbW9kZWw6IGRiLmNhdGVnb3J5LCBhdHRyaWJ1dGVzOiBbXCJpZFwiLCBcIm5hbWVcIl0gfV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgcHJvZHVjdCB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICBuZXh0KGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcihcIkVycm9yXCIpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFzeW5jIHVwZGF0ZShyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHByb2R1Y3RJZCxcclxuICAgICAgICBjYXRlZ29yeUlkLFxyXG4gICAgICAgIHN1YkNhdGVnb3J5SWQsXHJcbiAgICAgICAgY2hpbGRDYXRlZ29yeUlkLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgc2x1ZyxcclxuICAgICAgICBicmFuZCxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgdW5pdFNpemUsXHJcbiAgICAgICAgZGVzYyxcclxuICAgICAgICBidXllclByaWNlLFxyXG4gICAgICAgIHByaWNlLFxyXG4gICAgICAgIHF0eSxcclxuICAgICAgICBkaXNjb3VudCxcclxuICAgICAgICBkaXNjb3VudFBlcixcclxuICAgICAgICB0b3RhbCxcclxuICAgICAgICBuZXRQcmljZSxcclxuICAgICAgICBpbWFnZXMsXHJcbiAgICAgICAgc2l6ZSxcclxuICAgICAgICBuZXdhZGRpbWFnZSxcclxuICAgICAgfSA9IHJlcS5ib2R5O1xyXG4gICAgICBkYi5wcm9kdWN0XHJcbiAgICAgICAgLmZpbmRPbmUoeyB3aGVyZTogeyBpZDogcHJvZHVjdElkIH0gfSlcclxuICAgICAgICAudGhlbigocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRiLnByb2R1Y3QudXBkYXRlKFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SWQ6IGNhdGVnb3J5SWQgPyBjYXRlZ29yeUlkIDogcHJvZHVjdC5jYXRlZ29yeUlkLFxyXG4gICAgICAgICAgICAgICAgc3ViQ2F0ZWdvcnlJZDogc3ViQ2F0ZWdvcnlJZFxyXG4gICAgICAgICAgICAgICAgICA/IHN1YkNhdGVnb3J5SWRcclxuICAgICAgICAgICAgICAgICAgOiBwcm9kdWN0LnN1YkNhdGVnb3J5SWQsXHJcbiAgICAgICAgICAgICAgICBjaGlsZENhdGVnb3J5SWQ6IGNoaWxkQ2F0ZWdvcnlJZFxyXG4gICAgICAgICAgICAgICAgICA/IGNoaWxkQ2F0ZWdvcnlJZFxyXG4gICAgICAgICAgICAgICAgICA6IHByb2R1Y3QuY2hpbGRDYXRlZ29yeUlkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHNsdWc6IHNsdWcsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHBhcnNlSW50KHN0YXR1cykgPyBcImFjdGl2ZVwiIDogXCJpbmFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgYnJhbmQ6IGJyYW5kLFxyXG4gICAgICAgICAgICAgICAgdW5pdFNpemU6IHVuaXRTaXplLFxyXG4gICAgICAgICAgICAgICAgZGVzYzogZGVzYyxcclxuICAgICAgICAgICAgICAgIGJ1eWVyUHJpY2U6IGJ1eWVyUHJpY2UsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogcHJpY2UsXHJcbiAgICAgICAgICAgICAgICBxdHk6IHF0eSxcclxuICAgICAgICAgICAgICAgIGRpc2NvdW50OiBkaXNjb3VudCxcclxuICAgICAgICAgICAgICAgIGRpc2NvdW50UGVyOiBkaXNjb3VudFBlcixcclxuICAgICAgICAgICAgICAgIHRvdGFsOiB0b3RhbCxcclxuICAgICAgICAgICAgICAgIG5ldFByaWNlOiBuZXRQcmljZSxcclxuICAgICAgICAgICAgICAgIHBob3RvOiByZXEuZmlsZSA/IHJlcS5maWxlLmxvY2F0aW9uIDogcHJvZHVjdC5waG90byxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHsgd2hlcmU6IHsgaWQ6IHByb2R1Y3RJZCB9IH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoXCJOb3QgRm91bmQgUHJvZHVjdFwiLCA0MDkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHApID0+IHtcclxuICAgICAgICAgIGlmIChuZXdhZGRpbWFnZSkge1xyXG4gICAgICAgICAgICBKU09OLnBhcnNlKG5ld2FkZGltYWdlKT8ubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgICAgIGRiLnByb2R1Y3RwaG90by5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgaW1nVXJsOiBpdGVtPy5pbWFnZVVybCxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdElkLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2l6ZSkge1xyXG4gICAgICAgICAgICBkYi5wcm9kdWN0c2l6ZS5kZXN0cm95KHtcclxuICAgICAgICAgICAgICB3aGVyZTogeyBwcm9kdWN0SWQgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRiLnByb2R1Y3RzaXplLmJ1bGtDcmVhdGUoXHJcbiAgICAgICAgICAgICAgSlNPTi5wYXJzZShzaXplKS5tYXAoKHsgc2l6ZSwgYW1vdW50IH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICBzaXplLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkLFxyXG4gICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGltYWdlcykge1xyXG4gICAgICAgICAgICBkYi5wcm9kdWN0cGhvdG8uZGVzdHJveSh7XHJcbiAgICAgICAgICAgICAgd2hlcmU6IHsgcHJvZHVjdElkOiBwcm9kdWN0SWQgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRiLnByb2R1Y3RwaG90by5idWxrQ3JlYXRlKFxyXG4gICAgICAgICAgICAgIEpTT04ucGFyc2UoaW1hZ2VzKS5tYXAoKGl0ZW0pID0+ICh7IC4uLml0ZW0sIHByb2R1Y3RJZCB9KSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbXNnOiBcIlVwZGF0ZWQgU3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgbmV4dChlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoXCJFcnJvclwiKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIGdldFByb2R1Y3RMaXN0QnlDYXRlZ29yeShyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGIucHJvZHVjdFxyXG4gICAgICAgIC5maW5kQWxsKHtcclxuICAgICAgICAgIG9yZGVyOiBbW1wiY3JlYXRlZEF0XCIsIFwiREVTQ1wiXV0sXHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBjYXRlZ29yeUlkOiByZXEucXVlcnkuY2F0ZWdvcnlJZCxcclxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnlJZDogcmVxLnF1ZXJ5LnN1YkNhdGVnb3J5SWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGxpc3QpID0+IHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbGlzdCB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICBuZXh0KGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcihcIkVycm9yXCIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXN5bmMgZ2V0UHJvZHVjdExpc3RCeUlkKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkYi5wcm9kdWN0XHJcbiAgICAgICAgLmZpbmRBbGwoe1xyXG4gICAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5xdWVyeS5pZCB9LFxyXG4gICAgICAgICAgaW5jbHVkZTogW3sgbW9kZWw6IGRiLnByb2R1Y3RwaG90bywgYXR0cmlidXRlczogW1wiaWRcIiwgXCJpbWdVcmxcIl0gfV0sXHJcbiAgICAgICAgICBvcmRlcjogW1tcImNyZWF0ZWRBdFwiLCBcIkRFU0NcIl1dLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGxpc3QpID0+IHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbGlzdCB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICBuZXh0KGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcihcIkVycm9yXCIpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGdldFdlYlByb2R1Y3RMaXN0QnlJZChyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc2l6ZSA9IGF3YWl0IGRiLnByb2R1Y3RzaXplLmZpbmRBbGwoe1xyXG4gICAgICAgIHdoZXJlOiB7IHByb2R1Y3RJZDogcmVxLnF1ZXJ5LmlkIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBkYi5wcm9kdWN0XHJcbiAgICAgICAgLmZpbmRPbmUoe1xyXG4gICAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5xdWVyeS5pZCB9LFxyXG4gICAgICAgICAgaW5jbHVkZTogW3sgbW9kZWw6IGRiLnByb2R1Y3RwaG90bywgYXR0cmlidXRlczogW1wiaWRcIiwgXCJpbWdVcmxcIl0gfV0sXHJcbiAgICAgICAgICBvcmRlcjogW1tcImNyZWF0ZWRBdFwiLCBcIkRFU0NcIl1dLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGxpc3QpID0+IHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbGlzdCwgZGF0YXNpemU6IHNpemUgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgbmV4dChlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoXCJFcnJvclwiKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIGFkZFByb2R1Y3RPZmZlcihyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBwcm9kdWN0SWQsIHF0eSwgZGlzY291bnRfcGVyLCBkaXNjb3VudF9wcmljZSwgdG90YWwsIG5ldF9wcmljZSB9ID1cclxuICAgICAgICByZXEuYm9keTtcclxuICAgICAgZGIuUHJvZHVjdE9mZmVyLmZpbmRPbmUoeyB3aGVyZTogeyBpZDogcHJvZHVjdElkIH0gfSlcclxuICAgICAgICAudGhlbigobGlzdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFsaXN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYi5Qcm9kdWN0T2ZmZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICBpbWFnZTogcmVxLmZpbGUgPyByZXEuZmlsZS5sb2NhdGlvbiA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgcXR5OiBxdHksXHJcbiAgICAgICAgICAgICAgZGlzY291bnRfcGVyOiBkaXNjb3VudF9wZXIsXHJcbiAgICAgICAgICAgICAgZGlzY291bnRfcHJpY2U6IGRpc2NvdW50X3ByaWNlLFxyXG4gICAgICAgICAgICAgIHRvdGFsOiB0b3RhbCxcclxuICAgICAgICAgICAgICBuZXRfcHJpY2U6IG5ldF9wcmljZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZGIuUHJvZHVjdE9mZmVyLnVwZGF0ZShcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBxdHk6IHF0eSxcclxuICAgICAgICAgICAgICAgIGRpc2NvdW50X3BlcjogZGlzY291bnRfcGVyLFxyXG4gICAgICAgICAgICAgICAgZGlzY291bnRfcHJpY2U6IGRpc2NvdW50X3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IHRvdGFsLFxyXG4gICAgICAgICAgICAgICAgbmV0X3ByaWNlOiBuZXRfcHJpY2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7IHdoZXJlOiB7IGlkOiBsaXN0LmlkIH0gfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHApID0+IHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbXNnOiBcIlN1Y2Nlc3NmdWxseVwiIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKFwiRXJyb3JcIik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgZ2V0UHJvZHVjdE9mZmVyKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkYi5Qcm9kdWN0T2ZmZXIuZmluZEFsbCh7XHJcbiAgICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtb2RlbDogZGIucHJvZHVjdCxcclxuICAgICAgICAgICAgYXR0cmlidXRlczogW1xyXG4gICAgICAgICAgICAgIFwiaWRcIixcclxuICAgICAgICAgICAgICBcImNhdGVnb3J5SWRcIixcclxuICAgICAgICAgICAgICBcInByaWNlXCIsXHJcbiAgICAgICAgICAgICAgXCJpdGVtX25hbWVcIixcclxuICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgXCJicmFuZFwiLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBpbmNsdWRlOiBbeyBtb2RlbDogZGIuY2F0ZWdvcnksIGF0dHJpYnV0ZXM6IFtcImlkXCIsIFwibmFtZVwiXSB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigobGlzdCkgPT4ge1xyXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBsaXN0IH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKFwiRXJyb3JcIik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgc2VhcmNoUHJvZHVjdEJ5U3ViQ2F0KHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkYi5TdWJDYXRlZ29yeS5maW5kT25lKHtcclxuICAgICAgICB3aGVyZTogeyBzdWJfbmFtZTogcmVxLmJvZHkuc3ViQ2F0IH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYi5wcm9kdWN0LmZpbmRBbGwoe1xyXG4gICAgICAgICAgICAgIHdoZXJlOiB7IHN1YkNhdGVnb3J5SWQ6IGRhdGEuaWQgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigobGlzdCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xyXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBsaXN0IH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoXCJFcnJvclwiKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhc3luYyBwcm9kdWN0RGVsZXRlKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICBkYi5wcm9kdWN0XHJcbiAgICAgIC5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IHBhcnNlSW50KHJlcS5xdWVyeS5pZCkgfSB9KVxyXG4gICAgICAudGhlbigocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgICAgICByZXR1cm4gZGIucHJvZHVjdC5kZXN0cm95KHsgd2hlcmU6IHsgaWQ6IHByb2R1Y3QuaWQgfSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcihcIlByb2R1Y3QgaXMgbm90IGZvdW5kXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmUpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IFwiZGVsZXRlZCBQcm9kdWN0IFNlY2Nlc3NmdWxseVwiIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgcHJvZHVjdE9mZmVyRGVsZXRlKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICBkYi5Qcm9kdWN0T2ZmZXIuZmluZE9uZSh7IHdoZXJlOiB7IGlkOiBwYXJzZUludChyZXEucGFyYW1zLmlkKSB9IH0pXHJcbiAgICAgIC50aGVuKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgICAgIHJldHVybiBkYi5Qcm9kdWN0T2ZmZXIuZGVzdHJveSh7IHdoZXJlOiB7IGlkOiBwcm9kdWN0LmlkIH0gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoXCJQcm9kdWN0IGlzIG5vdCBmb3VuZFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdHVzOiBcImRlbGV0ZWQgUHJvZHVjdCBTZWNjZXNzZnVsbHlcIiB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBuZXh0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIG11bHRpcGxlUGhvdG9VcGxvYWQocmVxLCByZXMsIG5leHQpIHtcclxuICAgIGxldCBhdHRhY2htZW50RW50cmllcyA9IFtdO1xyXG4gICAgdmFyIHByb2R1Y3RJZCA9IHJlcS5ib2R5LnByb2R1Y3RJZDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVxLmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGF0dGFjaG1lbnRFbnRyaWVzLnB1c2goe1xyXG4gICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdElkLFxyXG4gICAgICAgIG5hbWU6IHJlcS5maWxlc1tpXS5maWxlbmFtZSxcclxuICAgICAgICBtaW1lOiByZXEuZmlsZXNbaV0ubWltZXR5cGUsXHJcbiAgICAgICAgaW1nVXJsOiByZXEuZmlsZXNbaV0ucGF0aCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGIucHJvZHVjdFxyXG4gICAgICAuZmluZE9uZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHByb2R1Y3RJZCB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocikgPT4ge1xyXG4gICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAvLyByZXR1cm4gcXVldWUuY3JlYXRlKCdpbWctdXBsb2FkJywge1xyXG4gICAgICAgICAgLy8gICAgIHByb2R1Y3RJZDogcHJvZHVjdElkLFxyXG4gICAgICAgICAgLy8gICAgIHByb2R1Y3ROYW1lOiByLml0ZW1fbmFtZSxcclxuICAgICAgICAgIC8vICAgICBhdHRhY2htZW50RW50cmllczogYXR0YWNobWVudEVudHJpZXMsXHJcbiAgICAgICAgICAvLyB9KS5zYXZlKCk7XHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcS5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkYi5wcm9kdWN0cGhvdG8uY3JlYXRlKHsgLi4uYXR0YWNobWVudEVudHJpZXNbaV0gfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocikgPT4ge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVxLmZpbGVzIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3JzOiBbXCJFcnJvciBpbnNlcnQgcGhvdG9cIl0gfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGdldEFsbFBob3RvKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkYi5wcm9kdWN0XHJcbiAgICAgICAgLmZpbmRBbGwoe1xyXG4gICAgICAgICAgb3JkZXI6IFtbXCJjcmVhdGVkQXRcIiwgXCJERVNDXCJdXSxcclxuICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcImlkXCIsIFwibmFtZVwiLCBcImJyYW5kXCJdLFxyXG4gICAgICAgICAgaW5jbHVkZTogW3sgbW9kZWw6IGRiLnByb2R1Y3RwaG90bywgYXR0cmlidXRlczogW1wiaWRcIiwgXCJpbWdVcmxcIl0gfV0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKFwiRXJyb3JcIik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgZGVsZXRlU2xpZGVyUGhvdG8ocmVxLCByZXMsIG5leHQpIHtcclxuICAgIGRiLnByb2R1Y3RwaG90b1xyXG4gICAgICAuZmluZE9uZSh7IHdoZXJlOiB7IGlkOiBwYXJzZUludChyZXEucXVlcnkuaWQpIH0gfSlcclxuICAgICAgLnRoZW4oKHByb2R1Y3QpID0+IHtcclxuICAgICAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICAgICAgcmV0dXJuIGRiLnByb2R1Y3RwaG90by5kZXN0cm95KHsgd2hlcmU6IHsgaWQ6IHJlcS5xdWVyeS5pZCB9IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKFwiUHJvZHVjdCBpcyBub3QgZm91bmRcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogXCJkZWxldGVkIFByb2R1Y3QgU2VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbmV4dChlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIC8vQWxsIEdyb2NlcnlTdGFtcGxlIHByb2R1Y3RcclxuICAvLyBlZGl0IHRvIHNhbGUgcHJvZHVjdFxyXG4gIGFzeW5jIGdldEFsbEdyb2NlcnJ5U3RhcGxlcyhyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGIucHJvZHVjdFxyXG4gICAgICAgIC5maW5kQWxsKHtcclxuICAgICAgICAgIC8vIGF0dHJpYnV0ZXM6IFtcImlkXCIsIFwic2x1Z1wiXSxcclxuICAgICAgICAgIC8vIHdoZXJlOiB7IGRpc2NvdW50OiAnZ3JvY2VyeS1zdGFwbGUnIH0sXHJcbiAgICAgICAgICBvcmRlcjogW1tcImRpc2NvdW50UGVyXCIsIFwiREVTQ1wiXV0sXHJcbiAgICAgICAgICBsaW1pdDogOCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHByb2R1Y3QgfHwgW10gfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgbmV4dChlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoXCJFcnJvclwiKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhc3luYyBnZXRBbGxQcm9kdWN0QnlTbHVnKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkYi5jYXRlZ29yeVxyXG4gICAgICAgIC5maW5kT25lKHtcclxuICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcImlkXCJdLFxyXG4gICAgICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbW9kZWw6IGRiLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgb3JkZXI6IFtbXCJjcmVhdGVkQXRcIiwgXCJERVNDXCJdXSxcclxuICAgICAgICAgICAgICBpbmNsdWRlOiBbXHJcbiAgICAgICAgICAgICAgICB7IG1vZGVsOiBkYi5wcm9kdWN0cGhvdG8sIGF0dHJpYnV0ZXM6IFtcImlkXCIsIFwiaW1nVXJsXCJdIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBwcm9kdWN0IH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKFwiRXJyb3JcIik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gZmlsdGVyIHByb2R1Y3RcclxuXHJcbiAgYXN5bmMgZ2V0RmlsdGVyYnlQcm9kdWN0KHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgc2VhcmNoID0gXCIlJVwiO1xyXG4gICAgICBpZiAocmVxLnF1ZXJ5LnNlYXJjaCkge1xyXG4gICAgICAgIHNlYXJjaCA9IFwiJVwiICsgcmVxLnF1ZXJ5LnNlYXJjaCArIFwiJVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGRiLlN1YkNhdGVnb3J5LmZpbmRBbGwoe1xyXG4gICAgICAgIGF0dHJpYnV0ZXM6IFtcImlkXCIsIFwic3ViX25hbWVcIl0sXHJcbiAgICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtb2RlbDogZGIucHJvZHVjdCxcclxuICAgICAgICAgICAgb3JkZXI6IFtbXCJjcmVhdGVkQXRcIiwgXCJERVNDXCJdXSxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgW09wLm9yXTogW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiB7IFtPcC5saWtlXTogc2VhcmNoIH0sIHNsdWc6IHsgW09wLmxpa2VdOiBzZWFyY2ggfSB9LFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAgIC50aGVuKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHByb2R1Y3QgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgbmV4dChlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoXCJFcnJvclwiKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhc3luYyBHZXRBbGxCeUNhdGVnb3J5KHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkYi5TdWJDYXRlZ29yeS5maW5kT25lKHtcclxuICAgICAgICB3aGVyZTogeyBzdWJfbmFtZTogcmVxLmJvZHkubmFtZSB9LFxyXG4gICAgICAgIGluY2x1ZGU6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbW9kZWw6IGRiLlN1YkNoaWxkQ2F0ZWdvcnksXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbDogZGIucHJvZHVjdCxcclxuICAgICAgICAgICAgICAgIG9yZGVyOiBbW1wiY3JlYXRlZEF0XCIsIFwiREVTQ1wiXV0sXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBbXHJcbiAgICAgICAgICAgICAgICAgIHsgbW9kZWw6IGRiLnByb2R1Y3RwaG90bywgYXR0cmlidXRlczogW1wiaWRcIiwgXCJpbWdVcmxcIl0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBwcm9kdWN0IH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKFwiRXJyb3JcIik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gYXdzIGltYWdlIGRlbGV0ZVxyXG4gIGFzeW5jIGF3c1Byb2R1Y3RQaG90b0RlbGV0ZShyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBpZCwgaW1nVXJsIH0gPSByZXEuYm9keTtcclxuICAgICAgLy8gZGIucHJvZHVjdHBob3RvLmRlc3Ryb3koe3doZXJlOiB7aW1nVXJsLCBpZH19KVxyXG4gICAgICAvLyBkZWxldGVGaWxlRnJvbVMzKGltZ1VybClcclxuXHJcbiAgICAgIGRiLnByb2R1Y3RwaG90b1xyXG4gICAgICAgIC5kZXN0cm95KHsgd2hlcmU6IHsgaWQ6IGlkIH0gfSlcclxuXHJcbiAgICAgICAgLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICAgIHJlc1xyXG4gICAgICAgICAgICAuc3RhdHVzKDIwMClcclxuICAgICAgICAgICAgLmpzb24oe1xyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgbXNnOiBcIlN1Y2Nlc3NmbGx5IGRlbGV0ZWQgaW1hZ2UgZnJvbSBzMyBCdWNrZXRcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgbmV4dChlcnIpO1xyXG4gICAgICAvLyByZXMuc3RhdHVzKDUwMCkuanNvbih7ICdzdWNjZXNzJzpmYWxzZSwgbXNnOiBlcnJ9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGdldFByb2R1Y3RTdWJDaGlsZENhdChyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBzdWJDYXRlZ29yeUlkLCBjaGlsZENhdGVnb3J5SWQgfSA9IHJlcS5ib2R5O1xyXG4gICAgICBkYi5wcm9kdWN0XHJcbiAgICAgICAgLmZpbmRBbGwoe1xyXG4gICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgY2hpbGRDYXRlZ29yeUlkOiBjaGlsZENhdGVnb3J5SWQsXHJcbiAgICAgICAgICAgIHN1YkNhdGVnb3J5SWQ6IGNoaWxkQ2F0ZWdvcnlJZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBwcm9kdWN0IH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBuZXh0KGVycik7XHJcbiAgICAgIC8vIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgJ3N1Y2Nlc3MnOmZhbHNlLCBtc2c6IGVycn0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBhc3luYyBnZXRQcm9kdWN0U3VnZ2VzdChyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc3R7IHN1YkNhdGVnb3J5SWQsIGNoaWxkQ2F0ZWdvcnlJZCB9ID0gcmVxLmJvZHk7XHJcbiAgICAgIGRiLnByb2R1Y3RcclxuICAgICAgICAuZmluZEFsbCh7XHJcbiAgICAgICAgICAvLyB3aGVyZTogeyBjaGlsZENhdGVnb3J5SWQ6IGNoaWxkQ2F0ZWdvcnlJZCwgc3ViQ2F0ZWdvcnlJZDogY2hpbGRDYXRlZ29yeUlkIH0sXHJcbiAgICAgICAgICBvcmRlcjogU2VxdWVsaXplLmxpdGVyYWwoXCJSQU5EKClcIiksXHJcbiAgICAgICAgICBsaW1pdDogOCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHByb2R1Y3QgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBuZXh0KGVycik7XHJcbiAgICAgIC8vIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgJ3N1Y2Nlc3MnOmZhbHNlLCBtc2c6IGVycn0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBhc3luYyBnZXRTaXplUHJvZHVjdChyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBwcm9kdWN0SWQgfSA9IHJlcS5xdWVyeTtcclxuICAgICAgZGIucHJvZHVjdHNpemVcclxuICAgICAgICAuZmluZEFsbCh7XHJcbiAgICAgICAgICB3aGVyZTogeyBwcm9kdWN0SWQgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHByb2R1Y3QgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBuZXh0KGVycik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1zZzogZXJyIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtBQUdBLElBQUFDLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFHLE9BQUEsR0FBQUQsc0JBQUEsQ0FBQUYsT0FBQTtBQUEwQixTQUFBSSxRQUFBQyxDQUFBLEVBQUFDLENBQUEsUUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLElBQUEsQ0FBQUosQ0FBQSxPQUFBRyxNQUFBLENBQUFFLHFCQUFBLFFBQUFDLENBQUEsR0FBQUgsTUFBQSxDQUFBRSxxQkFBQSxDQUFBTCxDQUFBLEdBQUFDLENBQUEsS0FBQUssQ0FBQSxHQUFBQSxDQUFBLENBQUFDLE1BQUEsV0FBQU4sQ0FBQSxXQUFBRSxNQUFBLENBQUFLLHdCQUFBLENBQUFSLENBQUEsRUFBQUMsQ0FBQSxFQUFBUSxVQUFBLE9BQUFQLENBQUEsQ0FBQVEsSUFBQSxDQUFBQyxLQUFBLENBQUFULENBQUEsRUFBQUksQ0FBQSxZQUFBSixDQUFBO0FBQUEsU0FBQVUsY0FBQVosQ0FB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Q2dJLEdBQUcsQ0FBQztjQUNYLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxPQUFPQSxHQUFHLEVBQUU7Y0FDWmhJLElBQUksQ0FBQ2dJLEdBQUcsQ0FBQztjQUNUO1lBQ0Y7VUFBQztVQUFBO1lBQUEsT0FBQWlJLFVBQUEsQ0FBQXRPLElBQUE7UUFBQTtNQUFBLEdBQUFvTyxTQUFBO0lBQUE7RUFDSCxDQUFDO0VBQ0tJLGNBQWMsV0FBQUEsZUFBQzVMLEdBQUcsRUFBRUMsR0FBRyxFQUFFeEUsSUFBSSxFQUFFO0lBQUEsV0FBQWdELGtCQUFBLDJCQUFBMUcsbUJBQUEsR0FBQTBFLElBQUEsVUFBQW9QLFVBQUE7TUFBQSxJQUFBQyxXQUFBO01BQUEsT0FBQS9ULG1CQUFBLEdBQUFnQixJQUFBLFVBQUFnVCxXQUFBQyxVQUFBO1FBQUEsa0JBQUFBLFVBQUEsQ0FBQS9PLElBQUEsR0FBQStPLFVBQUEsQ0FBQXZRLElBQUE7VUFBQTtZQUNuQyxJQUFJO2NBQ00wRSxXQUFTLEdBQUtILEdBQUcsQ0FBQ00sS0FBSyxDQUF2QkgsU0FBUztjQUNqQkksVUFBRSxDQUFDOEMsV0FBVyxDQUNYNUMsT0FBTyxDQUFDO2dCQUNQQyxLQUFLLEVBQUU7a0JBQUVQLFNBQVMsRUFBVEE7Z0JBQVU7Y0FDckIsQ0FBQyxDQUFDLENBQ0R2RixJQUFJLENBQUMsVUFBQytGLE9BQU8sRUFBSztnQkFDakJWLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7a0JBQUUwQyxPQUFPLEVBQUUsSUFBSTtrQkFBRWpFLElBQUksRUFBRXFCO2dCQUFRLENBQUMsQ0FBQztjQUN4RCxDQUFDLENBQUMsU0FDSSxDQUFDLFVBQVU4QyxHQUFHLEVBQUU7Z0JBQ3BCbEUsT0FBTyxDQUFDQyxHQUFHLENBQUNpRSxHQUFHLENBQUM7Z0JBQ2hCaEksSUFBSSxDQUFDZ0ksR0FBRyxDQUFDO2NBQ1gsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLE9BQU9BLEdBQUcsRUFBRTtjQUNaaEksSUFBSSxDQUFDZ0ksR0FBRyxDQUFDO2NBQ1R4RCxHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFMEMsT0FBTyxFQUFFLEtBQUs7Z0JBQUVDLEdBQUcsRUFBRUM7Y0FBSSxDQUFDLENBQUM7WUFDcEQ7VUFBQztVQUFBO1lBQUEsT0FBQXVJLFVBQUEsQ0FBQTVPLElBQUE7UUFBQTtNQUFBLEdBQUF5TyxTQUFBO0lBQUE7RUFDSDtBQUNGLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=