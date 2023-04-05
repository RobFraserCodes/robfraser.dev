// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

const { OAuth2 } = google.auth;
const { gmail } = google;

const oauth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground' // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed');
    return;
  }

  const { subject, message, emailAddress } = req.body;

  try {
    const email = `
        Subject: ${subject}
        Email: ${emailAddress}
        ${message}
    `;

    const base64EncodedEmail = Buffer.from(email).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    const gmailApi = gmail({ version: 'v1', auth: oauth2Client });
    await gmailApi.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: base64EncodedEmail,
      },
    });

    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send(`Failed to send email: ${error}`);
  }
};

export default sendEmail;
