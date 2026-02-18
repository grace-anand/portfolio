import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

type Data = {
  data?: string;
  error?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const { email, message, name } = JSON.parse(req.body);

      if (!email || !message || !name) {
        res.status(400).json({ error: "Missing required fields." });
        return;
      } else if (name.length < 2) {
        res.status(400).json({ error: "Name is too short." });
        return;
      } else if (name.length > 50) {
        res.status(400).json({ error: "Name is too long." });
        return;
      } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false) {
        res.status(400).json({ error: "Invalid email address." });
        return;
      } else if (message.length < 10) {
        res.status(400).json({ error: "Message is too short." });
        return;
      } else if (message.length > 500) {
        res.status(400).json({ error: "Message is too long." });
        return;
      }

      const response = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "graceanand99@gmail.com",
        subject: `New portfolio inquiry from ${name}`,
        reply_to: email,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });
      if (response.error) {
        throw new Error();
      }
      res.status(200).json({ data: "Message sent successfully." });
    } catch (error: unknown) {
      res
        .status(500)
        .json({ error: "Something went wrong. Please try again shortly." });
    }
  } else {
    res.status(400).json({ error: "Method not allowed." });
  }
}
