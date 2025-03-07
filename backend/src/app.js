import express from "express";
import logger from "morgan";
import path from "path";
import passport from "passport";
import session from "express-session";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import expressSanitizer from "express-sanitizer";
import helmet from "helmet";
import rfs from "rotating-file-stream";
import "./passport";

export default {
  setup: (config) => {
    const app = express();

    var accessLogStream = rfs("access.log", {
      interval: "1d",
      path: path.join(__dirname, "..", "log"),
    });
    app.use(express.static(path.join(__dirname, "../", "watermark")));
    app.use(express.static(path.join(__dirname, "../", "watermark_jpg")));
    app.use(express.static(path.join(__dirname, "../", "upload_avatar_product")));
    app.use(express.static(path.join(__dirname, "../", "upload_avatar_product")));
    app.use("/upload_avatar_product", express.static(path.join(__dirname, "../", "upload_avatar_product")));
    app.use("/oldfile", express.static(path.join(__dirname, "../", "upload_oldfile")));

    app.use('/x_image_blog' ,express.static(path.join(__dirname, "../", "x_image_blog")));
    app.use(logger(config.app.log, { stream: accessLogStream }));
    app.set("view engine", "html");
    app.use(bodyParser.urlencoded({ extended: true, limit: "200mb", parameterLimit:100000000 }));
    app.use(bodyParser.json({ limit: "200mb" }));

    app.use(cookieParser(config.app.secret));
    app.use(
      session({
        secret: config.app.secret,
        resave: true,
        saveUninitialized: true,
      })
    );
    app.use("/photo", express.static(path.join(__dirname, "public/images")));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(expressSanitizer());
    app.use(helmet());
    app.use(
      helmet.hsts({
        maxAge: 0,
      })
    );

    Number.prototype.pad = function (size) {
      var s = String(this);
      while (s.length < (size || 2)) {
        s = "0" + s;
      }
      return s;
    };

    return app;
  },
};
