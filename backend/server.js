require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer")

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/contact", async (req, res) => {
  data = req.body;

  let firstName = data.firstName;
  let lastName = data.last_name;
  let phoneNumber = data.phone_number;
  let yourEmail = data.your_email;
  let yourMessage = data.your_message;

  console.log( firstName, lastName, phoneNumber, yourEmail, yourMessage);

   let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    // host: "smtp.houseRemoval.com",
    // host: "mail.privateemail.com", 
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.UserEmail,
      pass: process.env.UserPassword,
    },
  });

  var message = {
    from: yourEmail,
    to: process.env.UserEmail,
    replyTo: yourEmail,
    subject: "New Message",
    text: yourMessage,
    html: `<ul style="list-style-type:none">
        <li><span> <b>First Name</b>: </span><span>${firstName}</span></li>
        <li><span><b>Last Name</b>: </span><span>${lastName}</span></li>
        <li><span><b>Email</b>: </span><span>${yourEmail}</span></li>
        <li><span><b>Number</b>: </span><span>${phoneNumber}</span></li>
        <li><span><b>Message</b>: </span><span>${yourMessage}</span></li>
        </ul>`,
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      return res.send(`<p>error in sending mail please try again later </p> <a href='http://127.0.0.1:5500/frontend/'>Go To Home</a>`);
    } else {
      // console.log("successfully send the Mail", info);
      return res.send("<p>successfully send the Mail</p> <a href='http://127.0.0.1:5500/frontend/'>Go To Home</a>");
    }
  });
});

app.listen(port, () => console.log("server is runnning: " + port));
