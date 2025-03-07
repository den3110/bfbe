import express from 'express';
import orderController from './order.controller';
import authenticateJWT from '../../../middleware/verify_token';
import authenticateJWTCheckout from '../../../middleware/verify_token_checkout';
// import { jwtStrategy } from '../../../middleware/strategy';
// import { sanitize } from '../../../middleware/sanitizer';
// import { validateBody, schemas } from '../../../middleware/validator';

export const orderRouter = express.Router();
orderRouter.route('/create').post( authenticateJWTCheckout,orderController.index);
orderRouter.route('/status').put( authenticateJWTCheckout,orderController.updateOrder);
orderRouter.route('/list').get(orderController.getAllOrderList);
orderRouter.route('/status/update').post(orderController.statusUpdate);
orderRouter.route('/list').post(orderController.getAllOrderListById);
orderRouter.route('/status').post(orderController.getAllOrderStatus);
orderRouter.route('/count').get(orderController.getAllOrderCount);
orderRouter.route('/payment').get(authenticateJWT, orderController.getOrderPayment);
orderRouter.route('/').delete(authenticateJWT, orderController.deleteOrder);



















