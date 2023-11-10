import React from "react";
import Icons from "./Icons";
import Link from "next/link";

const HireMe = (props: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <div className="w-48 flex items-center justify-center relative">
        <Icons.circularText className="animate-spin-slow fill-primary" />
        <Link
          href="mailto:graceanand99@gmail.com"
          className="absolute bg-primary text-primary-foreground rounded-full w-20 h-20 flex items-center justify-center ring-2 font-semibold"
        >
          Mail Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
