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
          Hello, I&apos;m Anand R 👋. A passionate web developer.
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
            download={true}
          >
            Download CV <Icons.externalLink className="inline-block ms-1" />
          </Link>
          <Link
            href="/#contact"
            className="m-4 text-lg font-medium capitalize text-secondary-foreground rounded-lg border-2 border-solid bg-secondary p-2.5 px-6 
            hover:border-secondary hover:bg-slate-500 hover:text-secondary
            md:p-2 md:px-4 md:text-base hide-squiggly-line"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
