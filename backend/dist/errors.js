"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));
var _stackTrace = _interopRequireDefault(require("stack-trace"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
global.RequestError = /*#__PURE__*/function (_Error) {
  function RequestError(message, code, realError) {
    var _this;
    (0, _classCallCheck2["default"])(this, RequestError);
    if (realError instanceof RequestError) {
      _this = _callSuper(this, RequestError, [realError.message, realError.code]);
      _this.copyObject(realError);
      return (0, _possibleConstructorReturn2["default"])(_this);
    }
    if (!code) code = 500;
    _this = _callSuper(this, RequestError, [message, code]);
    _this.status = code;
    _this.errorList = [];
    if (message instanceof Array) {
      for (var i = 0; i < message.length; i++) {
        _this.errorList.push(message[i]);
      }
    } else {
      _this.errorList.push(message);
    }
    var trace = _stackTrace["default"].get();
    var consoleMessage = message;
    if (realError) consoleMessage = realError;
    console.error('\x1b[31mRequestError\x1b[0m', '\x1b[35m' + trace[1].getFileName().replace(__dirname, '') + '\x1b[0m', '\x1b[32m' + trace[1].getLineNumber() + ':' + trace[1].getColumnNumber() + '\x1b[0m', consoleMessage);
    return (0, _assertThisInitialized2["default"])(_this);
  }
  (0, _inherits2["default"])(RequestError, _Error);
  return (0, _createClass2["default"])(RequestError, [{
    key: "copyObject",
    value: function copyObject(requestError) {
      this.errorList = requestError.errorList;
    }
  }]);
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfc3RhY2tUcmFjZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2NhbGxTdXBlciIsInQiLCJvIiwiZSIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsImNhbGwiLCJnbG9iYWwiLCJSZXF1ZXN0RXJyb3IiLCJfRXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsInJlYWxFcnJvciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsImNvcHlPYmplY3QiLCJzdGF0dXMiLCJlcnJvckxpc3QiLCJBcnJheSIsImkiLCJsZW5ndGgiLCJwdXNoIiwidHJhY2UiLCJzdGFja1RyYWNlIiwiZ2V0IiwiY29uc29sZU1lc3NhZ2UiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRGaWxlTmFtZSIsInJlcGxhY2UiLCJfX2Rpcm5hbWUiLCJnZXRMaW5lTnVtYmVyIiwiZ2V0Q29sdW1uTnVtYmVyIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZDIiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVxdWVzdEVycm9yIiwiX3dyYXBOYXRpdmVTdXBlcjIiLCJFcnJvciJdLCJzb3VyY2VzIjpbIi4uL3NyYy9lcnJvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YWNrVHJhY2UgZnJvbSAnc3RhY2stdHJhY2UnO1xyXG5cclxuZ2xvYmFsLlJlcXVlc3RFcnJvciA9ICBjbGFzcyBSZXF1ZXN0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb3B5T2JqZWN0KHJlcXVlc3RFcnJvcikge1xyXG4gICAgICAgIHRoaXMuZXJyb3JMaXN0ID0gcmVxdWVzdEVycm9yLmVycm9yTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBjb2RlLCByZWFsRXJyb3IpIHtcclxuICAgICAgICBpZihyZWFsRXJyb3IgaW5zdGFuY2VvZiBSZXF1ZXN0RXJyb3Ipe1xyXG4gICAgICAgICAgICBzdXBlcihyZWFsRXJyb3IubWVzc2FnZSwgcmVhbEVycm9yLmNvZGUpXHJcbiAgICAgICAgICAgIHRoaXMuY29weU9iamVjdChyZWFsRXJyb3IpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWNvZGUpXHJcbiAgICAgICAgICAgIGNvZGUgPSA1MDA7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwgY29kZSk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBjb2RlO1xyXG4gICAgICAgIHRoaXMuZXJyb3JMaXN0ID0gW107XHJcbiAgICAgICAgaWYobWVzc2FnZSBpbnN0YW5jZW9mIEFycmF5KXtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7aTxtZXNzYWdlLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvckxpc3QucHVzaChtZXNzYWdlW2ldKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JMaXN0LnB1c2gobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0cmFjZSA9IHN0YWNrVHJhY2UuZ2V0KCk7XHJcbiAgICAgICAgdmFyIGNvbnNvbGVNZXNzYWdlID0gbWVzc2FnZTtcclxuICAgICAgICBpZihyZWFsRXJyb3IpXHJcbiAgICAgICAgICAgIGNvbnNvbGVNZXNzYWdlID0gcmVhbEVycm9yO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1xceDFiWzMxbVJlcXVlc3RFcnJvclxceDFiWzBtJywgJ1xceDFiWzM1bScrdHJhY2VbMV0uZ2V0RmlsZU5hbWUoKS5yZXBsYWNlKF9fZGlybmFtZSwgJycpKydcXHgxYlswbScsICdcXHgxYlszMm0nK3RyYWNlWzFdLmdldExpbmVOdW1iZXIoKSsnOicrdHJhY2VbMV0uZ2V0Q29sdW1uTnVtYmVyKCkrJ1xceDFiWzBtJywgY29uc29sZU1lc3NhZ2UpO1xyXG4gICAgfVxyXG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUFBLFdBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUFxQyxTQUFBQyxXQUFBQyxDQUFBLEVBQUFDLENBQUEsRUFBQUMsQ0FBQSxXQUFBRCxDQUFBLE9BQUFFLGdCQUFBLGFBQUFGLENBQUEsT0FBQUcsMkJBQUEsYUFBQUosQ0FBQSxFQUFBSyx5QkFBQSxLQUFBQyxPQUFBLENBQUFDLFNBQUEsQ0FBQU4sQ0FBQSxFQUFBQyxDQUFBLFlBQUFDLGdCQUFBLGFBQUFILENBQUEsRUFBQVEsV0FBQSxJQUFBUCxDQUFBLENBQUFRLEtBQUEsQ0FBQVQsQ0FBQSxFQUFBRSxDQUFBO0FBQUEsU0FBQUcsMEJBQUEsY0FBQUwsQ0FBQSxJQUFBVSxPQUFBLENBQUFDLFNBQUEsQ0FBQUMsT0FBQSxDQUFBQyxJQUFBLENBQUFQLE9BQUEsQ0FBQUMsU0FBQSxDQUFBRyxPQUFBLGlDQUFBVixDQUFBLGFBQUFLLHlCQUFBLFlBQUFBLDBCQUFBLGFBQUFMLENBQUE7QUFFckNjLE1BQU0sQ0FBQ0MsWUFBWSwwQkFBQUMsTUFBQTtFQUtmLFNBQUFELGFBQVlFLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUEsSUFBQUMsZ0JBQUEsbUJBQUFOLFlBQUE7SUFDbEMsSUFBR0ksU0FBUyxZQUFZSixZQUFZLEVBQUM7TUFDakNLLEtBQUEsR0FBQXJCLFVBQUEsT0FBQWdCLFlBQUEsR0FBTUksU0FBUyxDQUFDRixPQUFPLEVBQUVFLFNBQVMsQ0FBQ0QsSUFBSTtNQUN2Q0UsS0FBQSxDQUFLRSxVQUFVLENBQUNILFNBQVMsQ0FBQztNQUMxQixXQUFBZiwyQkFBQSxhQUFBZ0IsS0FBQTtJQUNKO0lBQ0EsSUFBRyxDQUFDRixJQUFJLEVBQ0pBLElBQUksR0FBRyxHQUFHO0lBQ2RFLEtBQUEsR0FBQXJCLFVBQUEsT0FBQWdCLFlBQUEsR0FBTUUsT0FBTyxFQUFFQyxJQUFJO0lBQ25CRSxLQUFBLENBQUtHLE1BQU0sR0FBR0wsSUFBSTtJQUNsQkUsS0FBQSxDQUFLSSxTQUFTLEdBQUcsRUFBRTtJQUNuQixJQUFHUCxPQUFPLFlBQVlRLEtBQUssRUFBQztNQUN4QixLQUFJLElBQUlDLENBQUMsR0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQ1QsT0FBTyxDQUFDVSxNQUFNLEVBQUNELENBQUMsRUFBRSxFQUFDO1FBQzdCTixLQUFBLENBQUtJLFNBQVMsQ0FBQ0ksSUFBSSxDQUFDWCxPQUFPLENBQUNTLENBQUMsQ0FBQyxDQUFDO01BQ25DO0lBQ0osQ0FBQyxNQUFJO01BQ0ROLEtBQUEsQ0FBS0ksU0FBUyxDQUFDSSxJQUFJLENBQUNYLE9BQU8sQ0FBQztJQUNoQztJQUNBLElBQUlZLEtBQUssR0FBR0Msc0JBQVUsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7SUFDNUIsSUFBSUMsY0FBYyxHQUFHZixPQUFPO0lBQzVCLElBQUdFLFNBQVMsRUFDUmEsY0FBYyxHQUFHYixTQUFTO0lBQzlCYyxPQUFPLENBQUNDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxVQUFVLEdBQUNMLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ00sV0FBVyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUMsU0FBUyxFQUFFLFVBQVUsR0FBQ1IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDUyxhQUFhLENBQUMsQ0FBQyxHQUFDLEdBQUcsR0FBQ1QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDVSxlQUFlLENBQUMsQ0FBQyxHQUFDLFNBQVMsRUFBRVAsY0FBYyxDQUFDO0lBQUMsV0FBQVEsdUJBQUEsYUFBQXBCLEtBQUE7RUFDbk47RUFBQyxJQUFBcUIsVUFBQSxhQUFBMUIsWUFBQSxFQUFBQyxNQUFBO0VBQUEsV0FBQTBCLGFBQUEsYUFBQTNCLFlBQUE7SUFBQTRCLEdBQUE7SUFBQUMsS0FBQSxFQTNCRCxTQUFBdEIsV0FBV3VCLFlBQVksRUFBRTtNQUNyQixJQUFJLENBQUNyQixTQUFTLEdBQUdxQixZQUFZLENBQUNyQixTQUFTO0lBQzNDO0VBQUM7QUFBQSxvQkFBQXNCLGlCQUFBLGFBSDZDQyxLQUFLLEVBNkJ0RCIsImlnbm9yZUxpc3QiOltdfQ==