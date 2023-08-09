const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

// Nodemailer transporter for Outlook

// Controller to handle sending the contact form email
exports.sendContactEmail = (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "mugishayves189000@gmail.com",
        pass: "ocinvblqzvfifmpw",
      },
      tls:{
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: { email }, // Replace with your Outlook email
      to: "micodan369@gmail.com", // Replace with the recipient's email address
      subject: "Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while sending the email.");
  }
};
