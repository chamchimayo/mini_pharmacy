const express = require("express");
const app = express();
const Http = require('http');
const http = Http.createServer(app);
const PORT = process.env.EXPRESS_PORT || 3000;
const routes = require("./routes");

app.use(express.static("public_html"));
app.use(express.json());

app.use("/", routes);

app.get("/", (req, res) => {
    res.send("Hello!");
});

http.listen(PORT, () => {
    console.log(PORT, "로 연결되었습니다.");
})