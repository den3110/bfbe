import express from "express";
import { authRouter } from "./resources/auth";
import { productRouter } from "./resources/product";
import { vendorRouter } from "./resources/vendor";
import { categoryRouter } from "./resources/category";
import { locationRouter } from "./resources/location";
import { customerRouter } from "./resources/customer";
import { orderRouter } from "./resources/order";
import { paymentRouter } from "./resources/payment";
import { contactRouter } from "./resources/contact";
import { voucherRouter } from "./resources/voucher";
import { uploadRouter } from "./resources/upload";
import { settingRouter } from "./resources/setting";

export const restRouter = express.Router();
restRouter.use("/auth", authRouter);
restRouter.use("/v1/auth", authRouter);
restRouter.use("/customer", customerRouter);
restRouter.use("/location", locationRouter);
restRouter.use("/product", productRouter);
restRouter.use("/vendor", vendorRouter);
restRouter.use("/supplier", vendorRouter);
restRouter.use("/category", categoryRouter);
restRouter.use("/order", orderRouter);
restRouter.use("/v1/order", orderRouter);
restRouter.use("/payment", paymentRouter);
restRouter.use("/contact", contactRouter);
restRouter.use("/voucher", voucherRouter);
restRouter.use("/v1/upload", uploadRouter) 
restRouter.use("/v1/setting", settingRouter) 
restRouter.use("/v1/payment", settingRouter) 