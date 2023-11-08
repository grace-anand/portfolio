import AnimatedHeading from "@/components/AnimatedHeading";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../public/my-pic.png";
import { useInView, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About Grace Anand" />
      </Head>
      <section className="px-8 md:px-20">
        <AnimatedHeading className="mb-16">A little about me</AnimatedHeading>
        <div className="grid grid-cols-8 gap-16">
          <div className="xl:col-span-3 items-start justify-start lg:col-span-4 order-2 md:order-none col-span-8">
            <h2 className="mb-4 text-lg font-bold opacity-70">BIOGRAPHY</h2>
            <p className="font-medium ">
              Hi, I&apos;m <strong>Anand</strong>, a full-stack developer based
              in India. I enjoy creating things that live on the internet,
              whether that be websites, applications, or anything in between. My
              goal is to always build products that provide pixel-perfect,
              performant experiences.
            </p>
            <p className="my-4 font-medium">
              I believe that good application is not just about how it looks but
              also about how it works and how fast it loads. I work with keeping
              these things in mind.
            </p>
            <p className="font-medium">
              Whether I&apos;m working on a web app, mobile app, or a hybrid
              app, I always strive to build scalable products. I am always
              looking for opportunities to work with passionate people and
              exciting products.
            </p>
          </div>
          <div className="col-span-8 relative rounded-2xl p-8 border-2 border-primary bg-background h-fit lg:col-span-4 xl:col-span-3">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-primary" />
            <Image
              src={profilePic}
              alt="Grace Anand"
              className="rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="xl:col-span-2 flex xl:flex-col xl:items-end justify-between col-span-8 flex-row  items-center order-3 md:order-none">
            <Highlights digit={10} description="Projects Completed" />
            <Highlights digit={5} description="Happy Clients" />
            <Highlights digit={2} description="Years of Experience" />
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </section>
    </>
  );
};

export default About;

type Props = {
  digit: number;
  description: string;
};

const Highlights = ({ digit, description }: Props) => (
  <div className="flex flex-col xl:items-end justify-center items-center">
    <span className="inline-block lg:text-7xl font-bold md:text-6xl sm:text-5xl text-4xl">
      <span>
        <AnimatedNumbers digit={digit} />
      </span>
      +
    </span>
    <h2 className="mb-4 xl:text-xl font-medium capitalize text-dark/75 dark:text-light/75  md:text-center md:text-lg sm:text-base text-sm">
      {description}
    </h2>
  </div>
);

const AnimatedNumbers = ({ digit }: { digit: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const springValue = useSpring(0, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      springValue.set(digit);
    }
  }, [springValue, digit, isInView]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= digit) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, digit]);

  return <span ref={ref} />;
};
