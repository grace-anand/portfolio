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
      <TransitionEffect />
      <AnimatedHeading>Projects</AnimatedHeading>
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
    type: "Blog Website",
    title: "Personal Blog",
    summary:
      "A personal blog website built with Astro, Typescript, Tailwind CSS and MDX. It is a static site hosted on Vercel.",
    link: "https://anandr-blog.vercel.app/",
    image: myBlog,
    github: "https://github.com/grace-anand/blog",
  },
  {
    type: "Portfolio Website",
    title: "Portfolio",
    summary:
      "A portfolio website built with Next.js, Typescript, Tailwind CSS and Framer motion. It is a static site hosted on Vercel.",
    link: "https://anandr-home.vercel.app/",
    image: portfolio,
    github: "https://github.com/grace-anand/portfolio",
  },
  {
    type: "Clone",
    title: "Netflix Clone",
    summary:
      "A Netflix clone built with React, and TMDB api. It is a static site hosted on Firebase.",
    link: "https://netflix-clone-5cb6d.web.app/",
    image: netflix,
    github: "https://github.com/grace-anand/netflix-clone",
  },
  {
    type: "Landing page",
    title: "S Ramalingam",
    summary:
      "A landing page built with Astro, Typescript and Tailwind CSS. It is a static site hosted on Vercel.",
    link: "https://sramalingam.vercel.app",
    image: sRamalingam,
    github: "https://github.com/grace-anand/sramalingam",
  },
  {
    type: "CLI",
    title: "Stupid Node CLI",
    summary:
      "A Fun CLI built with Node.js, Typescript and Inquirer. It is an npm package. You can try it by running npx stupid_node_cli in your terminal.",
    link: "https://www.npmjs.com/package/stupid_node_cli",
    image: StupidNodeCli,
    github: "https://github.com/grace-anand/stupid_node_cli",
  },
  {
    type: "CMS",
    title: "BLOG CMS",
    summary:
      "A blog CMS built with Next.js, Typescript, Tailwind CSS and Sanity.io. It is a static site hosted on Vercel.",
    link: "https://anand-cms-blog.vercel.app/",
    image: cmsBlog,
    github: "https://github.com/grace-anand/cms-blog",
  },
];
