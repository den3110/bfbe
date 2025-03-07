import express from "express"
import uploadController from "./upload.controller";
const multer = require('multer');

export const uploadRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'x_image_blog/') // Thư mục lưu trữ tệp đã tải lên
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // Giữ nguyên tên của tệp
    }
});
const upload = multer({ storage: storage });

uploadRouter.route("/").post(upload.single("image"), uploadController.uploadImage)
uploadRouter.route("/file").post(upload.single("file"), uploadController.uploadImage)
uploadRouter.route("/file2").post(upload.single("file"), uploadController.uploadImage2)
uploadRouter.route("/change-host").post(uploadController.changeHost)
uploadRouter.route("/change-mime-type").post(uploadController.changeMimeType)
uploadRouter.route("/change-mime-type-db").post(uploadController.changeMimeTypeDb)
uploadRouter.route("/change-mime-type-db-1").post(uploadController.changeMimeTypeDb1)