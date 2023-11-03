import React from "react";
import { motion } from "framer-motion";

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
      className="flex items-center rounded-full font-semibold md:bg-primary md:text-primary-foreground text-primary justify-center px-6 py-3 cursor-pointer absolute"
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
      <h2 className="font-bold text-8xl mt-20 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circular text-primary-foreground">
        <motion.div
          className="flex items-center rounded-full font-semibold bg-primary justify-center w-20 h-20 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          Web
        </motion.div>
        <Skill skill="React" x="0" y="-40vh" url="https://reactjs.org/" />
        <Skill skill="Next" x="0" y="40vh" url="https://nextjs.org/" />
        <Skill skill="Vue" x="-10vw" y="10vh" url="https://vuejs.org/" />
        <Skill skill="Nuxt" x="10vw" y="-10vh" url="https://nuxtjs.org/" />
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
          skill="Javascript"
          x="-25vw"
          y="-25vh"
          url="https://www.javascript.com/"
        />
        <Skill
          skill="Typescript"
          x="25vw"
          y="25vh"
          url="https://www.typescriptlang.org/"
        />
        <Skill skill="Astro" x="-32vw" y="32vh" url="https://astro.build/" />
        <Skill skill="TRPC" x="32vw" y="-32vh" url="https://trpc.io/" />
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
