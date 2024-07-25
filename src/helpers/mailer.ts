import bcryptjs from "bcryptjs";
import User from "@/src/models/user.model";
import nodemailer from "nodemailer";
import { EmailType } from "@/src/enums/EmailType.enum";

interface SendEmailProps {
  email: string;
  emailType: EmailType;
  userId: string;
}

export const sendEmail = async ({
  email,
  emailType,
  userId,
}: SendEmailProps) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    const emailTemplate = `<p>Click 
    <a href='${
      process.env.DOMAIN
    }/verifyemail?token=${hashedToken}'>here if you dare</a>
     to ${
       emailType === EmailType.VERIFY
         ? "verify your email"
         : "reset your password"
     }
     or copy and paste the following link in your browser:
      <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
     </p>`;

    if (emailType === EmailType.VERIFY) {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000, // 1 hour
      });
    } else if (emailType === EmailType.RESET) {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000, // 1 hour
      });
    }

    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL_ADDRESS,
      to: email,
      subject:
        emailType === EmailType.VERIFY
          ? "Email Verification"
          : "Reset Password",
      html: emailTemplate,
    };

    return transporter.sendMail(mailOptions);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
