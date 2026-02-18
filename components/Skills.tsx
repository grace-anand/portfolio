import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const Skill = ({
  skill,
  x,
  y,
  url,
}: {
  skill: string;
  x: string;
  y: string;
  url: string;
}) => {
  return (
    <motion.a
      className="flex items-center sm:rounded-full font-bold sm:font-semibold sm:bg-primary sm:text-primary-foreground justify-center lg:px-6 lg:py-3 sm:px-4 sm:py-2 p-0 cursor-pointer absolute dark:hover:bg-none text-primary dark:text-foreground"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 0.5 }}
      href={url}
      target="_blank"
    >
      {skill}
    </motion.a>
  );
};

const Skills = () => {
  return (
    <>
      <AnimatedHeading>Core Stack</AnimatedHeading>
      <div className="w-full relative flex items-center justify-center rounded-full text-primary-foreground h-[80vh] bg-circular sm:bg-circular-sm md:bg-circular-md lg:bg-circular-lg ">
        <motion.div
          className="flex items-center rounded-full font-semibold bg-primary justify-center md:w-20 md:h-20 cursor-pointer w-12 h-12"
          whileHover={{ scale: 1.1 }}
        >
          Build
        </motion.div>
        <Skill skill="React" x="0" y="-40vh" url="https://react.dev/" />
        <Skill skill="Next.js" x="0" y="40vh" url="https://nextjs.org/" />
        <Skill skill="Vue" x="-10vw" y="10vh" url="https://vuejs.org/" />
        <Skill skill="Nuxt" x="10vw" y="-10vh" url="https://nuxt.com/" />
        <Skill
          skill="Tailwind"
          x="-15vw"
          y="-15vh"
          url="https://tailwindcss.com/"
        />
        <Skill
          skill="HTML"
          x="15vw"
          y="15vh"
          url="https://developer.mozilla.org/en-US/docs/Web/HTML"
        />
        <Skill
          skill="CSS"
          x="-20vw"
          y="20vh"
          url="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <Skill skill="Sass" x="20vw" y="-20vh" url="https://sass-lang.com/" />
        <Skill
          skill="JavaScript"
          x="-25vw"
          y="-25vh"
          url="https://www.javascript.com/"
        />
        <Skill
          skill="TypeScript"
          x="25vw"
          y="25vh"
          url="https://www.typescriptlang.org/"
        />
        <Skill skill="Astro" x="-32vw" y="32vh" url="https://astro.build/" />
        <Skill skill="tRPC" x="32vw" y="-32vh" url="https://trpc.io/" />
        <Skill skill="Cypress" x="-25vw" y="0" url="https://www.cypress.io/" />
        <Skill
          skill="Jest"
          x="25vw"
          y="0"
          url="https://jestjs.io/docs/getting-started"
        />
        <Skill skill="Linux" x="0" y="-25vh" url="https://www.linux.org/" />
        <Skill skill="Git" x="0" y="25vh" url="https://git-scm.com/" />
      </div>
    </>
  );
};

export default Skills;
