import dotenv from "dotenv";

dotenv.config({ path: "./.env" });
import nodemailer from "nodemailer";

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail", // You can use any email service
    auth: {
      user: EMAIL, // Replace with your email
      pass: PASSWORD, // Replace with your email password or an app-specific password
    },
  });

  const mailOptions = {
    from: email,
    to: EMAIL, // Replace with your email
    subject: `New message from ${name}`,
    text: message,
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.log(error);
  }
};

export { sendEmail };
