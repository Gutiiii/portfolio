import type { NextApiResponse } from 'next';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export default async function handler(req: NextRequest, res: NextApiResponse) {
    if (req.method === 'POST') {

        const body = await req.json()

        const { name, email, message } = body;

        console.log(name)
        console.log(email)
        console.log(message)
        const formData = new URLSearchParams();
        formData.append('from', "contact@sandbox8aba1c7fdf024caebb054691baabd496.mailgun.org");
        formData.append('to', 'samuel.gutmans@gmail.com');
        formData.append('subject', "New Mail from Portfolio");
        formData.append('text', `Contact name: ${name} \n Email Adresse: ${email} \n\n Message: ${message}`);

        try {
            const response = await fetch(`https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`, {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${Buffer.from(`api:${process.env.MAILGUN_API_KEY}`).toString('base64')}`,
                },
                body: formData,
            });
            if (response.status === 200) {
                console.log("Message sent: %s", response);
                return new Response(
                    JSON.stringify({
                        name: 'Email sent',
                    }),
                    {
                        status: 200,
                    }
                )
            } else {
                throw new Error(`Email not sent: ${response.statusText}`);
            }

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
    }
}
