import { NextRequest } from 'next/server';

export const runtime = 'edge';

export default async function POST(req: NextRequest) {
    const body = await req.json()

    const { name, email, message } = body;

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
        console.log("Mailgun Error: " + err);
        return new Response(
            JSON.stringify({
                name: 'Email not sent',
            }),
            {
                status: 500,
            }
        )
    }
}
