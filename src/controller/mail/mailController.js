const sgMail = require('@sendgrid/mail')

const sendMail = (req, res) => {
    console.log(req);
    const { email, nombre, apellidos } = req.body;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to: email,
        from: 'tg.elias.s@gmail.com',
        subject: `Estado de Solicitud`,
        text: `Hola ${nombre} ${apellidos}, su solicitud ha sido recibida, su estado actual es PENDIENTE, pronto le responderemos.`,
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email send');
            res.status(200).json({message: 'Email send'});
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json( { message : `Error sending email`, res : error });
        });
}
module.exports = { sendMail };