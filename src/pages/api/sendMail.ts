import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from "nodemailer";

export const runtime = 'edge';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.USERNAME,
                pass: process.env.PASSWORD
            }
        });

        try {
            const emailRes = await transporter.sendMail({
                from: email,
                to: "contact@samuel-gutmans.ch",
                subject: `Contact name: ${name}`,
                text: message
            });

            console.log("Message sent: %s", emailRes.messageId);

            res.status(200).json({ status: "Email sent" });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: "Email not sent" });
        }

    } else {
        // Handle any other HTTP method
        res.status(200).json({ status: "not a post request" });
    }
}
