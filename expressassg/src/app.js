const express = require("express");
const app = express();
const path = require("path");
const moment = require("moment");

const workHoursMiddleware = (req, res, next) => {
  const now = moment();
  const dayOfWeek = now.day();
  const hour = now.hour();

  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
    next();
  } else {
    res.send(
      "This web application is only available Monday to Friday, from 9am to 5pm)."
    );
  }
};
app.use(express.static("public"));
// app.use(workHoursMiddleware);

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/services.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/contact.html"));
});

module.exports = app;
