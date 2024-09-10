require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const { ContactMsg, QuoteMsg } = require("./EmailTemplate");

const port = process.env.PORT;
const BaseURL = process.env.BaseURL;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// console.log = () => { };

app.post("/contact", async (req, res) => {
  data = req.body;

  let firstName = data.firstName;
  let lastName = data.last_name;
  let phoneNumber = data.phone_number;
  let yourEmail = data.your_email;
  let yourMessage = data.your_message;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.UserEmail,
      pass: process.env.UserPassword,
    },
  });

  var message = {
    from: `Quick Trip Removals ${yourEmail}`,
    to: process.env.UserEmail,
    replyTo: yourEmail,
    subject: "New Contact Message",
    text: yourMessage,
    html: ContactMsg(
      firstName,
      lastName,
      yourEmail,
      phoneNumber,
      yourMessage,
      BaseURL
    ),
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      return res.send(`<p>error in sending mail please try again later </p> <a href=${BaseURL}>Go To Home</a>`);
    } else {
      // console.log("successfully send the Mail", info);
      return res.send(`<p>successfully send the Mail</p> <a href=${BaseURL}>Go To Home</a>`);
    }
  });
});

app.post("/quote", async (req, res) => {
  data = req.body;

  let firstName = data.firstName;
  let SurName = data.Surname;
  let phoneNumber = data.telePhone;
  let yourEmail = data.email;
  let movingDate = data.movingDate;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.UserEmail,
      pass: process.env.UserPassword,
    },
  });

  var message = {
    from: `Quick Trip Removals ${yourEmail}`,
    to: process.env.UserEmail,
    replyTo: yourEmail,
    subject: "New Quote Message",
    html: QuoteMsg(
      firstName,
      SurName,
      yourEmail,
      phoneNumber,
      movingDate,
      BaseURL
    ),
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err,BaseURL);
      
      return res.send(`<p>error in sending mail please try again later </p> <a href=${BaseURL}>Go To Home</a>`);
    } else {
      // console.log("successfully send the Mail", info);
      return res.send(`<p>successfully send the Mail</p> <a href=${BaseURL}>Go To Home</a>`);
    }
  });
});

app.listen(port, () => console.log("server is runnning: " + port));
