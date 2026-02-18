import AnimatedHeading from "@/components/AnimatedHeading";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import myBlog from "../public/my-blog.png";
import portfolio from "../public/portfolio.png";
import netflix from "../public/netflix.png";
import sRamalingam from "../public/s-ramalingam.png";
import StupidNodeCli from "../public/stupid-node-cli.png";
import cmsBlog from "../public/cms-blog.png";
import Icons from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

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
          className="hover:scale-110 transform transition-all duration-300 ease-in-out rounded-lg mx-auto"
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
            aria-label={title + " View Live Project"}
            href={link}
          >
            View Live
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
        className="cursor-pointer overflow-hidden rounded-lg"
        href={link}
      >
        <Image
          src={image}
          alt={title}
          className="hover:scale-110 transform transition-all duration-300 ease-in-out mx-auto"
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
            aria-label={title + " View Live Project"}
            href={link}
          >
            View Live
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
        <title>Selected Work | Anand R</title>
        <meta
          name="description"
          content="Selected frontend and fullstack projects by Anand R, focused on performance, scalability, and product impact."
        />
      </Head>
      <TransitionEffect />
      <AnimatedHeading>Selected Work</AnimatedHeading>
      <div className="grid grid-cols-12 xl:gap-24 md:gap-y-32 lg:gap-x-16 sm:gap-x-8 gap-y-8 gap-x-0 mb-10">
        <div className="col-span-12">
          <FeaturedProject {...allProjects[0]} />
        </div>
        <div className="col-span-12 md:col-span-6">
          <Project {...allProjects[2]} />
        </div>
        <div className="col-span-12 md:col-span-6">
          <Project {...allProjects[3]} />
        </div>
        <div className="col-span-12">
          <FeaturedProject {...allProjects[1]} />
        </div>
        <div className="col-span-12 md:col-span-6">
          <Project {...allProjects[4]} />
        </div>
        <div className="col-span-12 md:col-span-6">
          <Project {...allProjects[5]} />
        </div>
      </div>
    </>
  );
};

export default Projects;

const allProjects = [
  {
    type: "Content Platform",
    title: "Personal Blog",
    summary:
      "A blazing-fast developer blog built with Astro, TypeScript, Tailwind CSS, and MDX, designed for clean reading, strong SEO, and frictionless publishing.",
    link: "https://anandr-blog.vercel.app/",
    image: myBlog,
    github: "https://github.com/grace-anand/blog",
  },
  {
    type: "Personal Brand Site",
    title: "Portfolio",
    summary:
      "A high-performance portfolio crafted with Next.js, TypeScript, Tailwind CSS, and Framer Motion to showcase product thinking, motion, and engineering quality.",
    link: "https://anandr-home.vercel.app/",
    image: portfolio,
    github: "https://github.com/grace-anand/portfolio",
  },
  {
    type: "Streaming UI",
    title: "Netflix Clone",
    summary:
      "A React-based streaming interface powered by TMDB APIs, focused on reusable UI patterns, smooth navigation, and responsive performance.",
    link: "https://netflix-clone-5cb6d.web.app/",
    image: netflix,
    github: "https://github.com/grace-anand/netflix-clone",
  },
  {
    type: "Marketing Site",
    title: "S Ramalingam",
    summary:
      "A conversion-focused landing page built with Astro, TypeScript, and Tailwind CSS, optimized for speed, readability, and brand clarity.",
    link: "https://sramalingam.vercel.app",
    image: sRamalingam,
    github: "https://github.com/grace-anand/sramalingam",
  },
  {
    type: "Developer Tooling",
    title: "Stupid Node CLI",
    summary:
      "A playful npm CLI package built with Node.js, TypeScript, and Inquirer that demonstrates command design, package publishing, and DX-first thinking.",
    link: "https://www.npmjs.com/package/stupid_node_cli",
    image: StupidNodeCli,
    github: "https://github.com/grace-anand/stupid_node_cli",
  },
  {
    type: "Headless CMS",
    title: "Blog CMS",
    summary:
      "A production-ready blog CMS built with Next.js, TypeScript, Tailwind CSS, and Sanity, enabling flexible content workflows and scalable publishing.",
    link: "https://anand-cms-blog.vercel.app/",
    image: cmsBlog,
    github: "https://github.com/grace-anand/cms-blog",
  },
];
