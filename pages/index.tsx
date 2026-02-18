import Image from "next/image";
import profilePic from "../public/profile-pic.png";
import AnimatedHeading from "@/components/AnimatedHeading";
import Link from "next/link";
import Icons from "@/components/Icons";
import HireMe from "@/components/HireMe";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anand R | Frontend Engineer</title>
        <meta
          name="description"
          content="Senior fullstack developer focused on building high-performance React and Next.js products."
        />
      </Head>
      <TransitionEffect />
      <section className="flex flex-col md:flex-row items-center md:justify-between w-full mb-5 min-h-[calc(100vh-5rem)]">
        <div className="w-1/2">
          <Image
            src={profilePic}
            alt="Anand R portrait"
            className="mx-auto dark:brightness-75"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          />
        </div>
        <div className="md:w-1/2 md:pl-5 pt-5 w-full">
          <AnimatedHeading className="xl:text-6xl md:text-left lg:text-5xl md:text-4xl text-3xl text-center">
            Senior Frontend Engineer building fast, scalable web products.
          </AnimatedHeading>
          <p className="my-4 font-medium md:text-left text-center">
            I help teams ship production-grade experiences with React, Next.js,
            TypeScript, and Node.js. From architecture to polished UI, I focus
            on performance, accessibility, and clean code that scales.
          </p>
          <div className="flex items-center justify-center md:justify-normal md:self-start mt-2">
            <Link
              href="/anand-resume.pdf"
              className="flex items-center rounded-lg border-2 border-solid bg-primary py-2 px-4 md:py-2.5 lg:px-6 text-lg font-semibold
            capitalize text-primary-foreground hover:border-primary hover:bg-transparent hover:text-primary
            md:p-2 md:px-4 md:text-base hover:bg-none dark:hover:bg-none"
              target="_blank"
              download
            >
              Download Resume
              <Icons.externalLink className="inline-block ms-1" width={20} />
            </Link>
            <Link href="/#contact" className="ms-5 underline">
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>
      <ContactForm />
      <HireMe className="fixed bottom-4 left-4 hidden md:block" />
    </>
  );
}
