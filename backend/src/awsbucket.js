// import config from "./config";
import multer from "multer";
import cloudinaryA from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
const cloudinary = cloudinaryA.v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "uploads", // Thay đổi tên thư mục đích cho lưu trữ tệp tin
  allowedFormats: ["jpg", "jpeg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }],
});

const upload = multer({ storage: storage });

module.exports = upload;
