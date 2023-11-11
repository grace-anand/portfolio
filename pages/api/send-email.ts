import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import ContactFormEmail from "@/components/ContactFormEmail";
import React from "react";

type Data = {
  data: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { email, message } = req.body;

    try {
      if (!email || !message) {
        res.status(200).json({ data: "Invalid request" });
        return;
      } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false) {
        res.status(200).json({ data: "Invalid email" });
        return;
      } else if (message.length < 10) {
        res.status(200).json({ data: "Message too short" });
        return;
      } else if (message.length > 3000) {
        res.status(200).json({ data: "Message too long" });
        return;
      }

      const response = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "graceanand99@gmail.com",
        subject: "Message from contact form",
        reply_to: email,
        react: React.createElement(ContactFormEmail, {
          message: message,
          senderEmail: email,
        }),
      });
      if (response.error) {
        throw new Error();
      }
      res.status(200).json({ data: "Email sent" });
    } catch (error: unknown) {
      res.status(500).json({ data: "Something went wrong. Please try again." });
    }
  } else {
    res.status(200).json({ data: "Invalid request" });
  }
}
