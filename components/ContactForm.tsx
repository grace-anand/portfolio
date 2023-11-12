import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
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

const productSchema = z.object({
  name: z
    .string()
    .min(5, {
      message: "Name must be at least 5 characters long",
    })
    .max(50, {
      message: "Name must be at most 50 characters long",
    }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters long",
    })
    .max(500, {
      message: "Message must be at most 500 characters long",
    }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      message: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof productSchema>) {
    console.log("🚀 ~ file: ContactForm.tsx:35 ~ onSubmit ~ values:", values);
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
      <h4 className="text-4xl my-7 font-semibold text-center md:text-5xl text-primary">
        Contact me
      </h4>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit) as unknown as undefined}>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="py-2 md:w-1/2 md:inline-block md:pe-2">
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Anand" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="py-2 md:w-1/2 md:inline-block md:ps-2">
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input placeholder="anand@google.com" {...field} />
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
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Hello, I would like to hire you for my project..."
                    {...field}
                    value={field.value ?? ""}
                    rows={6}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            className="flex items-center rounded-lg border-2 border-solid bg-primary py-2 px-4 md:py-2.5 lg:px-6 text-lg font-semibold
            capitalize text-primary-foreground hover:border-primary hover:bg-transparent hover:text-primary
            md:p-2 md:px-4 md:text-base hover:bg-none dark:hover:bg-none my-2 md:my-4"
          >
            Submit
            <Icons.plane className="inline-block ms-2 w-4" />
          </button>
        </form>
      </Form>
    </motion.section>
  );
}
