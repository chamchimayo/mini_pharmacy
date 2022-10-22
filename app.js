const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const Http = require("http");
const http = Http.createServer(app);
const PORT = process.env.EXPRESS_PORT || 3000;
require("dotenv").config();

const routes = require("./routes");
const errorHandlerMiddleware = require('./middlewares/error-handler-middleware')

app.use(cors({
  origin: '*',
}));

// app.use(express.static("public_html"));
app.use(express.json());

app.use("/", routes);
app.use('/' ,errorHandlerMiddleware); // 에러 핸들러

app.get("/", (req, res) => {
  res.send("Hello!");
});

http.listen(PORT, () => {
  console.log(PORT, "로 연결되었습니다.");
});