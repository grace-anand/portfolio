import Image from "next/image";
import profilePic from "../public/profile-pic.png";
import AnimatedHeading from "@/components/AnimatedHeading";
import Link from "next/link";
import Icons from "@/components/Icons";
import HireMe from "@/components/HireMe";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Grace Anand's Home Page" />
      </Head>
      <section className="flex items-center justify-between w-full pb-5">
        <div className="w-1/2">
          <Image
            src={profilePic}
            alt="grace-anand"
            className="mx-auto"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          />
        </div>
        <div className="w-1/2 pl-5">
          <AnimatedHeading className="text-6xl text-left">
            Hello, I&apos;m Anand 👋. A passionate web dev who is keen on
            learning new tech.
          </AnimatedHeading>
          <p className="my-4 font-medium">
            I am a web developer with a passion for building web applications. I
            enjoy learning new technologies and building projects with them.
          </p>
          <div className="flex items-center self-start mt-2">
            <Link
              href="/anand-r-resume.pdf"
              className="flex items-center rounded-lg border-2 border-solid bg-primary p-2.5 px-6 text-lg font-semibold
            capitalize text-primary-foreground hover:border-primary hover:bg-transparent hover:text-primary
            md:p-2 md:px-4 md:text-base hover:bg-none dark:hover:bg-none"
              target="_blank"
              download
            >
              Resume{" "}
              <Icons.externalLink className="inline-block ms-1" width={20} />
            </Link>
            <Link href="/#contact" className="ms-5 underline">
              Contact
            </Link>
          </div>
        </div>
      </section>
      <HireMe />
    </>
  );
}
