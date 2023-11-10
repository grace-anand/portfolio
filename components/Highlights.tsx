import React, { useEffect, useRef } from "react";
import { useInView, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  digit: number;
  description: string;
  className?: string;
};

const Highlights = ({ digit, description, className }: Props) => (
  <div
    className={cn(
      "flex flex-col xl:items-end justify-center items-center",
      className
    )}
  >
    <span className="inline-block lg:text-7xl font-bold md:text-6xl sm:text-5xl text-4xl">
      <span>
        <AnimatedNumbers digit={digit} />
      </span>
      +
    </span>
    <h2 className="mb-4 xl:text-xl font-medium capitalize text-dark/75 dark:text-light/75  md:text-center md:text-lg sm:text-base text-sm">
      {description}
    </h2>
  </div>
);

const AnimatedNumbers = ({ digit }: { digit: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const springValue = useSpring(0, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      springValue.set(digit);
    }
  }, [springValue, digit, isInView]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= digit) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, digit]);

  return <span ref={ref} />;
};

export default Highlights;
