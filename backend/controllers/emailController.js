const nodemailer = require('nodemailer');
const dotenv= require('dotenv');
dotenv.config();


// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mpnzabera@gmail.com', // Replace with your Gmail email
    pass: process.env.PASSWORD // Replace with your Gmail password
  }
});



// Controller to handle sending the contact form email
exports.sendContactEmail = (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // Replace with your Gmail email
    to: 'nzaberamikepeter@gmail.com', // Replace with the recipient's email address
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, error: 'An error occurred while sending the email.' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ success: true, message: 'Your message has been sent successfully!' });
    }
  });
};
