import type { NextApiRequest, NextApiResponse } from "next";
// import { Resend } from "resend";
// import ContactFormEmail from "@/components/ContactFormEmailTemplate";
// import React from "react";

export const runtime = "edge";
export const dynamic = "force-dynamic";

type Data = {
  data?: string;
  error?: string;
};

// const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const { email, message, name } = JSON.parse(req.body);
      console.log("🚀 ~ file: send-email.ts:23 ~ req.body:", req.body);

      if (!email || !message || !name) {
        res.status(400).json({ error: "Invalid request" });
        return;
      } else if (name.length < 2) {
        res.status(400).json({ error: "Name too short" });
        return;
      } else if (name.length > 50) {
        res.status(400).json({ error: "Name too long" });
        return;
      } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false) {
        res.status(400).json({ error: "Invalid email" });
        return;
      } else if (message.length < 10) {
        res.status(400).json({ error: "Message too short" });
        return;
      } else if (message.length > 500) {
        res.status(400).json({ error: "Message too long" });
        return;
      }

      // const response = await resend.emails.send({
      //   from: "Contact Form <onboarding@resend.dev>",
      //   to: "graceanand99@gmail.com",
      //   subject: "Message from contact form",
      //   reply_to: email,
      //   react: React.createElement(ContactFormEmail, {
      //     message: message,
      //     senderEmail: email,
      //     senderName: name,
      //   }),
      // });
      // if (response.error) {
      //   throw new Error();
      // }
      res.status(200).json({ data: "Email sent" });
    } catch (error: unknown) {
      res
        .status(500)
        .json({ error: "Something went wrong. Please try again." });
    }
  } else {
    res.status(400).json({ error: "Invalid request" });
  }
}
