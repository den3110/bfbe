"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _product = _interopRequireDefault(require("./product.controller"));
var _awsbucket = _interopRequireDefault(require("../../../awsbucket"));
// import { sanitize } from '../../../middleware/sanitizer';
// import { jwtStrategy } from '../../../middleware/strategy';

var productRouter = exports.productRouter = _express["default"].Router();
productRouter.route("/photo").get(_product["default"].getPhotoProduct);
productRouter.route('/add').post(_awsbucket["default"].single('photo'), _product["default"].addProduct);
productRouter.route('/getAllproduct').get(_product["default"].index);
productRouter.route('/getAllproductList').get(_product["default"].getAllProductList);
productRouter.route('/update').post(_awsbucket["default"].single('photo'), _product["default"].update);
productRouter.route('/getProductByCategory').get(_product["default"].getProductListByCategory);
productRouter.route('/getProductById').get(_product["default"].getProductListById);
productRouter.route('/getWebProductById').get(_product["default"].getWebProductListById);
productRouter.route('/product-offer').post(_product["default"].addProductOffer);
productRouter.route('/getAllProductOffer').get(_product["default"].getProductOffer);
productRouter.route('/delete')["delete"](_product["default"].productDelete);
productRouter.route('/deleteOfferById/:id').get(_product["default"].productOfferDelete);
productRouter.route('/upload-img').post(_awsbucket["default"].array('file', 10), _product["default"].multiplePhotoUpload);
productRouter.route('/getAllPhoto').get(_product["default"].getAllPhoto);
productRouter.route('/slider-photo/delete')["delete"](_product["default"].deleteSliderPhoto);
productRouter.route("/size").get(_product["default"].getSizeProduct);

//Category by product
productRouter.route('/getAllGroceryStaple').get(_product["default"].getAllGrocerryStaples);
productRouter.route('/suggest').get(_product["default"].getProductSuggest);
productRouter.route('/list/:slug').get(_product["default"].getAllProductBySlug);
productRouter.route('/getAllByCategory').post(_product["default"].GetAllByCategory);
productRouter.route('/getallProductbySubChildCat').post(_product["default"].getProductSubChildCat);

// Filter product
productRouter.route('/gcatalogsearch/result').get(_product["default"].getFilterbyProduct);

//new api
productRouter.route('/search_product').post(_product["default"].searchProductBySubCat);

