import nodemailer from 'nodemailer'

import { google } from 'googleapis'

import dotenv from 'dotenv'

dotenv.config()

/**
 * Ye ek OAuth client object bana raha hai
 * Google se baat karna
 * tokens generate karna
 */



const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);


oAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});






// Function to send email
const sendEmail = async (to, subject, text, html) => {
  try {

/**
 *  accessToken call karta hai Google API ko
👉 Aur return karta hai:
{
  token: "ya29.a0AfH6SMB..."
}
 * */


    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',  

      // Yaha Gmail ko credentials milte hain:
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token   //object me se string token lena

      },
    });


       // verify 
    await transporter.verify();

    console.log("SMTP ready ✅");

    const info = await transporter.sendMail({
      from: `"Restaurant wala" <${process.env.EMAIL_USER}>`, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

async function sendRegistration(userEmail, name) {
  const subject = 'Welcome to my page';
  const text = `hello ${name}, thank you for registration`
  const html =  `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f4f4f4;">
    
    <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 20px; border-radius: 10px;">
      
      <h2 style="color: #333;">Welcome, ${name} 👋</h2>
      
      <p style="color: #555;">
        Thank you for registering with us! We're really excited to have you on board.
      </p>

      <p style="color: #555;">
        Your account has been successfully created, and you can now explore all the features 
        we offer on our platform. Whether you're here to discover amazing food, place orders, 
        or manage your preferences — we’ve got everything ready for you.
      </p>

      <p style="color: #555;">
        If you have any questions or need assistance, feel free to reach out to us anytime.
        Our team is always here to help you.
      </p>

      <p style="color: #555;">
        We hope you have a great experience using our platform 🚀
      </p>

      <hr style="margin: 20px 0;" />

      <p style="color: #888; font-size: 14px;">
        Cheers,<br/>
        <strong>Restaurant Team</strong>
      </p>

    </div>
  </div>
`
  await sendEmail(userEmail, subject, text, html)
}

/**
 * emailService ek object hona chahiye
  jisme sendRegistration method ho
 */


export default {
  sendRegistration
};