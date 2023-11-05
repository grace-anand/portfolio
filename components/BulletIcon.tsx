import { motion, useScroll } from "framer-motion";
import { RefObject } from "react";

const BulletIcon = ({ reference }: { reference: RefObject<HTMLLIElement> }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute -left-0">
      <svg
        className="-rotate-90 xs:w-[60px] xs:h-[60px] w-[40px] h-[40px] md:w-full md:h-full"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary  stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="fill-secondary stroke-[5px] stroke-primary"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          pathLength="1"
          className="animate-pulse stroke-1 fill-primary"
        />
      </svg>
    </figure>
  );
};

export default BulletIcon;
