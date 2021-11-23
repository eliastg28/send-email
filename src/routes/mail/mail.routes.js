const { Router } = require('express');
const { sendMail } = require('../../controller/mail/mailController');
const sendEmail = Router();


sendEmail.post('/send', sendMail);

module.exports = sendEmail;