import type { NextApiRequest, NextApiResponse } from 'next';

export const runtime = 'edge';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const formData = new URLSearchParams();
        formData.append('from', "contact@sandbox8aba1c7fdf024caebb054691baabd496.mailgun.org");
        formData.append('to', 'contact@samuel-gutmans.ch');
        formData.append('subject', `Contact name: ${name}`);
        formData.append('text', message);

        try {
            const emailRes = await fetch(`https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`, {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${Buffer.from(`api:${process.env.MAILGUN_API_KEY}`).toString('base64')}`,
                },
                body: formData
            });

            if (!emailRes.ok) {
                throw new Error(`Email not sent: ${emailRes.status}`);
            }

            const emailResBody = await emailRes.json();

            console.log("Message sent: %s", emailResBody.id);
            return new Response(
                JSON.stringify({
                    name: 'Email sent',
                }),
                {
                    status: 200,
                }
            )
            // res.status(200).json({ status: "Email sent" });
        } catch (err) {
            console.log(err);
            return new Response(
                JSON.stringify({
                    name: 'Email not sent',
                }),
                {
                    status: 500,
                }
            )
            // res.status(500).json({ status: "Email not sent" });
        }

    } else {
        // Handle any other HTTP method
        return new Response(
            JSON.stringify({
                name: 'not a post request',
            }),
            {
                status: 200,
            }
        )
        // res.status(200).json({ status: "not a post request" });
    }
}
