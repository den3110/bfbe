import express from 'express';
import locationController from './location.controller';
import { sanitize } from '../../../middleware/sanitizer';
import { jwtStrategy } from '../../../middleware/strategy';
import { validateBody, schemas } from '../../../middleware/validator';

export const locationRouter = express.Router();
locationRouter.route('/create').post(locationController.index);
locationRouter.route('/list').get(locationController.List);
locationRouter.route('/delete').delete(locationController.getLocationDelete);
locationRouter.route('/update').post(locationController.getLocationUpdate);

//area create
locationRouter.route('/area/create').post(locationController.areaCreate);
locationRouter.route('/area/list').get(locationController.areaList);
locationRouter.route('/area/delete').delete(locationController.getAreaDeleteById);
locationRouter.route('/area/update').post(locationController.getAreaUpdate);
locationRouter.route('/area/getAllAreaList').get(locationController.getAreaList);
// get location 
locationRouter.route('/area/list/getbyid').get(locationController.getAreaListById);









