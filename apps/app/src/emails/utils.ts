"use server"
import type { Options } from '@react-email/components';
import { render } from '@react-email/components';
import { createTransport } from 'nodemailer';

export const sendEmail = async (
  template: React.ReactElement,
  options?: Options,
) => {
  try {
    const transporter = createTransport({
      host: 'smtpout.secureserver.net',
      port: 465,
      secure: true,
      auth: {
        user: 'team@one-flow.cn',
        pass: 'teamoneflow1',
      },
    });

    const emailHtml = await render(template, options);
    const emailOptions = {
      from: 'team@one-flow.cn',
      to: 'b10705052@ntu.edu.tw',
      subject: 'hello world',
      html: emailHtml,
    };
    const response = await transporter.sendMail(emailOptions);
    // Remove console.log to address linter error
    return response;
  } catch (error) {
    // Handle the error appropriately
    console.error('Error sending email:', error);
    throw error; // Re-throw the error for the caller to handle if needed
  }
};