//aws image delete
productRouter.route('/aws/delete/photo').post(_product["default"].awsProductPhotoDelete);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXhwcmVzcyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3Byb2R1Y3QiLCJfYXdzYnVja2V0IiwicHJvZHVjdFJvdXRlciIsImV4cG9ydHMiLCJleHByZXNzIiwiUm91dGVyIiwicm91dGUiLCJnZXQiLCJwcm9kdWN0Q29udHJvbGxlciIsImdldFBob3RvUHJvZHVjdCIsInBvc3QiLCJ1cGxvYWQiLCJzaW5nbGUiLCJhZGRQcm9kdWN0IiwiaW5kZXgiLCJnZXRBbGxQcm9kdWN0TGlzdCIsInVwZGF0ZSIsImdldFByb2R1Y3RMaXN0QnlDYXRlZ29yeSIsImdldFByb2R1Y3RMaXN0QnlJZCIsImdldFdlYlByb2R1Y3RMaXN0QnlJZCIsImFkZFByb2R1Y3RPZmZlciIsImdldFByb2R1Y3RPZmZlciIsInByb2R1Y3REZWxldGUiLCJwcm9kdWN0T2ZmZXJEZWxldGUiLCJhcnJheSIsIm11bHRpcGxlUGhvdG9VcGxvYWQiLCJnZXRBbGxQaG90byIsImRlbGV0ZVNsaWRlclBob3RvIiwiZ2V0U2l6ZVByb2R1Y3QiLCJnZXRBbGxHcm9jZXJyeVN0YXBsZXMiLCJnZXRQcm9kdWN0U3VnZ2VzdCIsImdldEFsbFByb2R1Y3RCeVNsdWciLCJHZXRBbGxCeUNhdGVnb3J5IiwiZ2V0UHJvZHVjdFN1YkNoaWxkQ2F0IiwiZ2V0RmlsdGVyYnlQcm9kdWN0Iiwic2VhcmNoUHJvZHVjdEJ5U3ViQ2F0IiwiYXdzUHJvZHVjdFBob3RvRGVsZXRlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS9yZXNvdXJjZXMvcHJvZHVjdC9wcm9kdWN0LnJvdXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHByb2R1Y3RDb250cm9sbGVyIGZyb20gJy4vcHJvZHVjdC5jb250cm9sbGVyJztcclxuLy8gaW1wb3J0IHsgc2FuaXRpemUgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL3Nhbml0aXplcic7XHJcbi8vIGltcG9ydCB7IGp3dFN0cmF0ZWd5IH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9zdHJhdGVneSc7XHJcbmltcG9ydCB1cGxvYWQgZnJvbSAnLi4vLi4vLi4vYXdzYnVja2V0JztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbnByb2R1Y3RSb3V0ZXIucm91dGUoXCIvcGhvdG9cIikuZ2V0KHByb2R1Y3RDb250cm9sbGVyLmdldFBob3RvUHJvZHVjdClcclxucHJvZHVjdFJvdXRlci5yb3V0ZSgnL2FkZCcpLnBvc3QodXBsb2FkLnNpbmdsZSgncGhvdG8nKSwgcHJvZHVjdENvbnRyb2xsZXIuYWRkUHJvZHVjdCk7XHJcbnByb2R1Y3RSb3V0ZXIucm91dGUoJy9nZXRBbGxwcm9kdWN0JykuZ2V0KCBwcm9kdWN0Q29udHJvbGxlci5pbmRleCk7XHJcbnByb2R1Y3RSb3V0ZXIucm91dGUoJy9nZXRBbGxwcm9kdWN0TGlzdCcpLmdldCggcHJvZHVjdENvbnRyb2xsZXIuZ2V0QWxsUHJvZHVjdExpc3QpO1xyXG5wcm9kdWN0Um91dGVyLnJvdXRlKCcvdXBkYXRlJykucG9zdCggdXBsb2FkLnNpbmdsZSgncGhvdG8nKSwgcHJvZHVjdENvbnRyb2xsZXIudXBkYXRlKTtcclxucHJvZHVjdFJvdXRlci5yb3V0ZSgnL2dldFByb2R1Y3RCeUNhdGVnb3J5JykuZ2V0KCBwcm9kdWN0Q29udHJvbGxlci5nZXRQcm9kdWN0TGlzdEJ5Q2F0ZWdvcnkpO1xyXG5wcm9kdWN0Um91dGVyLnJvdXRlKCcvZ2V0UHJvZHVjdEJ5SWQnKS5nZXQoIHByb2R1Y3RDb250cm9sbGVyLmdldFByb2R1Y3RMaXN0QnlJZCk7XHJcbnByb2R1Y3RSb3V0ZXIucm91dGUoJy9nZXRXZWJQcm9kdWN0QnlJZCcpLmdldCggcHJvZHVjdENvbnRyb2xsZXIuZ2V0V2ViUHJvZHVjdExpc3RCeUlkKTtcclxucHJvZHVjdFJvdXRlci5yb3V0ZSgnL3Byb2R1Y3Qtb2ZmZXInKS5wb3N0KCBwcm9kdWN0Q29udHJvbGxlci5hZGRQcm9kdWN0T2ZmZXIpO1xyXG5wcm9kdWN0Um91dGVyLnJvdXRlKCcvZ2V0QWxsUHJvZHVjdE9mZmVyJykuZ2V0KCBwcm9kdWN0Q29udHJvbGxlci5nZXRQcm9kdWN0T2ZmZXIpO1xyXG5wcm9kdWN0Um91dGVyLnJvdXRlKCcvZGVsZXRlJykuZGVsZXRlKCBwcm9kdWN0Q29udHJvbGxlci5wcm9kdWN0RGVsZXRlKTtcclxucHJvZHVjdFJvdXRlci5yb3V0ZSgnL2RlbGV0ZU9mZmVyQnlJZC86aWQnKS5nZXQoIHByb2R1Y3RDb250cm9sbGVyLnByb2R1Y3RPZmZlckRlbGV0ZSk7XHJcbnByb2R1Y3RSb3V0ZXIucm91dGUoJy91cGxvYWQtaW1nJykucG9zdCh1cGxvYWQuYXJyYXkoJ2ZpbGUnLCAxMCksIHByb2R1Y3RDb250cm9sbGVyLm11bHRpcGxlUGhvdG9VcGxvYWQpO1xyXG5wcm9kdWN0Um91dGVyLnJvdXRlKCcvZ2V0QWxsUGhvdG8nKS5nZXQoIHByb2R1Y3RDb250cm9sbGVyLmdldEFsbFBob3RvKTtcclxucHJvZHVjdFJvdXRlci5yb3V0ZSgnL3NsaWRlci1waG90by9kZWxldGUnKS5kZWxldGUoIHByb2R1Y3RDb250cm9sbGVyLmRlbGV0ZVNsaWRlclBob3RvKTtcclxucHJvZHVjdFJvdXRlci5yb3V0ZShcIi9zaXplXCIpLmdldChwcm9kdWN0Q29udHJvbGxlci5nZXRTaXplUHJvZHVjdClcclxuXHJcbi8vQ2F0ZWdvcnkgYnkgcHJvZHVjdFxyXG5wcm9kdWN0Um91dGVyLnJvdXRlKCcvZ2V0QWxsR3JvY2VyeVN0YXBsZScpLmdldCggcHJvZHVjdENvbnRyb2xsZXIuZ2V0QWxsR3JvY2VycnlTdGFwbGVzKTtcclxucHJvZHVjdFJvdXRlci5yb3V0ZSgnL3N1Z2dlc3QnKS5nZXQoIHByb2R1Y3RDb250cm9sbGVyLmdldFByb2R1Y3RTdWdnZXN0KTtcclxucHJvZHVjdFJvdXRlci5yb3V0ZSgnL2xpc3QvOnNsdWcnKS5nZXQoIHByb2R1Y3RDb250cm9sbGVyLmdldEFsbFByb2R1Y3RCeVNsdWcpO1xyXG5wcm9kdWN0Um91dGVyLnJvdXRlKCcvZ2V0QWxsQnlDYXRlZ29yeScpLnBvc3QoIHByb2R1Y3RDb250cm9sbGVyLkdldEFsbEJ5Q2F0ZWdvcnkpO1xyXG5wcm9kdWN0Um91dGVyLnJvdXRlKCcvZ2V0YWxsUHJvZHVjdGJ5U3ViQ2hpbGRDYXQnKS5wb3N0KCBwcm9kdWN0Q29udHJvbGxlci5nZXRQcm9kdWN0U3ViQ2hpbGRDYXQpO1xyXG5cclxuLy8gRmlsdGVyIHByb2R1Y3RcclxucHJvZHVjdFJvdXRlci5yb3V0ZSgnL2djYXRhbG9nc2VhcmNoL3Jlc3VsdCcpLmdldCggcHJvZHVjdENvbnRyb2xsZXIuZ2V0RmlsdGVyYnlQcm9kdWN0KTtcclxuXHJcbi8vbmV3IGFwaVxyXG5wcm9kdWN0Um91dGVyLnJvdXRlKCcvc2VhcmNoX3Byb2R1Y3QnKS5wb3N0KCBwcm9kdWN0Q29udHJvbGxlci5zZWFyY2hQcm9kdWN0QnlTdWJDYXQpO1xyXG5cclxuXHJcbi8vYXdzIGltYWdlIGRlbGV0ZVxyXG5wcm9kdWN0Um91dGVyLnJvdXRlKCcvYXdzL2RlbGV0ZS9waG90bycpLnBvc3QoIHByb2R1Y3RDb250cm9sbGVyLmF3c1Byb2R1Y3RQaG90b0RlbGV0ZSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxRQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxRQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFHQSxJQUFBRSxVQUFBLEdBQUFILHNCQUFBLENBQUFDLE9BQUE7QUFGQTtBQUNBOztBQUlPLElBQU1HLGFBQWEsR0FBQUMsT0FBQSxDQUFBRCxhQUFBLEdBQUdFLG1CQUFPLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0FBQzdDSCxhQUFhLENBQUNJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQ0MsR0FBRyxDQUFDQyxtQkFBaUIsQ0FBQ0MsZUFBZSxDQUFDO0FBQ3BFUCxhQUFhLENBQUNJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQ0ksSUFBSSxDQUFDQyxxQkFBTSxDQUFDQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUVKLG1CQUFpQixDQUFDSyxVQUFVLENBQUM7QUFDdEZYLGFBQWEsQ0FBQ0ksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUNDLEdBQUcsQ0FBRUMsbUJBQWlCLENBQUNNLEtBQUssQ0FBQztBQUNuRVosYUFBYSxDQUFDSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQ0MsR0FBRyxDQUFFQyxtQkFBaUIsQ0FBQ08saUJBQWlCLENBQUM7QUFDbkZiLGFBQWEsQ0FBQ0ksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDSSxJQUFJLENBQUVDLHFCQUFNLENBQUNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRUosbUJBQWlCLENBQUNRLE1BQU0sQ0FBQztBQUN0RmQsYUFBYSxDQUFDSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQ0MsR0FBRyxDQUFFQyxtQkFBaUIsQ0FBQ1Msd0JBQXdCLENBQUM7QUFDN0ZmLGFBQWEsQ0FBQ0ksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUNDLEdBQUcsQ0FBRUMsbUJBQWlCLENBQUNVLGtCQUFrQixDQUFDO0FBQ2pGaEIsYUFBYSxDQUFDSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQ0MsR0FBRyxDQUFFQyxtQkFBaUIsQ0FBQ1cscUJBQXFCLENBQUM7QUFDdkZqQixhQUFhLENBQUNJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDSSxJQUFJLENBQUVGLG1CQUFpQixDQUFDWSxlQUFlLENBQUM7QUFDOUVsQixhQUFhLENBQUNJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDQyxHQUFHLENBQUVDLG1CQUFpQixDQUFDYSxlQUFlLENBQUM7QUFDbEZuQixhQUFhLENBQUNJLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBTyxDQUFFRSxtQkFBaUIsQ0FBQ2MsYUFBYSxDQUFDO0FBQ3ZFcEIsYUFBYSxDQUFDSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsR0FBRyxDQUFFQyxtQkFBaUIsQ0FBQ2Usa0JBQWtCLENBQUM7QUFDdEZyQixhQUFhLENBQUNJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQ0ksSUFBSSxDQUFDQyxxQkFBTSxDQUFDYSxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFaEIsbUJBQWlCLENBQUNpQixtQkFBbUIsQ0FBQztBQUN4R3ZCLGFBQWEsQ0FBQ0ksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxHQUFHLENBQUVDLG1CQUFpQixDQUFDa0IsV0FBVyxDQUFDO0FBQ3ZFeEIsYUFBYSxDQUFDSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsVUFBTyxDQUFFRSxtQkFBaUIsQ0FBQ21CLGlCQUFpQixDQUFDO0FBQ3hGekIsYUFBYSxDQUFDSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUNDLEdBQUcsQ0FBQ0MsbUJBQWlCLENBQUNvQixjQUFjLENBQUM7O0FBRWxFO0FBQ0ExQixhQUFhLENBQUNJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDQyxHQUFHLENBQUVDLG1CQUFpQixDQUFDcUIscUJBQXFCLENBQUM7QUFDekYzQixhQUFhLENBQUNJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsR0FBRyxDQUFFQyxtQkFBaUIsQ0FBQ3NCLGlCQUFpQixDQUFDO0FBQ3pFNUIsYUFBYSxDQUFDSSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUNDLEdBQUcsQ0FBRUMsbUJBQWlCLENBQUN1QixtQkFBbUIsQ0FBQztBQUM5RTdCLGFBQWEsQ0FBQ0ksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUNJLElBQUksQ0FBRUYsbUJBQWlCLENBQUN3QixnQkFBZ0IsQ0FBQztBQUNsRjlCLGFBQWEsQ0FBQ0ksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUNJLElBQUksQ0FBRUYsbUJBQWlCLENBQUN5QixxQkFBcUIsQ0FBQzs7QUFFakc7QUFDQS9CLGFBQWEsQ0FBQ0ksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUNDLEdBQUcsQ0FBRUMsbUJBQWlCLENBQUMwQixrQkFBa0IsQ0FBQzs7QUFFeEY7QUFDQWhDLGFBQWEsQ0FBQ0ksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUNJLElBQUksQ0FBRUYsbUJBQWlCLENBQUMyQixxQkFBcUIsQ0FBQzs7QUFHckY7QUFDQWpDLGFBQWEsQ0FBQ0ksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUNJLElBQUksQ0FBRUYsbUJBQWlCLENBQUM0QixxQkFBcUIsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==