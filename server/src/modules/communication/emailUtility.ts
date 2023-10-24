import { emailTransporter } from "./emailTransporter";

export const sendVerificationEmail = async (email: string, verificationToken: string): Promise<void> => {
  if (!process.env.EMAIL_FROM_DEFAULT) {
    throw new Error('EMAIL_FROM_DEFAULT is not defined in environment variables');
  }
  const mailOptions = {
    from: process.env.EMAIL_FROM_DEFAULT,
    to: email,
    subject: 'Email Verification',
    text: `Your verification token is ${verificationToken}`,
  };

  await emailTransporter(mailOptions);
};

export const sendResetPasswordEmail = async (email: string, resetPasswordToken: string): Promise<void> => {
  if (!process.env.EMAIL_FROM_DEFAULT) {
    throw new Error('EMAIL_FROM_DEFAULT is not defined in environment variables');
  }
  const mailOptions = {
    from: process.env.EMAIL_FROM_DEFAULT,
    to: email,
    subject: 'Reset password',
    text: `Your reset password token is ${resetPasswordToken}`,
  };

  await emailTransporter(mailOptions);
};

export const sendPasswordUpdateSuccessEmail = async (email: string): Promise<void> => {
  if (!process.env.EMAIL_FROM_DEFAULT) {
    throw new Error('EMAIL_FROM_DEFAULT is not defined in environment variables');
  }
  const mailOptions = {
    from: process.env.EMAIL_FROM_DEFAULT,
    to: email,
    subject: 'Your password has been changed',
    text: `Your password has been updated.`,
  };

  await emailTransporter(mailOptions);
};
