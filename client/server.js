const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const nodeMailer = require("nodemailer");
// const XOAuth2 = require('nodemailer/lib/xoauth2');
// const multer = require('multer');
const os = require("os");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");

require("dotenv").config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));

const port = process.env.REACT_APP_SERVER_PORT;

app.get("/", (req, res) => {
  res.send(`<h3>Server</h3><p>${req.headers.host}</p>`);
});

console.log("hostname: ", os.hostname());

let adminEmail = "info@hohcentre.co.uk";

// Email template from ejs
const renderTemplate = (data, req) => {
  let templatePath = "";

  // console.log("data: ", req)

  templatePath = path.resolve(__dirname, "templates", "message.ejs");

  return ejs.renderFile(templatePath, data);
};

app.post("/send", async (req, res) => {
  console.log("req.body: ", req.body);
});

// Send Mail API for dual usage
app.post("/sendMail", async (req, res) => {
  try {
    console.log("req.body: ", req.body);

    const transporter = nodeMailer.createTransport({
      host: "mail.veltetech.com",
      port: 465,
      auth: {
        user: "danielgrahamboaz@veltetech.com",
        pass: "famE1IhryqmO",
      },
    });

    let emails = [adminEmail];

    const html = await renderTemplate({ ...req.body }, req);

    let mailOptions = {
      from: "HOH Church <info@hohcentre.co.uk>",
      to: emails,
      subject: req.body.subject,
      html: html,
    };

    const info = await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
        fs.unlinkSync(req.file.path);
      }
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
