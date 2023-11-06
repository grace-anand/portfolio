import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import BulletIcon from "./BulletIcon";

const Details = ({
  type,
  period,
  place,
  info,
  institution,
  link,
}: {
  type: string;
  period: string;
  place: string;
  info: string;
  institution: string;
  link: string;
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
          {type}&nbsp;
          <a className="capitalize text-primary" href={link} target="_blank">
            @{institution}
          </a>
        </h3>
        <span className="capitalize opacity-70 font-medium text-sm sm:text-base">
          {period} | {place}
        </span>
        <p className="font-medium w-full text-sm md:text-base">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <h2 className="font-bold text-8xl mt-20 w-full text-center py-10">
        Education
      </h2>
      <div className="w-3/4 mx-auto relative mb-[50vh]" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-1 h-full bg-primary origin-top"
        />
        <ul>
          {allEducation.map((education, i) => (
            <Details key={education.institution + i} {...education} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Education;

const allEducation = [
  {
    type: "Bachelor of Science",
    period: "2018 - 2021",
    place: "Sholinganallur, Chennai",
    info: "Graduated in B.sc. Electronics and commmunication with 7.7 CGPA. ",
    institution: "MSCAS",
    link: "https://www.mscartsandscience-edu.in/",
  },
  {
    type: "Higher Secondary",
    period: "2016 - 2018",
    place: "Velachery, Chennai",
    info: "Completed Higher Secondary with 65%.",
    institution: "St. Britto's Matriculation Higher Secondary School",
    link: "https://stbrittosmhss.edu.in/",
  },
  {
    type: "High School",
    period: "2015 - 2016",
    place: "Velachery, Chennai",
    info: "Completed High School with 86%.",
    institution: "St. Britto's Matriculation Higher Secondary School",
    link: "https://stbrittosmhss.edu.in/",
  },
];
