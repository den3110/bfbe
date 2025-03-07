import fs from "fs";
import sharp from "sharp";
import path from "path";
import { db } from "../../../models";
import { Sequelize } from "sequelize";

export default {
  async uploadImage(req, res) {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    const uploadDir = path.join("x_image_blog");
    const originalImagePath = path.join(uploadDir, req.file.filename);

    try {
      // ??c file ?? ki?m tra ??nh d?ng
      const imageBuffer = fs.readFileSync(originalImagePath);

      // Ki?m tra v? x? l? n?u file l? ?nh
      const metadata = await sharp(imageBuffer).metadata();

      if (!metadata.format) {
        return res.status(400).send("Uploaded file is not a valid image.");
      }

      // ??nh ???ng d?n l?u ?nh n?n
      const compressedImagePath = path.join(
        uploadDir,
        `${req.file.filename.split(".")[0]}.jpg`
      );

      // N?n ?nh v? chuy?n ??i sang JPG
      await sharp(imageBuffer)
        .jpeg({ quality: 85 })
        .toFile(compressedImagePath);

      // X?a ?nh g?c n?u c?n
      fs.unlinkSync(originalImagePath);

      const imageUrl = `${req.protocol}://${req.get("host")}/x_image_blog/${
        req.file.filename.split(".")[0]
      }.jpg`;

      res.json({ imageUrl: imageUrl, file_path: imageUrl });
    } catch (error) {
      console.error("Error processing image:", error);
      return res.status(500).send("Error processing image.");
    }
  },
  async uploadImage2(req, res) {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
  
    try {
      // Đường dẫn lưu file
      const uploadDir = path.join("x_image_blog");
      const filePath = path.join(uploadDir, req.file.filename);
  
      // Đường dẫn trả về
      const imageUrl = `${req.protocol}://${req.get("host")}/x_image_blog/${req.file.filename}`;
      // const filePathFinal= `${req.protocol}://${req.get("host")}/${filePath}`;
      res.json({ imageUrl, file_path: imageUrl });
    } catch (error) {
      console.error("Error uploading image:", error);
      return res.status(500).send("Error uploading image.");
    }
  },
  async changeHost(req, res) {
    try {
      // Kết nối đến cơ sở dữ liệu
      const productPhotos = await db.productphoto.findAll();
      console.log(productPhotos.length);
      for (let productPhoto of productPhotos) {
        const oldPath = productPhoto.imgUrl;
        if (oldPath) {
          // Thay thế miền cũ bằng miền mới
          const newPath = oldPath.replace(
            "https://api.gzomedia.net/uploads/",
            "https://api.minhkhanggroup.vn/oldfile/"
          );

          // Cập nhật đường dẫn mới vào cơ sở dữ liệu
          productPhoto.imgUrl = newPath;
          await productPhoto.save();
          console.log(
            `Đã cập nhật id ${productPhoto.id} từ ${oldPath} sang ${newPath}`
          );
          // return res.json({ ok: true });
        }
      }
    } catch (err) {
      console.log(err);
      return res.json({ ok: false });
    }
  },
  async changeMimeType(req, res) {
    try {
      const inputFolder = path.join("watermark");
      const outputFolder = path.join("watermark_jpg");
      // Hàm để chuyển đổi ảnh từ PNG sang JPG
      async function convertPngToJpg(inputPath, outputPath) {
        try {
          await sharp(inputPath)
            .jpeg({ quality: 80, force: true }) // Chuyển đổi sang JPG với chất lượng 80%
            .resize({ fit: "inside", width: 720 })
            .toFile(outputPath);
          console.log(`Đã chuyển đổi: ${inputPath} -> ${outputPath}`);
        } catch (err) {
          console.error(`Lỗi khi chuyển đổi ${inputPath}:`, err);
        }
      }

      // Đọc tất cả các tệp trong thư mục nguồn
      fs.readdir(inputFolder, (err, files) => {
        if (err) {
          return console.error("Lỗi khi đọc thư mục:", err);
        }

        // Duyệt qua từng tệp và chuyển đổi nếu là tệp PNG
        files.forEach((file) => {
          const inputPath = path.join(inputFolder, file);
          const outputPath = path.join(
            outputFolder,
            file.replace(".png", ".jpg")
          );

          // Kiểm tra xem tệp có phải là PNG không
          if (path.extname(file).toLowerCase() === ".png") {
            convertPngToJpg(inputPath, outputPath);
          }
        });
      });
    } catch (err) {
      console.log(err);
      return res.json({ ok: false });
    }
  },
  async changeMimeTypeDb(req, res) {
    try {
      // Kết nối đến cơ sở dữ liệu

      // Truy vấn để lấy tất cả các bản ghi có miền 'api.minhkhanggroup.vn' và đuôi '.png'
      const productPhotos = await db.productphoto.findAll({
        where: {
          imgUrl: {
            [Sequelize.Op.like]: "%api.minhkhanggroup.vn%.png",
          },
        },
      });

      for (let productPhoto of productPhotos) {
        const oldPath = productPhoto.imgUrl;

        // Thay thế đuôi '.png' bằng '.jpg'
        const newPath = oldPath.replace(".png", ".jpg");

        // Cập nhật đường dẫn mới vào cơ sở dữ liệu
        productPhoto.imgUrl = newPath;
        await productPhoto.save();
        console.log(
          `Đã cập nhật id ${productPhoto.id} từ ${oldPath} sang ${newPath}`
        );
      }
    } catch (err) {
      console.error("Đã xảy ra lỗi:", err);
    }
  },
  async changeMimeTypeDb1(req, res) {
    try {
      // Kết nối đến cơ sở dữ liệu

      // Truy vấn để lấy tất cả các bản ghi có miền 'api.minhkhanggroup.vn' và đuôi '.png'
      const productPhotos = await db.product.findAll({
        where: {
          photo: {
            [Sequelize.Op.like]: "%api.minhkhanggroup.vn%.png",
          },
        },
      });

      for (let productPhoto of productPhotos) {
        const oldPath = productPhoto.photo;

        // Thay thế đuôi '.png' bằng '.jpg'
        const newPath = oldPath.replace(".png", ".jpg");

        // Cập nhật đường dẫn mới vào cơ sở dữ liệu
        productPhoto.photo = newPath;
        await productPhoto.save();
        console.log(
          `Đã cập nhật id ${productPhoto.id} từ ${oldPath} sang ${newPath}`
        );
      }
    } catch (err) {
      console.error("Đã xảy ra lỗi:", err);
    }
  },
};
