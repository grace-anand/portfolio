import AnimatedHeading from "@/components/AnimatedHeading";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../public/about-pic.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Highlights from "@/components/Highlights";
import TransitionEffect from "@/components/TransitionEffect";

const About = () => {
  return (
    <>
      <Head>
        <title>About Anand R | Fullstack Developer</title>
        <meta
          name="description"
          content="About Anand R, a frontend-focused fullstack developer with 4+ years building scalable web applications."
        />
      </Head>
      <TransitionEffect />
      <AnimatedHeading>Built for Product Engineering</AnimatedHeading>
      <section className="grid grid-cols-8 md:gap-16">
        <div className="items-start justify-start lg:col-span-4 col-span-8">
          <h2 className="mb-4 text-lg font-bold opacity-70">PROFILE</h2>
          <p className="font-medium ">
            I&apos;m <strong>Anand</strong>, a frontend-focused fullstack
            developer based in Chennai with 4+ years of experience delivering
            scalable, production-grade web applications.
          </p>
          <p className="my-4 font-medium">
            I specialize in React, Next.js, TypeScript, Node.js, and Express.
            My strength is turning complex product requirements into
            maintainable component systems, high-performance interfaces, and
            reliable backend integrations.
          </p>
          <p className="font-medium">
            I work closely with design and product teams, enforce strong coding
            standards, and mentor engineers to raise delivery quality. I&apos;m
            currently looking to contribute to teams building meaningful,
            high-impact digital products.
          </p>
        </div>
        <div className="col-span-8 relative rounded-2xl p-8 border-2 border-primary bg-background h-fit lg:col-span-4 my-5 sm:my-8 md:my-0">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-primary" />
          <Image
            src={profilePic}
            alt="Anand R"
            className="rounded-2xl dark:brightness-75"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          />
        </div>
        <div className="flex justify-between col-span-8  items-center text-center">
          {highlights.map((highlight, i) => (
            <Highlights
              key={i}
              digit={highlight.digit}
              description={highlight.description}
            />
          ))}
        </div>
      </section>
      <Skills />
      <Experience />
      <Education />
    </>
  );
};

export default About;

const highlights = [
  {
    digit: 40,
    description: "Apps Delivered",
  },
  {
    digit: 20,
    description: "Engineers Mentored",
  },
  {
    digit: 4,
    description: "Years in Production",
  },
];
