import express from 'express';
// import multer from 'multer';
// import path from 'path';
import vendorController from './vendor.controller';
// import { sanitize } from '../../../middleware/sanitizer';
// import { jwtStrategy } from '../../../middleware/strategy';
// import { validateBody, schemas } from '../../../middleware/validator';
// var attachmentDir = path.join(path.dirname(require.main.filename), 'public', 'images','product')

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, attachmentDir)
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + path.extname(file.originalname))
//     }
//   })
// var uploadAttachment = multer({ storage: storage, limits:{ fileSize: 10485760 }})


export const vendorRouter = express.Router();
// vendorRouter.route('/create').post(validateBody(schemas.vendorDetails),vendorController.index);
vendorRouter.route('/create').post( vendorController.index);
vendorRouter.route('/list').get( vendorController.getAllvendor);
vendorRouter.route('/product-list').get(vendorController.getAllVendorProduct);
vendorRouter.route('/product/getAllProductById').post(vendorController.getProductByVendor);
vendorRouter.route('/update').post(vendorController.vendorUpdate);
vendorRouter.route('/delete').delete(vendorController.vendorDelete);
vendorRouter.route('/product-delete').post(vendorController.vendorProductDelete);
vendorRouter.route('/product-add').post(vendorController.vendorAddProduct);







