import express from "express"
import voucherController from "./voucher.controller";
import authenticateJWT from "../../../middleware/verify_token";

export const voucherRouter = express.Router();

voucherRouter.route("/").get(voucherController.getAllVoucher)
voucherRouter.route("/").post(voucherController.createVoucher)
voucherRouter.route("/").delete(voucherController.deleteVoucher)
voucherRouter.route("/detail").get(voucherController.detailVoucher)
voucherRouter.route("/apply").post(authenticateJWT, voucherController.applyVoucher)

voucherRouter.route("/schedule").post(voucherController.createSchedule)
voucherRouter.route("/schedule").get(voucherController.getSchedule)

voucherRouter.route("/hunting").get(voucherController.getVoucherHuting)