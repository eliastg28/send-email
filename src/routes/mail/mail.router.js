const { Router} = require('express');
const { sendMail} = require('../../controller/mail/mailController');
const router = Router();



router.post('/send', sendMail);

module.exports = router;