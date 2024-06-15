const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "bgapi.restaurantapp.in",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "info@bgapi.restaurantapp.in",
    pass: "bgVerification!@#45",
  },
  tls: {
    rejectUnauthorized: false  // Allow self-signed certificates
  }
});

const mailOptions = {
    from: '<info@bgapi.restaurantapp.in>', // sender address
    to: "sheenukallani09@gmail.com", // list of receivers
    subject: "Hello", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };
  
  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });


exports.mailer = transporter;