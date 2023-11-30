var express = require('express');
var router = express.Router();
var productosModel = require('./../models/productosModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/productos', async function (req, res, next) {
    let productos = await productosModel.getProductos();

    productos = productos.map(productos => {
        if (productos.img_id) {
            const imagen = cloudinary.url(productos.img_id, {
                width: 200,
                height: 200,
                crop: 'fill'
            });
            return {
                ...productos,
                imagen
            }
        } else {
            return {
                ...productos,
                imagen: ''
            }
        }
    });
    res.json(productos);
});

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'ricardo.dure@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contacto a traves de
     la web y quiere más informacion a este correo:
      ${req.body.email} <br> Además, hizo el siguiente 
      comentario: ${req.body.mensaje} <br> Su tel es:
       ${req.body.telefono}`
    }
    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)
    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;