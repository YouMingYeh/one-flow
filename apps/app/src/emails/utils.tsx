'use server';
import type { Options } from '@react-email/components';
import { render } from '@react-email/components';
import { createTransport } from 'nodemailer';
import { Email } from './email';

export const sendEmail = async (
  username: string,
  recipient: string,
  options?: Options,
) => {
  const template = <Email username={username} />;
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

    const emailHtml = await render(template, options);
    const emailOptions = {
      from: 'team@one-flow.cn',
      to: recipient,
      subject: '邀请您成为 OneFlow 的内测用户！',
      html: emailHtml,
    };
    const response = await transporter.sendMail(emailOptions);
    // Remove console.log to address linter error
    return response;
  } catch (error) {
    // Handle the error appropriately
    return error;
  }
};
