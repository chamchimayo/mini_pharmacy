const express = require("express");
const app = express();
const axios = require("axios");
const Http = require("http");
const http = Http.createServer(app);
const PORT = process.env.EXPRESS_PORT || 3000;
const routes = require("./routes");
const errorHandlerMiddleware = require('./middlewares/error-handler-middleware')

app.use(express.static("public_html"));
app.use(express.json());

app.use("/", routes);
app.use('/' ,errorHandlerMiddleware); // 에러 핸들러

app.get("/", (req, res) => {
  res.send("Hello!");
});

http.listen(PORT, () => {
  console.log(PORT, "로 연결되었습니다.");
});

// http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire?serviceKey=mOk9mEF6Sksn9c8fyHGP%2F9cv1uUCR2UvKS8TCxg2yFoI2szGva6EdeQ3vFApAWBCRRMjYEDKEj%2FvvXELm1geNA%3D%3D&Q0=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C&Q1=%EA%B0%95%EB%82%A8%EA%B5%AC&QT=1&QN=%EC%82%BC%EC%84%B1%EC%95%BD%EA%B5%AD&ORD=NAME&pageNo=1&numOfRows=10

app.get("/pharm", (req, res) => {
  let api = async () => {
    let response = null;
    try {
      response = await axios.get(
        "http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire",
        {
          params: {
            serviceKey:
              "mOk9mEF6Sksn9c8fyHGP/9cv1uUCR2UvKS8TCxg2yFoI2szGva6EdeQ3vFApAWBCRRMjYEDKEj/vvXELm1geNA==",
            Q0: req.query.Q0,
            Q1: req.query.Q1,
            QT: req.query.QT,
            QN: req.query.QN,
            ORD: req.query.ORD,
            pageNo: req.query.pageNo,
            numOfRows: req.query.numOfRows,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
    return response;
  };

  api().then((response) => {
    console.log(response.data);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(response.data.response.body);
  });
});
