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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var _require = require("sequelize"),
  Op = _require.Op;
var _default = exports["default"] = {
  /* Add user api start here................................*/addCategory: function addCategory(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _req$body, name, slug;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, slug = _req$body.slug;
            _models.db.category.findOne({
              where: {
                name: name
              }
            }).then(function (data) {
              if (data) {
                return _models.db.category.update({
                  slug: slug
                }, {
                  where: {
                    id: data.id
                  }
                });
              }
              return _models.db.category.create({
                name: name,
                slug: slug
              });
            }).then(function (category) {
              res.status(200).json({
                'success': true,
                msg: "Successfully inserted category"
              });
            })["catch"](function (err) {
              next(err);
            });
            _context.next = 8;
            break;
          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            throw new RequestError('Error');
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 5]]);
    }))();
  },
  addSubCategory: function addSubCategory(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _req$body2, categoryId, sub_name;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, categoryId = _req$body2.categoryId, sub_name = _req$body2.sub_name;
            _models.db.SubCategory.findOne({
              where: {
                sub_name: sub_name
              }
            }).then(function (data) {
              if (data) {
                throw new RequestError('Category already exist', 409);
              }
              return _models.db.SubCategory.create({
                categoryId: categoryId,
                sub_name: sub_name
              });
            }).then(function (category) {
              res.status(200).json({
                'success': true,
                msg: "Successfully inserted category"
              });
            })["catch"](function (err) {
              next(err);
            });
            _context2.next = 8;
            break;
          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2["catch"](0);
            throw new RequestError('Error');
          case 8:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 5]]);
    }))();
  },
  addSubChildCategory: function addSubChildCategory(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _req$body3, categoryId, subcategoryId, name;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body3 = req.body, categoryId = _req$body3.categoryId, subcategoryId = _req$body3.subcategoryId, name = _req$body3.name;
            _models.db.SubChildCategory.findOne({
              where: {
                name: name
              }
            }).then(function (data) {
              if (data) {
                throw new RequestError('Category already exist', 409);
              }
              return _models.db.SubChildCategory.create({
                categoryId: categoryId,
                subcategoryId: subcategoryId,
                name: name
              });
            }).then(function (category) {
              res.status(200).json({
                'success': true,
                msg: "Successfully inserted category"
              });
            })["catch"](function (err) {
              next(err);
            });
            _context3.next = 8;
            break;
          case 5:
            _context3.prev = 5;
            _context3.t0 = _context3["catch"](0);
            throw new RequestError('Error');
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 5]]);
    }))();
  },
  updateCategory: function updateCategory(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _req$body4, childcategoryId, subcategoryId, sub_name, name;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _req$body4 = req.body, childcategoryId = _req$body4.childcategoryId, subcategoryId = _req$body4.subcategoryId, sub_name = _req$body4.sub_name, name = _req$body4.name;
            _models.db.SubCategory.findOne({
              where: {
                id: subcategoryId
              }
            }).then(function (data) {
              if (data) {
                return _models.db.SubCategory.update({
                  sub_name: sub_name
                }, {
                  where: {
                    id: subcategoryId
                  }
                });
              }
              throw new RequestError('Category Not Found', 409);
            });
            _models.db.SubChildCategory.findOne({
              where: {
                id: childcategoryId
              }
            }).then(function (data) {
              if (data) {
                return _models.db.SubChildCategory.update({
                  name: name
                }, {
                  where: {
                    id: childcategoryId
                  }
                });
              }
              throw new RequestError('Category Not Found', 409);
            }).then(function (category) {
              res.status(200).json({
                'success': true,
                msg: "Successfully Updated"
              });
            })["catch"](function (err) {
              next(err);
            });
            _context4.next = 9;
            break;
          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            throw new RequestError('Error');
          case 9:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 6]]);
    }))();
  },
  getCategoryList: function getCategoryList(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _models.db.category.findAll({
              attributes: ["id", "name"],
              include: [{
                model: _models.db.SubCategory
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
  getCategoryListHeader: function getCategoryListHeader(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _models.db.category.findAll({
              limit: 4
            }).then(function (list) {
              return res.status(200).json({
                'success': true,
                data: list
              });
            })["catch"](function (e) {
              return next(e);
            });
            _context6.next = 7;
            break;
          case 4:
            _context6.prev = 4;
            _context6.t0 = _context6["catch"](0);
            throw new RequestError("Error");
          case 7:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 4]]);
    }))();
  },
  getSubCategoryList: function getSubCategoryList(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _models.db.SubCategory.findAll({
              where: {
                categoryId: req.query.categoryId
              },
              include: [{
                model: _models.db.category,
                attributes: ["id", "name"]
              }]
            }).then(function (list) {
              res.status(200).json({
                'success': true,
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
            throw new RequestError('Error');
          case 7:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 4]]);
    }))();
  },
  getSubChildCategoryList: function getSubChildCategoryList(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var subcategoryId;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            subcategoryId = req.query.subcategoryId;
            _models.db.SubChildCategory.findAll({
              where: {
                subcategoryId: subcategoryId
              }
            }).then(function (list) {
              res.status(200).json({
                'success': true,
                data: list
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
  },
  getList: function getList(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _models.db.SubChildCategory.findAll({
              include: [{
                model: _models.db.category,
                attributes: ["id", "name"]
              }]
            }).then(function (list) {
              res.status(200).json({
                'success': true,
                data: list
              });
            })["catch"](function (err) {
              next(err);
            });
            _context9.next = 7;
            break;
          case 4:
            _context9.prev = 4;
            _context9.t0 = _context9["catch"](0);
            throw new RequestError('Error');
          case 7:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 4]]);
    }))();
  },
  getCategoryById: function getCategoryById(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var categoryId;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            categoryId = req.query.categoryId;
            _models.db.SubChildCategory.findAll({
              where: {
                categoryId: categoryId
              },
              include: [{
                model: _models.db.SubCategory,
                attributes: ['id', 'sub_name'],
                include: [{
                  model: _models.db.category,
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
            _context10.next = 8;
            break;
          case 5:
            _context10.prev = 5;
            _context10.t0 = _context10["catch"](0);
            throw new RequestError('Error');
          case 8:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 5]]);
    }))();
  },
  // category list
  getMainList: function getMainList(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _models.db.category.findAll().then(function (list) {
              res.status(200).json({
                'success': true,
                data: list
              });
            })["catch"](function (err) {
              console.log(err);
              next(err);
            });
            _context11.next = 7;
            break;
          case 4:
            _context11.prev = 4;
            _context11.t0 = _context11["catch"](0);
            throw new RequestError('Error');
          case 7:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 4]]);
    }))();
  },
  getMainListUpdate: function getMainListUpdate(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      var _req$body5, id, name, slug;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _req$body5 = req.body, id = _req$body5.id, name = _req$body5.name, slug = _req$body5.slug;
            _models.db.category.findOne({
              where: {
                id: id
              }
            }).then(function (data) {
              if (data) {
                return _models.db.category.update({
                  name: name,
                  slug: slug
                }, {
                  where: {
                    id: data.id
                  }
                });
              }
              throw new RequestError('Category is not found');
            }).then(function (category) {
              res.status(200).json({
                'success': true,
                msg: "Successfully Updated category"
              });
            })["catch"](function (err) {
              next(err);
            });
            _context12.next = 8;
            break;
          case 5:
            _context12.prev = 5;
            _context12.t0 = _context12["catch"](0);
            throw new RequestError('Error');
          case 8:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 5]]);
    }))();
  },
  // Sub category list
  getSubCategory: function getSubCategory(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _models.db.SubCategory.findAll({
              include: [{
                model: _models.db.category,
                attributes: ["id", "name"]
              }]
            }).then(function (list) {
              res.status(200).json({
                'success': true,
                data: list
              });
            })["catch"](function (err) {
              next(err);
            });
            _context13.next = 7;
            break;
          case 4:
            _context13.prev = 4;
            _context13.t0 = _context13["catch"](0);
            throw new RequestError('Error');
          case 7:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[0, 4]]);
    }))();
  },
  getSubCatListUpdate: function getSubCatListUpdate(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      var _req$body6, id, sub_name;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _req$body6 = req.body, id = _req$body6.id, sub_name = _req$body6.sub_name;
            _models.db.SubCategory.findOne({
              where: {
                id: id
              }
            }).then(function (data) {
              if (data) {
                return _models.db.SubCategory.update({
                  sub_name: sub_name
                }, {
                  where: {
                    id: data.id
                  }
                });
              }
              throw new RequestError('Sub_Category is not found');
            }).then(function (category) {
              res.status(200).json({
                'success': true,
                msg: "Successfully Updated Sub_Category"
              });
            })["catch"](function (err) {
              next(err);
            });
            _context14.next = 8;
            break;
          case 5:
            _context14.prev = 5;
            _context14.t0 = _context14["catch"](0);
            throw new RequestError('Error');
          case 8:
          case "end":
            return _context14.stop();
        }
      }, _callee14, null, [[0, 5]]);
    }))();
  },
  getDeletedSubCatList: function getDeletedSubCatList(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _models.db.SubCategory.findOne({
              where: {
                id: parseInt(req.query.id)
              }
            }).then(function (list) {
              if (list) {
                return _models.db.SubCategory.destroy({
                  where: {
                    id: list.id
                  }
                });
              }
              throw new RequestError('Id is not found');
            }).then(function (re) {
              return res.status(200).json({
                'msg': 'success',
                'status': "deleted Sub_Category Seccessfully"
              });
            })["catch"](function (err) {
              next(err);
            });
            _context15.next = 7;
            break;
          case 4:
            _context15.prev = 4;
            _context15.t0 = _context15["catch"](0);
            throw new RequestError('Error');
          case 7:
          case "end":
            return _context15.stop();
        }
      }, _callee15, null, [[0, 4]]);
    }))();
  },
  //child category 
  deleteCategory: function deleteCategory(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            _models.db.category.findOne({
              where: {
                id: parseInt(req.query.id)
              }
            }).then(function (data) {
              if (data) {
                return _models.db.category.destroy({
                  where: {
                    id: data.id
                  }
                }).then(function (r) {
                  return [r, data];
                });
              }
              throw new RequestError('child_category is not found');
            }).then(function (re) {
              return res.status(200).json({
                'status': "deleted category Seccessfully"
              });
            })["catch"](function (err) {
              next(err);
            });
          case 1:
          case "end":
            return _context16.stop();
        }
      }, _callee16);
    }))();
  },
  getAllCategoryBySlug: function getAllCategoryBySlug(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            _models.db.category.findOne({
              include: [{
                model: _models.db.SubCategory,
                include: [{
                  model: _models.db.SubChildCategory
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
            _context17.next = 7;
            break;
          case 4:
            _context17.prev = 4;
            _context17.t0 = _context17["catch"](0);
            throw new RequestError('Error');
          case 7:
          case "end":
            return _context17.stop();
        }
      }, _callee17, null, [[0, 4]]);
    }))();
  },
  filterByCategoryList: function filterByCategoryList(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            _models.db.product.findAll({
              where: {
                childCategoryId: req.params.id
              }
            }).then(function (list) {
              res.status(200).json({
                'success': true,
                data: list
              });
            })["catch"](function (err) {
              next(err);
            });
            _context18.next = 7;
            break;
          case 4:
            _context18.prev = 4;
            _context18.t0 = _context18["catch"](0);
            throw new RequestError('Error');
          case 7:
          case "end":
            return _context18.stop();
        }
      }, _callee18, null, [[0, 4]]);
    }))();
  },
  getFilterbyCategory: function getFilterbyCategory(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
      var _req$body7, id, name;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            _req$body7 = req.body, id = _req$body7.id, name = _req$body7.name;
            _models.db.SubCategory.findOne({
              attributes: ["id", "sub_name"],
              where: {
                id: id,
                sub_name: name
              },
              include: [{
                model: _models.db.SubChildCategory
              }]
            }).then(function (product) {
              res.status(200).json({
                'success': true,
                data: product
              });
            })["catch"](function (err) {
              next(err);
            });
            _context19.next = 8;
            break;
          case 5:
            _context19.prev = 5;
            _context19.t0 = _context19["catch"](0);
            throw new RequestError('Error');
          case 8:
          case "end":
            return _context19.stop();
        }
      }, _callee19, null, [[0, 5]]);
    }))();
  },
  getProductBySubcategory: function getProductBySubcategory(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
      var _req$body8, id, name, search;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            _req$body8 = req.body, id = _req$body8.id, name = _req$body8.name;
            search = '%%';
            if (name) {
              search = '%' + name + '%';
            }
            _models.db.SubCategory.findAll({
              attributes: ["id", "sub_name"],
              include: [{
                model: _models.db.product,
                order: [['createdAt', 'DESC']],
                required: true,
                where: (0, _defineProperty2["default"])({}, Op.or, [{
                  name: (0, _defineProperty2["default"])({}, Op.like, search),
                  subCategoryId: id
                }])
              }]
            }).then(function (product) {
              res.status(200).json({
                'success': true,
                data: product
              });
            })["catch"](function (err) {
              next(err);
            });
            _context20.next = 10;
            break;
          case 7:
            _context20.prev = 7;
            _context20.t0 = _context20["catch"](0);
            throw new RequestError('Error');
          case 10:
          case "end":
            return _context20.stop();
        }
      }, _callee20, null, [[0, 7]]);
    }))();
  },
  //mobile
  getAllMobileCategory: function getAllMobileCategory(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            _context21.prev = 0;
            _models.db.category.findAll({
              attributes: ["id", "name"],
              include: [{
                model: _models.db.SubCategory,
                include: [{
                  model: _models.db.SubChildCategory
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
            _context21.next = 7;
            break;
          case 4:
            _context21.prev = 4;
            _context21.t0 = _context21["catch"](0);
            throw new RequestError('Error');
          case 7:
          case "end":
            return _context21.stop();
        }
      }, _callee21, null, [[0, 4]]);
    }))();
  },
  getAllSubCategoryById: function getAllSubCategoryById(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            _context22.prev = 0;
            _models.db.product.findAll({
              where: {
                subCategoryId: req.body.subId
              }
            }).then(function (list) {
              res.status(200).json({
                'success': true,
                data: list
              });
            })["catch"](function (err) {
              next(err);
            });
            _context22.next = 7;
            break;
          case 4:
            _context22.prev = 4;
            _context22.t0 = _context22["catch"](0);
            throw new RequestError('Error');
          case 7:
          case "end":
            return _context22.stop();
        }
      }, _callee22, null, [[0, 4]]);
    }))();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwicmVxdWlyZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJfcmVxdWlyZSIsIk9wIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiYWRkQ2F0ZWdvcnkiLCJyZXEiLCJyZXMiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfY2FsbGVlIiwiX3JlcSRib2R5Iiwic2x1ZyIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJib2R5IiwiZGIiLCJjYXRlZ29yeSIsImZpbmRPbmUiLCJ3aGVyZSIsImRhdGEiLCJ1cGRhdGUiLCJpZCIsInN0YXR1cyIsImpzb24iLCJtc2ciLCJlcnIiLCJ0MCIsIlJlcXVlc3RFcnJvciIsImFkZFN1YkNhdGVnb3J5IiwiX2NhbGxlZTIiLCJfcmVxJGJvZHkyIiwiY2F0ZWdvcnlJZCIsInN1Yl9uYW1lIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiU3ViQ2F0ZWdvcnkiLCJhZGRTdWJDaGlsZENhdGVnb3J5IiwiX2NhbGxlZTMiLCJfcmVxJGJvZHkzIiwic3ViY2F0ZWdvcnlJZCIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIlN1YkNoaWxkQ2F0ZWdvcnkiLCJ1cGRhdGVDYXRlZ29yeSIsIl9jYWxsZWU0IiwiX3JlcSRib2R5NCIsImNoaWxkY2F0ZWdvcnlJZCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImdldENhdGVnb3J5TGlzdCIsIl9jYWxsZWU1IiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwiZmluZEFsbCIsImF0dHJpYnV0ZXMiLCJpbmNsdWRlIiwibW9kZWwiLCJsaXN0IiwiZ2V0Q2F0ZWdvcnlMaXN0SGVhZGVyIiwiX2NhbGxlZTYiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJsaW1pdCIsImdldFN1YkNhdGVnb3J5TGlzdCIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwicXVlcnkiLCJnZXRTdWJDaGlsZENhdGVnb3J5TGlzdCIsIl9jYWxsZWU4IiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwiZ2V0TGlzdCIsIl9jYWxsZWU5IiwiX2NhbGxlZTkkIiwiX2NvbnRleHQ5IiwiZ2V0Q2F0ZWdvcnlCeUlkIiwiX2NhbGxlZTEwIiwiX2NhbGxlZTEwJCIsIl9jb250ZXh0MTAiLCJnZXRNYWluTGlzdCIsIl9jYWxsZWUxMSIsIl9jYWxsZWUxMSQiLCJfY29udGV4dDExIiwiY29uc29sZSIsImxvZyIsImdldE1haW5MaXN0VXBkYXRlIiwiX2NhbGxlZTEyIiwiX3JlcSRib2R5NSIsIl9jYWxsZWUxMiQiLCJfY29udGV4dDEyIiwiZ2V0U3ViQ2F0ZWdvcnkiLCJfY2FsbGVlMTMiLCJfY2FsbGVlMTMkIiwiX2NvbnRleHQxMyIsImdldFN1YkNhdExpc3RVcGRhdGUiLCJfY2FsbGVlMTQiLCJfcmVxJGJvZHk2IiwiX2NhbGxlZTE0JCIsIl9jb250ZXh0MTQiLCJnZXREZWxldGVkU3ViQ2F0TGlzdCIsIl9jYWxsZWUxNSIsIl9jYWxsZWUxNSQiLCJfY29udGV4dDE1IiwicGFyc2VJbnQiLCJkZXN0cm95IiwicmUiLCJkZWxldGVDYXRlZ29yeSIsIl9jYWxsZWUxNiIsIl9jYWxsZWUxNiQiLCJfY29udGV4dDE2IiwiZ2V0QWxsQ2F0ZWdvcnlCeVNsdWciLCJfY2FsbGVlMTciLCJfY2FsbGVlMTckIiwiX2NvbnRleHQxNyIsImZpbHRlckJ5Q2F0ZWdvcnlMaXN0IiwiX2NhbGxlZTE4IiwiX2NhbGxlZTE4JCIsIl9jb250ZXh0MTgiLCJwcm9kdWN0IiwiY2hpbGRDYXRlZ29yeUlkIiwicGFyYW1zIiwiZ2V0RmlsdGVyYnlDYXRlZ29yeSIsIl9jYWxsZWUxOSIsIl9yZXEkYm9keTciLCJfY2FsbGVlMTkkIiwiX2NvbnRleHQxOSIsImdldFByb2R1Y3RCeVN1YmNhdGVnb3J5IiwiX2NhbGxlZTIwIiwiX3JlcSRib2R5OCIsInNlYXJjaCIsIl9jYWxsZWUyMCQiLCJfY29udGV4dDIwIiwib3JkZXIiLCJyZXF1aXJlZCIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJvciIsImxpa2UiLCJzdWJDYXRlZ29yeUlkIiwiZ2V0QWxsTW9iaWxlQ2F0ZWdvcnkiLCJfY2FsbGVlMjEiLCJfY2FsbGVlMjEkIiwiX2NvbnRleHQyMSIsImdldEFsbFN1YkNhdGVnb3J5QnlJZCIsIl9jYWxsZWUyMiIsIl9jYWxsZWUyMiQiLCJfY29udGV4dDIyIiwic3ViSWQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3Jlc291cmNlcy9jYXRlZ29yeS9jYXRlZ29yeS5jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzJztcclxuY29uc3QgeyBPcCB9ID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgICAvKiBBZGQgdXNlciBhcGkgc3RhcnQgaGVyZS4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uKi9cclxuXHJcbiAgICBhc3luYyBhZGRDYXRlZ29yeShyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgc2x1ZyB9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgICAgIGRiLmNhdGVnb3J5LmZpbmRPbmUoeyB3aGVyZTogeyBuYW1lOiBuYW1lIH0gfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi5jYXRlZ29yeS51cGRhdGUoeyBzbHVnOiBzbHVnIH0sIHsgd2hlcmU6IHsgaWQ6IGRhdGEuaWQgfSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIuY2F0ZWdvcnkuY3JlYXRlKHsgbmFtZTogbmFtZSwgc2x1Zzogc2x1ZyB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ICdzdWNjZXNzJzogdHJ1ZSwgbXNnOiBcIlN1Y2Nlc3NmdWxseSBpbnNlcnRlZCBjYXRlZ29yeVwiIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChlcnIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdFcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIGFzeW5jIGFkZFN1YkNhdGVnb3J5KHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBjYXRlZ29yeUlkLCBzdWJfbmFtZSB9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgICAgIGRiLlN1YkNhdGVnb3J5LmZpbmRPbmUoeyB3aGVyZTogeyBzdWJfbmFtZTogc3ViX25hbWUgfSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcignQ2F0ZWdvcnkgYWxyZWFkeSBleGlzdCcsIDQwOSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi5TdWJDYXRlZ29yeS5jcmVhdGUoeyBjYXRlZ29yeUlkOiBjYXRlZ29yeUlkLCBzdWJfbmFtZTogc3ViX25hbWUgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihjYXRlZ29yeSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyAnc3VjY2Vzcyc6IHRydWUsIG1zZzogXCJTdWNjZXNzZnVsbHkgaW5zZXJ0ZWQgY2F0ZWdvcnlcIiB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcignRXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIGFkZFN1YkNoaWxkQ2F0ZWdvcnkocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGNhdGVnb3J5SWQsIHN1YmNhdGVnb3J5SWQsIG5hbWUgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgICAgICBkYi5TdWJDaGlsZENhdGVnb3J5LmZpbmRPbmUoeyB3aGVyZTogeyBuYW1lOiBuYW1lIH0gfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoJ0NhdGVnb3J5IGFscmVhZHkgZXhpc3QnLCA0MDkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIuU3ViQ2hpbGRDYXRlZ29yeS5jcmVhdGUoeyBjYXRlZ29yeUlkOiBjYXRlZ29yeUlkLCBzdWJjYXRlZ29yeUlkOiBzdWJjYXRlZ29yeUlkLCBuYW1lOiBuYW1lIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oY2F0ZWdvcnkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgJ3N1Y2Nlc3MnOiB0cnVlLCBtc2c6IFwiU3VjY2Vzc2Z1bGx5IGluc2VydGVkIGNhdGVnb3J5XCIgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KGVycilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdFcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgdXBkYXRlQ2F0ZWdvcnkocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGNoaWxkY2F0ZWdvcnlJZCwgc3ViY2F0ZWdvcnlJZCwgc3ViX25hbWUsIG5hbWUgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgICAgICBkYi5TdWJDYXRlZ29yeS5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IHN1YmNhdGVnb3J5SWQgfSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRiLlN1YkNhdGVnb3J5LnVwZGF0ZSh7IHN1Yl9uYW1lOiBzdWJfbmFtZSB9LCB7IHdoZXJlOiB7IGlkOiBzdWJjYXRlZ29yeUlkIH0gfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcignQ2F0ZWdvcnkgTm90IEZvdW5kJywgNDA5KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGRiLlN1YkNoaWxkQ2F0ZWdvcnkuZmluZE9uZSh7IHdoZXJlOiB7IGlkOiBjaGlsZGNhdGVnb3J5SWQgfSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRiLlN1YkNoaWxkQ2F0ZWdvcnkudXBkYXRlKHsgbmFtZTogbmFtZSB9LCB7IHdoZXJlOiB7IGlkOiBjaGlsZGNhdGVnb3J5SWQgfSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdDYXRlZ29yeSBOb3QgRm91bmQnLCA0MDkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ICdzdWNjZXNzJzogdHJ1ZSwgbXNnOiBcIlN1Y2Nlc3NmdWxseSBVcGRhdGVkXCIgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KGVycilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdFcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgZ2V0Q2F0ZWdvcnlMaXN0KHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZGIuY2F0ZWdvcnkuZmluZEFsbCh7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXCJpZFwiLCBcIm5hbWVcIl0sXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBbeyBtb2RlbDogZGIuU3ViQ2F0ZWdvcnkgfV0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihsaXN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ICdzdWNjZXNzJzogdHJ1ZSwgZGF0YTogbGlzdCB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcignRXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZ2V0Q2F0ZWdvcnlMaXN0SGVhZGVyKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZGIuY2F0ZWdvcnkuZmluZEFsbCh7XHJcbiAgICAgICAgICAgICAgICBsaW1pdDogNFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihsaXN0PT4gcmVzLnN0YXR1cygyMDApLmpzb24oeydzdWNjZXNzJzogdHJ1ZSwgZGF0YTogbGlzdH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZT0+IG5leHQoZSkpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcihcIkVycm9yXCIpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgZ2V0U3ViQ2F0ZWdvcnlMaXN0KHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZGIuU3ViQ2F0ZWdvcnkuZmluZEFsbCh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXRlZ29yeUlkOiByZXEucXVlcnkuY2F0ZWdvcnlJZCB9LFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogW3sgbW9kZWw6IGRiLmNhdGVnb3J5LCBhdHRyaWJ1dGVzOiBbXCJpZFwiLCBcIm5hbWVcIl0gfV1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGxpc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgJ3N1Y2Nlc3MnOiB0cnVlLCBkYXRhOiBsaXN0IH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChlcnIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdFcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgZ2V0U3ViQ2hpbGRDYXRlZ29yeUxpc3QocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHN1YmNhdGVnb3J5SWQgfSA9IHJlcS5xdWVyeTtcclxuICAgICAgICAgICAgZGIuU3ViQ2hpbGRDYXRlZ29yeS5maW5kQWxsKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IHN1YmNhdGVnb3J5SWQ6IHN1YmNhdGVnb3J5SWQgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGxpc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgJ3N1Y2Nlc3MnOiB0cnVlLCBkYXRhOiBsaXN0IH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChlcnIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdFcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgZ2V0TGlzdChyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRiLlN1YkNoaWxkQ2F0ZWdvcnkuZmluZEFsbCh7XHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBbeyBtb2RlbDogZGIuY2F0ZWdvcnksIGF0dHJpYnV0ZXM6IFtcImlkXCIsIFwibmFtZVwiXSB9XVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4obGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyAnc3VjY2Vzcyc6IHRydWUsIGRhdGE6IGxpc3QgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KGVycilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoJ0Vycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBnZXRDYXRlZ29yeUJ5SWQocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnlJZCA9IHJlcS5xdWVyeS5jYXRlZ29yeUlkO1xyXG4gICAgICAgICAgICBkYi5TdWJDaGlsZENhdGVnb3J5LmZpbmRBbGwoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgY2F0ZWdvcnlJZDogY2F0ZWdvcnlJZCB9LFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogW3sgbW9kZWw6IGRiLlN1YkNhdGVnb3J5LCBhdHRyaWJ1dGVzOiBbJ2lkJywgJ3N1Yl9uYW1lJ10sIGluY2x1ZGU6IFt7IG1vZGVsOiBkYi5jYXRlZ29yeSwgYXR0cmlidXRlczogW1wiaWRcIiwgXCJuYW1lXCJdIH1dIH1dXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihsaXN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ICdzdWNjZXNzJzogdHJ1ZSwgZGF0YTogbGlzdCB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcignRXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhdGVnb3J5IGxpc3RcclxuICAgIGFzeW5jIGdldE1haW5MaXN0KHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZGIuY2F0ZWdvcnkuZmluZEFsbCgpXHJcbiAgICAgICAgICAgICAgICAudGhlbihsaXN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ICdzdWNjZXNzJzogdHJ1ZSwgZGF0YTogbGlzdCB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KGVycilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoJ0Vycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBnZXRNYWluTGlzdFVwZGF0ZShyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIHNsdWcgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgICAgICBkYi5jYXRlZ29yeS5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IGlkIH0gfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi5jYXRlZ29yeS51cGRhdGUoeyBuYW1lOiBuYW1lLCBzbHVnOiBzbHVnIH0sIHsgd2hlcmU6IHsgaWQ6IGRhdGEuaWQgfSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdDYXRlZ29yeSBpcyBub3QgZm91bmQnKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ICdzdWNjZXNzJzogdHJ1ZSwgbXNnOiBcIlN1Y2Nlc3NmdWxseSBVcGRhdGVkIGNhdGVnb3J5XCIgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KGVycilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoJ0Vycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIFN1YiBjYXRlZ29yeSBsaXN0XHJcbiAgICBhc3luYyBnZXRTdWJDYXRlZ29yeShyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRiLlN1YkNhdGVnb3J5LmZpbmRBbGwoe1xyXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogW3sgbW9kZWw6IGRiLmNhdGVnb3J5LCBhdHRyaWJ1dGVzOiBbXCJpZFwiLCBcIm5hbWVcIl0gfV1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGxpc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgJ3N1Y2Nlc3MnOiB0cnVlLCBkYXRhOiBsaXN0IH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChlcnIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdFcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBnZXRTdWJDYXRMaXN0VXBkYXRlKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBpZCwgc3ViX25hbWUgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgICAgICBkYi5TdWJDYXRlZ29yeS5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IGlkIH0gfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi5TdWJDYXRlZ29yeS51cGRhdGUoeyBzdWJfbmFtZTogc3ViX25hbWUgfSwgeyB3aGVyZTogeyBpZDogZGF0YS5pZCB9IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoJ1N1Yl9DYXRlZ29yeSBpcyBub3QgZm91bmQnKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ICdzdWNjZXNzJzogdHJ1ZSwgbXNnOiBcIlN1Y2Nlc3NmdWxseSBVcGRhdGVkIFN1Yl9DYXRlZ29yeVwiIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChlcnIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdFcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgZ2V0RGVsZXRlZFN1YkNhdExpc3QocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkYi5TdWJDYXRlZ29yeS5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IHBhcnNlSW50KHJlcS5xdWVyeS5pZCkgfSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4obGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRiLlN1YkNhdGVnb3J5LmRlc3Ryb3koeyB3aGVyZTogeyBpZDogbGlzdC5pZCB9IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoJ0lkIGlzIG5vdCBmb3VuZCcpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7ICdtc2cnOiAnc3VjY2VzcycsICdzdGF0dXMnOiBcImRlbGV0ZWQgU3ViX0NhdGVnb3J5IFNlY2Nlc3NmdWxseVwiIH0pO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KGVycilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcignRXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vY2hpbGQgY2F0ZWdvcnkgXHJcbiAgICBhc3luYyBkZWxldGVDYXRlZ29yeShyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIGRiLmNhdGVnb3J5LmZpbmRPbmUoeyB3aGVyZTogeyBpZDogcGFyc2VJbnQocmVxLnF1ZXJ5LmlkKSB9IH0pXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIuY2F0ZWdvcnkuZGVzdHJveSh7IHdoZXJlOiB7IGlkOiBkYXRhLmlkIH0gfSkudGhlbihyID0+IFtyLCBkYXRhXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoJ2NoaWxkX2NhdGVnb3J5IGlzIG5vdCBmb3VuZCcpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7ICdzdGF0dXMnOiBcImRlbGV0ZWQgY2F0ZWdvcnkgU2VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXh0KGVycilcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgZ2V0QWxsQ2F0ZWdvcnlCeVNsdWcocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkYi5jYXRlZ29yeS5maW5kT25lKHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IFt7IG1vZGVsOiBkYi5TdWJDYXRlZ29yeSwgaW5jbHVkZTogW3sgbW9kZWw6IGRiLlN1YkNoaWxkQ2F0ZWdvcnkgfV0gfV1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihsaXN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ICdzdWNjZXNzJzogdHJ1ZSwgZGF0YTogbGlzdCB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcignRXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIGZpbHRlckJ5Q2F0ZWdvcnlMaXN0KHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZGIucHJvZHVjdC5maW5kQWxsKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNoaWxkQ2F0ZWdvcnlJZDogcmVxLnBhcmFtcy5pZCB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4obGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyAnc3VjY2Vzcyc6IHRydWUsIGRhdGE6IGxpc3QgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KGVycilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoJ0Vycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBnZXRGaWx0ZXJieUNhdGVnb3J5KHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHsgaWQsIG5hbWUgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgICAgICBkYi5TdWJDYXRlZ29yeS5maW5kT25lKHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcImlkXCIsIFwic3ViX25hbWVcIl0sXHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogaWQsIHN1Yl9uYW1lOiBuYW1lIH0sXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBbeyBtb2RlbDogZGIuU3ViQ2hpbGRDYXRlZ29yeSB9XVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocHJvZHVjdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyAnc3VjY2Vzcyc6IHRydWUsIGRhdGE6IHByb2R1Y3QgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KGVycilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoJ0Vycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBnZXRQcm9kdWN0QnlTdWJjYXRlZ29yeShyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCB7IGlkLCBuYW1lIH0gPSByZXEuYm9keTtcclxuICAgICAgICAgICAgbGV0IHNlYXJjaCA9ICclJSc7XHJcbiAgICAgICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2ggPSAnJScgKyBuYW1lICsgJyUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRiLlN1YkNhdGVnb3J5LmZpbmRBbGwoe1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogW1wiaWRcIiwgXCJzdWJfbmFtZVwiXSxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IGRiLnByb2R1Y3QsIG9yZGVyOiBbWydjcmVhdGVkQXQnLCAnREVTQyddXSwgcmVxdWlyZWQ6IHRydWUsIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtPcC5vcl06IFt7IG5hbWU6IHsgW09wLmxpa2VdOiBzZWFyY2ggfSwgc3ViQ2F0ZWdvcnlJZDogaWQgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgJ3N1Y2Nlc3MnOiB0cnVlLCBkYXRhOiBwcm9kdWN0IH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChlcnIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdFcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy9tb2JpbGVcclxuICAgIGFzeW5jIGdldEFsbE1vYmlsZUNhdGVnb3J5KHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZGIuY2F0ZWdvcnkuZmluZEFsbCh7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXCJpZFwiLCBcIm5hbWVcIl0sXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBbeyBtb2RlbDogZGIuU3ViQ2F0ZWdvcnksIGluY2x1ZGU6IFt7IG1vZGVsOiBkYi5TdWJDaGlsZENhdGVnb3J5IH1dIH1dXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGxpc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyAnc3VjY2Vzcyc6IHRydWUsIGRhdGE6IGxpc3QgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0KGVycilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcignRXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIGdldEFsbFN1YkNhdGVnb3J5QnlJZChyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRiLnByb2R1Y3QuZmluZEFsbCh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBzdWJDYXRlZ29yeUlkOiByZXEuYm9keS5zdWJJZCB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihsaXN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ICdzdWNjZXNzJzogdHJ1ZSwgZGF0YTogbGlzdCB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcignRXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59XHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO0FBQXFDLFNBQUFDLG9CQUFBLGtCQUNyQyxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxH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