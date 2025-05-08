require("dotenv").config();
const express = require("express");
const proxy = require("express-http-proxy");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const proxyOptions = {
    proxyReqPathResolver: (req) => {
      return req.originalUrl.replace(/^\/v1/, "/api");
    },
    proxyErrorHandler: (err, res, next) => {
      res.status(500).json({
        message: "Internal server error!",
        error: err.message,
      });
    },
  };
  app.use(
    "/v1/designs",
    authMiddleware,
    proxy(process.env.DESIGN, {
      ...proxyOptions,
    })
  );