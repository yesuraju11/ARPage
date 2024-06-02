const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yesurajubattula2@gmail.com', // Your email address
        pass: '11042000@Raja' // Your email password or application-specific password
    }
});

// Define email options
const mailOptions = {
    from: 'yesurajubattula2@gmail.com', // Sender email address
    to: 'nmurali.ab@gmail.com', // Recipient email address
    subject: 'Test Email', // Email subject
    text: 'This is a test email sent using nodemailer and Node.js.' // Email body
};

// Send email
transporter.sendMail(mailOptions, function(error, info) {
    console.log("working");
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});


function EmailSend() 
{

var fname=document.getElementById('fname').value
var lname=document.getElementById('lname').value
var email=document.getElementById('email').value
var subject=document.getElementById('subject').value
var message=document.getElementById('message').value
console.log(fname);
console.log(lname);
console.log(email);
console.log(subject);
console.log(message);
//console.log(location.reload());

}