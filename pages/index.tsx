import Image from "next/image";
import profilePic from "../public/profile-pic.png";
import AnimatedHeading from "@/components/AnimatedHeading";
import Link from "next/link";
import { Icons } from "@/components/Icons";

export default function Home() {
  return (
    <section className="flex items-center justify-between w-full">
      <div className="w-1/2">
        <Image src={profilePic} alt="grace-anand" className="w-full" />
      </div>
      <div className="w-1/2 pl-5">
        <AnimatedHeading className="text-6xl text-left">
          Hello, I&apos;m Anand 👋. A passionate web dev who is keen on learning
          new tech.
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
            md:p-2 md:px-4 md:text-base hide-squiggly-line"
            target="_blank"
            download
          >
            Download CV <Icons.externalLink className="inline-block ms-1" />
          </Link>
          <Link href="/#contact" className="ms-5 underline">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
