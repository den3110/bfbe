import { db } from "../../../models";
import JWT from "jsonwebtoken";
import mailer from "../../../mailer";
import config from "../../../config";
import bcrypt from "bcrypt-nodejs";
import speakeasy from "speakeasy";
// import { validateEmail } from './../../../functions'
import md5 from "md5";
import nodemailer from "nodemailer";
import axios from "axios";
const qs = require("qs");

var JWTSign = function (user, date) {
  return JWT.sign(
    {
      iss: config.app.name,
      sub: user.id,
      iam: user.type,
      iat: date.getTime(),
      exp: new Date().setMinutes(date.getMinutes() + 30),
    },
    process.env.JWT_SECRET
  );
};

function generateOtp() {
  let token = speakeasy.totp({
    secret: process.env.OTP_KEY,
    encoding: "base32",
    step: 30 - Math.floor((new Date().getTime() / 1000.0) % 30),
  });
  return token;
}

function verifyOtp(token) {
  let expiry = speakeasy.totp.verify({
    secret: process.env.OTP_KEY,
    encoding: "base32",
    token: token,
    step: 30 - Math.floor((new Date().getTime() / 1000.0) % 30),
    window: 0,
  });
  return expiry;
}

export default {
  async addUser(req, res, next) {
    const {
      firstName,
      lastName,
      phoneNo,
      email,
      address,
      password,
      role,
      verify,
    } = req.body;
    var passwordHash = md5(password);
    var token = generateOtp();
    var otp = verifyOtp(token);
    db.user
      .findOne({ where: { email: email }, paranoid: false })
      .then((find) => {
        if (find) {
          return res.status(409).json("Email is already in use");
        }
        return db.user.create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNo: phoneNo,
          address: address,
          password: passwordHash,
          verify: verify,
          role: role,
        });
      })
      .then((user) => {
        if (user) {
          mailer.sendEmployeePassword(email, token);
          return res.status(200).json({
            success: true,
            key: otp,
            msg:
              "New Registration added and password has been sent to " +
              email +
              " .",
          });
        } else res.status(500).json({ success: false });
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  },

  async findUser(req, res, next) {
    db.user
      .findOne({
        attributes: ["firstName", "lastName", "email"],
        where: { id: req.query.user_id },
      })
      .then((user) => {
        if (user) {
          return res.status(200).json({ success: true, data: user, ok: true });
        } else res.status(500).json({ success: false });
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  },

  async getAllUserList(req, res, next) {
    db.user
      .findAll()
      .then((user) => {
        if (user) {
          return res.status(200).json({ success: true, data: user });
        } else res.status(500).json({ success: false });
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  },

  async userUpdate(req, res, next) {
    const { id, firstName, lastName, email, address, password, role, verify } =
      req.body;
    var passwordHash = bcrypt.hashSync(password);
    db.user
      .findOne({ where: { email: email }, paranoid: false })
      .then((user) => {
        if (!user) {
          throw new RequestError("User is not found", 409);
        }
        return db.user.update(
          {
            firstName: firstName ? firstName : user.firstName,
            lastName: lastName ? lastName : user.lastName,
            password: password ? passwordHash : user.passwordHash,
            address: address ? address : user.address,
            role: role ? role : user.role,
            verify: verify ? verify : user.verify,
          },
          { where: { id: id } }
        );
      })
      .then((user) => {
        if (user) {
          return res
            .status(200)
            .json({ success: true, msg: "User update successsfully" });
        } else res.status(500).json({ success: false });
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  },

  // async login(req, res, next) {
  //     var date = new Date();
  //     var token = JWTSign(req.user, date);
  //     res.cookie('XSRF-token',token, {
  //         expire: new Date().setMinutes(date.getMinutes() + 30),
  //         httpOnly: true, secure: config.app.secure
  //     });

  //     return res.status(200).json({ success: true ,token, role: req.user.role});
  // },
  async login(req, res, next) {
    const { email, password } = req.body;
    // var date = new Date();
    // console.log(password)
    // console.log(bcrypt.hashSync(password))
    const findUser = await db.user.findOne({
      where: { email, password: md5(password) },
    });
    if (findUser) {
      const token = JWT.sign(
        { uid: findUser.dataValues.id, id: findUser.dataValues.id },
        process.env.JWT_SECRET
      );
      return res.status(200).json({
        success: true,
        token,
        auid: findUser.dataValues.id,
        role: findUser.dataValues.role,
      });
    } else {
      return res.status(200).json({ success: false });
    }
  },

  async deleteUserList(req, res, next) {
    db.user
      .findOne({ where: { id: req.body.id } })
      .then((data) => {
        if (data) {
          return db.user
            .destroy({ where: { id: req.body.id } })
            .then((r) => [r, data]);
        }
        throw new RequestError("User is not found", 409);
      })
      .then((re) => {
        return res
          .status(200)
          .json({ status: "deleted userlist Seccessfully" });
      })
      .catch((err) => {
        next(err);
      });
  },
  async verifyMail(req, res) {
    try {
      // Nhận email từ request body
      const { email, password, firstName } = req.body;

      // Tạo một mã xác thực ngẫu nhiên

      // Cấu hình thông tin mail server (dùng Gmail làm ví dụ)
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MAIL_USERNAME, // Thay bằng địa chỉ email của bạn
          pass: process.env.MAIL_PASSWORD, // Thay bằng mật khẩu email của bạn
        },
      });

      // Cấu hình nội dung email
      const mailOptions = {
        from: process.env.MAIL_USERNAME, // Thay bằng địa chỉ email của bạn
        to: email, // Địa chỉ email người dùng cần xác thực
        subject: "Email Verification", // Tiêu đề email
        html: `
                    <a href="${process.env.URL_FRONTEND}/signup/success" style="padding: 10px; border-radius: 10px; background-color: #2e89ff; color: #fff; width: 100%">Click here to complete singup process</a>
                `, // Nội dung email chứa mã xác thực
      };

      // Gửi email
      await transporter.sendMail(mailOptions);
      // Trả về mã xác thực để sử dụng sau này (ví dụ để kiểm tra mã khi người dùng nhập vào)
      res.json({ success: true });
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error("Error sending verification email:", error);
      res
        .status(500)
        .json({ success: false, error: "Error sending verification email" });
    }
  },
  async getAccessTokenInsta(req, res) {
    try {
      const { client_id, client_secret, grant_type, redirect_uri, code } =
        req.body;
      const data = qs.stringify({
        client_id,
        client_secret,
        grant_type,
        redirect_uri,
        code,
      });
      const response = await axios.post(
        "https://api.instagram.com/oauth/access_token",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const token = response.data.access_token;
      return res.status(200).json({ acessToken: token, ok: true });
    } catch (error) {
      //   console.log(error);
      //   if(error.response.statuC)
      console.log(error.response.data.code);
      return res
        .status(error.response.data.code)
        .json({ ok: false, message: error.response.data.error_message });
    }
  },
  async loginClient(req, res) {
    const { email, password } = req.body;

    try {
      // 1. Tìm user theo email
      const user = await db.customer.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      // 2. Kiểm tra mật khẩu
      const isPasswordValid = md5(password) == user.password;
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      // 3. Tạo token JWT và trả về phản hồi
      const token = generateToken(user.id);
      return res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Server error, please try again later" });
    }
  },
  async register(req, res) {
    const { name, email, password, firstName, lastName } = req.body;

    try {
      // Kiểm tra xem email đã tồn tại chưa
      const existingUser = await db.customer.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: "Email is already in use" });
      }

      // Tạo user mới
      const hashedPassword = md5(password);

      const user = await db.customer.create({
        name,
        email,
        firstName,
        lastName,
        password: hashedPassword,
      });

      // Tạo token JWT và trả về phản hồi
      const token = generateToken(user.id);
      res.status(201).json({
        message: "Registration successful",
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      });
    } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ message: "Server error, please try again later" });
    }
  },
  async checkTokenExpiration(req, res) {
    const token = req.headers["authorization"].split(" ")[1]; // Lấy token từ header

    if (!token) {
      return res.status(403).json({ error: "No token provided!" });
    }

    // Xác minh token
    JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ error: "Token has expired or is invalid!" });
      }

      // Token hợp lệ, trả về thông tin người dùng
      res.json({ message: "Token is valid!", userId: decoded.id });
    });
  },
  async getProfile(req, res, next) {
    db.customer
      .findOne({
        // attributes: ["firstName", "lastName", "email"],
        where: { id: req.user.id },
      })
      .then((user) => {
        if (user) {
          return res.status(200).json({ success: true, data: user, ok: true });
        } else res.status(500).json({ success: false });
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  },
  async changePasword(req, res) {
    const { oldPassword, newPassword  } = req.body;

    // Validate required fields
    if (!oldPassword || !newPassword) {
      return res.status(400).json({ error: 'Please provide all fields.' });
    }
  
  
    // Fetch user from the database
    try {
      const {id }= req.user
      const user = await db.user.findOne({ where: { id: id } });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found.', ok: false  });
      }
  
      // Compare the old password with the stored hashed password
      if (md5(oldPassword) !== user.password) {
        return res.status(400).json({ error: 'Incorrect old password.', ok: false  });
      }
  
      // Hash the new password and update the user record
      const hashedNewPassword = md5(newPassword);
  
      await user.update({
        password: hashedNewPassword,
      });
  
      return res.status(200).json({ message: 'Password updated successfully!', ok: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred while updating the password.', ok: false });
    }
  
  }

};

const generateToken = (userId) => {
  return JWT.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
