'use server';
import { createTransport } from 'nodemailer';

export const sendEmail = async (content: string, recipient: string) => {
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

    // sync to jasoncjc0514@gmail.com
    void transporter.sendMail({
      from: 'team@one-flow.cn',
      to: 'jasoncjc0514@gmail.com',
      subject: `剛剛邀请了${recipient}成为 OneFlow 的内测用户`,
      text: `已邀請${recipient}成為 OneFlow 的内测用户`,
    });
    // Remove console.log to address linter error
    return { data: response, error: null };
  } catch (error) {
    // Handle the error appropriately
    return { data: null, error };
  }
};
