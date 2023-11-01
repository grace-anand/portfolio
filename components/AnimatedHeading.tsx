import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: string;
  className?: string;
};

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const wordVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transiton: {
      duration: 1,
    },
  },
};

const AnimatedHeading = (props: Props) => {
  return (
    <div
      className="w-full mx-auto py-2 flex items-center justify-center text-center
                    overflow-hidden"
    >
      <motion.h1
        className={cn(
          "inline-block w-ful font-bold capitalize text-8xl",
          props.className
        )}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {props.children.split(" ").map((word, index) => (
          <motion.span
            key={word + index}
            className="inline-block"
            variants={wordVariant}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedHeading;
