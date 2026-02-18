import { motion } from "framer-motion";
import Icons from "./Icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import React from "react";
import { cn } from "@/lib/utils";

const contactFormDetailsSchema = z.object({
  name: z
    .string()
    .min(5, {
      message: "Please enter your full name (minimum 5 characters).",
    })
    .max(50, {
      message: "Name must be 50 characters or fewer.",
    }),
  message: z
    .string()
    .min(10, {
      message: "Please share at least 10 characters about your project.",
    })
    .max(500, {
      message: "Message must be 500 characters or fewer.",
    }),
  email: z.string().email({
    message: "Please enter a valid work email.",
  }),
});

export default function Contact() {
  const [notification, setNotification] = React.useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const form = useForm<z.infer<typeof contactFormDetailsSchema>>({
    resolver: zodResolver(contactFormDetailsSchema),
    defaultValues: {
      name: "",
      message: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormDetailsSchema>) {
    const { name, email, message } = values;
    try {
      await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      form.reset();
      setNotification({
        type: "success",
        message: "Thanks for reaching out. I will get back to you shortly.",
      });
    } catch (error) {
      setNotification({
        type: "error",
        message: "Could not send your message right now. Please try again.",
      });
    }
  }

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <h2 className="text-4xl my-7 font-semibold text-center md:text-5xl text-primary">
        Let&apos;s Build Something Great
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit) as unknown as undefined}>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="py-2 md:w-1/2 md:inline-block md:pe-2 align-top">
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="py-2 md:w-1/2 md:inline-block md:ps-2 align-top">
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@company.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem className="py-2">
                <FormLabel htmlFor="message">Project Brief</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me about your goals, timeline, and what success looks like."
                    {...field}
                    value={field.value ?? ""}
                    rows={6}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-center">
            {notification && (
              <p
                className={cn(
                  notification.type === "success"
                    ? "text-green-500 dark:text-green-400"
                    : "text-destructive"
                )}
              >
                {notification.message}
              </p>
            )}
          </div>

          <Button
            disabled={form.formState.isSubmitting}
            className="group mt-2 md:mt-5"
          >
            Send Message
            {form.formState.isSubmitting ? (
              <div className=" ms-2 h-4 w-4 animate-spin rounded-full border-b-2 border-primary-foreground group-hover:border-primary"></div>
            ) : (
              <Icons.plane className="inline-block ms-2 w-4" />
            )}
          </Button>
        </form>
      </Form>
    </motion.section>
  );
}
