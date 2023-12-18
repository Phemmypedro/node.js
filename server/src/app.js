const express = require("express");
const app = express();
const validateEmail = require("./middlewares/emailValidator");
const cors = require("cors");
const transport = require("./utils/smtpTransport");

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());

app.post("/email/send", validateEmail, (req, res) => {
  const { email, message } = req.body;

  const mailOptions = {
    to: email,
    from: "femipedro0@gmail.com",
    subject: "testing email sender",
    html: `<p>${message}</p>`,
  };

  transport.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
      return res.status(400).json({ error: "email sender failed" });
    } else {
      return res.status(201).json({ message: "email sent successfully" });
    }
  });
});

module.exports = app;
