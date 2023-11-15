import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-10 py-8 flex-col flex lg:flex-row justify-between items-center border-t-2 border-solid border-primary">
      <span>2023 © All Rights Reserved.</span>
      <div className="flex items-center">
        Built with
        <span className="text-primary text-2xl px-1 dark:text-primaryDark">
          ♡
        </span>
        by&nbsp;
        <Link className="underline underline-offset-2" href="/about">
          Anand
        </Link>
      </div>
      <Link className="underline underline-offset-2" href="/#contact">
        Say Hello
      </Link>
    </footer>
  );
};

export default Footer;
