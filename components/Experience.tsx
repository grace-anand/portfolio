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
  work: string;
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
        <p className="font-medium w-full text-sm md:text-base">{work}</p>
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
    position: "Solution architect",
    company: "Francium tech",
    link: "/",
    period: "2021 - Present",
    address: "Padur, Chennai",
    work: "Worked mostly as Front End Engineer, Gained immense knowledge on working with large scale applications, (Money Smart) Was able to work on multiple Repos, (Libraries, CMS, API, etc) and had opportunity to fix several bugs and develop debugging skills.",
  },
];
