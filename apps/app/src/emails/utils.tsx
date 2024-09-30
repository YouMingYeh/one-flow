'use server';
import { createTransport } from 'nodemailer';

export const sendEmail = async (
  content: string,
  recipient: string,
) => {
  try {
    const transporter = createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
        user: 'team@one-flow.cn',
        pass: 'oneflowteam1',
      },
    });

    const emailOptions = {
      from: 'team@one-flow.cn',
      to: recipient,
      subject: '邀请您成为 OneFlow 的内测用户！',
      html: content,
    };
    const response = await transporter.sendMail(emailOptions);
    // Remove console.log to address linter error
    return response;
  } catch (error) {
    // Handle the error appropriately
    return error;
  }
};
