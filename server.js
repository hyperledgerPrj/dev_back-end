const express = require("express");
const app = express();
var engines = require("consolidate");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// router
var indexRouter = require("./routes/main")(app);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view 경로 설정
app.set("views", __dirname + "/views");

// view engine 을 html로 설정
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
// app.engine("html", engines.mustache); // ejs, pug 중에 mustache 기능
// app.set("view engine", "html");

// 기본 path를 /public으로 설정(css, javascript 등의 파일 사용)
app.use(express.static(__dirname + "/public"));

// use routes
app.use("/", indexRouter);

// var server = app.listen(3000, function() {
//   console.log("Express server has started on prot 3000");
// });

module.exports = app;
