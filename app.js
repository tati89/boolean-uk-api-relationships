var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

const doctorsRouter = require("./src/resources/doctors/router");
const appointmentsRouter = require("./src/resources/appointments/router");

app.use(logger("dev"));
app.use(express.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/doctors", doctorsRouter);
app.use("/appointments", appointmentsRouter);

app.all("*", (req, res) => {
  res.json({ msg: true });
});

module.exports = app;
