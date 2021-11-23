const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express()

const router = require('./routes/mail/mail.router')
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Server on 4000");
})