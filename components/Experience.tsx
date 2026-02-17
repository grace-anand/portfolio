import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import BulletIcon from "./BulletIcon";
import AnimatedHeading from "./AnimatedHeading";

const Details = ({
  position,
  company,
  link,
  period,
  address,
  work,
}: {
  position: string;
  company: string;
  link: string;
  period: string;
  address: string;
  work: string[];
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 md:w-[60%] mx-auto flex flex-col items-start justify-between w-[80%]"
    >
      <BulletIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold md:text-2xl sm:text-xl text-lg">
          {position}&nbsp;
          <a className="capitalize text-primary" href={link} target="_blank">
            @{company}
          </a>
        </h3>
        <span className="capitalize opacity-70 font-medium text-sm sm:text-base">
          {period} | {address}
        </span>
        <ul className="mt-2 list-disc pl-5 space-y-2 font-medium w-full text-sm md:text-base">
          {work.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <AnimatedHeading className="pt-10">Experience</AnimatedHeading>
      <div className="w-full md:w-[90%] lg:w-3/4 mx-auto relative" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[19px] sm:left-7 md:left-9 top-1 sm:w-1 w-[2px] h-full bg-primary origin-top"
        />
        <ul className="w-full sm:ml-4 ml-2">
          {experiences.map((experience, i) => (
            <Details key={experience.company + i} {...experience} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Experience;

const experiences = [
  {
    position: "Full Stack Developer",
    company: "Francium Tech",
    link: "https://francium.tech",
    period: "Nov 2021 - Oct 2025",
    address: "Padur, Chennai",
    work: [
      "Played a key role in developing and enhancing over 40 large-scale applications using Vue, Nuxt, React, Next.js, and Node.js.",
      "Improved code quality and maintainability by 25% through rigorous code reviews and software engineering best practices.",
      "Conducted technical interviews for more than 20 candidates and helped recruit high-caliber talent.",
      "Mentored over 20 developers, resolved technical blockers, and improved team delivery speed and code quality.",
    ],
  },
  {
    position: "Experience Engineer",
    company: "Publicis Sapient",
    link: "https://www.publicissapient.com",
    period: "Oct 2025 - Present",
    address: "Kandanchavadi, Chennai",
    work: [
      "Migrated a legacy application to modern Next.js architecture to improve performance, accessibility, and SEO.",
      "Built and contributed to microfrontend architecture designed to scale for millions of users.",
      "Developed and maintained automated test suites to proactively detect regressions and improve reliability.",
      "Delivered reusable white-label architecture that reduced code duplication and accelerated new client onboarding.",
    ],
  },
];
