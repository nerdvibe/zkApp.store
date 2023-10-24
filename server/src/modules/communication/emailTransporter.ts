import nodemailer from 'nodemailer';
import { log } from "@modules/logger";

interface EmailTransporter {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export const emailTransporter = async({from, to, subject, text}: EmailTransporter): Promise<void> => {

  if(process.env.NODE_ENV !== 'production') {
    log.info(`
    Email catch-all.

    Email From: ${from}
    Email To: ${to}
    Email Subject: ${subject}
    Email Text: ${text}`)

    return;
  }

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_TRANSPORTER_SERVICE,
    auth: {
      user: process.env.EMAIL_TRANSPORTER_USER,
      pass: process.env.EMAIL_TRANSPORTER_PASSWORD,
    },
  });

  const mailOptions = {
    from,
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
}
