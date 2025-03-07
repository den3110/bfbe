import express from "express"
import settingController from "./setting.controller";
import upload from '../../../awsbucket';


export const settingRouter = express.Router();

settingRouter.route("/").get(settingController.getSetting)
settingRouter.route("/payment/status").put(settingController.updateModePayment)
settingRouter.route("/key").put(settingController.updateKey)
settingRouter.route("/bank").put(settingController.updateBank)
settingRouter.route("/bank").get(settingController.getBank)
settingRouter.route("/info").get(settingController.getInfoPayment)
settingRouter.route("/discount").post(settingController.createDiscount)
settingRouter.route("/review").post(upload.single("image"), settingController.createReview)
settingRouter.route("/review").get(settingController.getReviews)