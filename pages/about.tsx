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
        <title>About</title>
        <meta name="description" content="About Grace Anand" />
      </Head>
      <TransitionEffect />
      <AnimatedHeading>A little about me</AnimatedHeading>
      <section className="grid grid-cols-8 md:gap-16">
        <div className="items-start justify-start lg:col-span-4 col-span-8">
          <h2 className="mb-4 text-lg font-bold opacity-70">BIOGRAPHY</h2>
          <p className="font-medium ">
            Hi, I&apos;m <strong>Anand</strong>, a full-stack developer based in
            India. I enjoy creating things that live on the internet, whether
            that be websites, applications, or anything in between. My goal is
            to always build products that provide pixel-perfect, performant
            experiences.
          </p>
          <p className="my-4 font-medium">
            I believe that good application is not just about how it looks but
            also about how it works and how fast it loads. I work with keeping
            these things in mind.
          </p>
          <p className="font-medium">
            Whether I&apos;m working on a web app, mobile app, or a hybrid app,
            I always strive to build scalable products. I am always looking for
            opportunities to work with passionate people and exciting products.
          </p>
        </div>
        <div className="col-span-8 relative rounded-2xl p-8 border-2 border-primary bg-background h-fit lg:col-span-4 my-5 sm:my-8 md:my-0">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-primary" />
          <Image
            src={profilePic}
            alt="Grace Anand"
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
    digit: 10,
    description: "Projects Completed",
  },
  {
    digit: 5,
    description: "Happy Clients",
  },
  {
    digit: 4,
    description: "Years of Experience",
  },
];
