import AnimatedHeading from "@/components/AnimatedHeading";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import profilePic from "../public/my-pic.png";
import Icons from "@/components/Icons";
import { motion } from "framer-motion";

const FeaturedProject = ({
  type,
  title,
  summary,
  link,
  image,
  github,
}: {
  type: string;
  title: string;
  summary: string;
  link: string;
  image: StaticImageData;
  github: string;
}) => {
  return (
    <article className="relative flex w-full items-center justify-between sm:rounded-3xl sm:rounded-br-2xl lg:p-12 shadow-2xl bg-background ring-2 flex-col sm:p-8 rounded-2xl rounded-br-3xl p-4 lg:flex-row">
      <div className="absolute top-0 sm:-right-3 -z-10 sm:h-[103%] sm:w-[101%] sm:rounded-[2.5rem] rounded-br-3xl -right-2 h-[102%] w-[100%] rounded-[1.5rem] bg-primary"></div>
      <Link
        target="_blank"
        className="lg:w-1/2 cursor-pointer overflow-hidden rounded-lg w-full"
        href={link}
      >
        <Image
          src={image}
          alt={title}
          className="hover:scale-110 transform transition-all duration-300 ease-in-out"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
        />
      </Link>
      <div className="flex lg:w-1/2 flex-col items-start justify-between lg:pl-6 w-full pl-0 pt-6 lg:pt-0">
        <span className="sm:text-xl font-medium text-primary text-base">
          {type}
        </span>
        <Link
          target="_blank"
          className="underline-offset-2 hover:underline hover:bg-none dark:hover:bg-none"
          href={link}
        >
          <h2 className="my-2 w-full text-left lg:text-4xl font-bold sm:text-3xl text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-sm sm:text-base">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <motion.a
            target="_blank"
            className="w-10 hover:bg-none dark:hover:bg-none"
            aria-label={title + " Github Link"}
            href={github}
            whileHover={{ y: -2 }}
            whileTap={{ y: -2 }}
          >
            <Icons.github />
          </motion.a>
          <Link
            target="_blank"
            className="ml-4 rounded-lg p-2 sm:px-6 sm:text-lg font-semibold px-4 text-base bg-primary text-primary-foreground hover:bg-none dark:hover:bg-none hover:text-primary hover:shadow-lg hover:bg-secondary"
            aria-label={title + " Visit Project"}
            href={link}
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({
  type,
  title,
  summary,
  link,
  image,
  github,
}: {
  type: string;
  title: string;
  summary: string;
  link: string;
  image: StaticImageData;
  github: string;
}) => {
  return (
    <article className="relative flex w-full items-center justify-between sm:rounded-3xl sm:rounded-br-2xl lg:p-12 shadow-2xl bg-background ring-2 flex-col sm:p-8 rounded-2xl rounded-br-3xl p-4">
      <div className="absolute top-0 sm:-right-3 -z-10 sm:h-[103%] sm:w-[101%] sm:rounded-[2.5rem] rounded-br-3xl -right-2 h-[102%] w-[100%] rounded-[1.5rem] bg-primary"></div>
      <Link
        target="_blank"
        className="cursor-pointer overflow-hidden rounded-lg w-full"
        href={link}
      >
        <Image
          src={image}
          alt={title}
          className="hover:scale-110 transform transition-all duration-300 ease-in-out"
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-full pl-0 pt-6">
        <span className="sm:text-xl font-medium text-primary text-base">
          {type}
        </span>
        <Link
          target="_blank"
          className="underline-offset-2 hover:underline hover:bg-none dark:hover:bg-none"
          href={link}
        >
          <h2 className="my-2 w-full text-left lg:text-4xl font-bold sm:text-3xl text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-sm sm:text-base">
          {summary}
        </p>
        <div className="mt-2 flex justify-between w-full">
          <Link
            target="_blank"
            className="rounded-lg p-2 sm:px-6 sm:text-lg font-semibold px-4 text-base bg-primary text-primary-foreground hover:bg-none dark:hover:bg-none hover:text-primary hover:shadow-lg hover:bg-secondary"
            aria-label={title + " Visit Project"}
            href={link}
          >
            Visit
          </Link>
          <motion.a
            target="_blank"
            className="w-10 hover:bg-none dark:hover:bg-none"
            aria-label={title + " Github Link"}
            href={github}
            whileHover={{ y: -2 }}
            whileTap={{ y: -2 }}
          >
            <Icons.github />
          </motion.a>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects by Grace Anand" />
      </Head>
      <section className="px-8 md:px-20">
        <AnimatedHeading className="mb-16">Projects</AnimatedHeading>
        <div className="grid grid-cols-12 xl:gap-24 md:gap-y-32 lg:gap-x-16 sm:gap-x-8 gap-y-24 gap-x-0 mb-10">
          <div className="col-span-12">
            <FeaturedProject {...allProjects[0]} />
          </div>
          <div className="col-span-6">
            <Project {...allProjects[0]} />
          </div>
          <div className="col-span-6">
            <Project {...allProjects[0]} />
          </div>
          <div className="col-span-12">
            <FeaturedProject {...allProjects[0]} />
          </div>
          <div className="col-span-6">
            <Project {...allProjects[0]} />
          </div>
          <div className="col-span-6">
            <Project {...allProjects[0]} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

const allProjects = [
  {
    type: "Blog Website",
    title: "Personal Blog",
    summary:
      "A personal blog website built with Astro, Typescript, Tailwind CSS and MDX. It is a static site hosted on Vercel.",
    link: "https://anandr.vercel.app/",
    image: profilePic,
    github: "https://github.com/grace-anand/blog",
  },
];
