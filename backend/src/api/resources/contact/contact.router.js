import express from "express"
import contactController from "./contact.controller";

export const contactRouter = express.Router();

contactRouter.post("/", contactController.submit_contact)
contactRouter.delete("/", contactController.delete_contact)
contactRouter.get("/", contactController.get_list_contact)
contactRouter.post("/reply", contactController.reply_contact)