require("dotenv").config();

const express = require("express");
const app = express();

const cors = require('cors');

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.listen(port, ()=> console.log("server is runnning: " + port))