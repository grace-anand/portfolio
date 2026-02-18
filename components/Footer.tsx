import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-10 py-8 flex-col flex lg:flex-row justify-between items-center border-t-2 border-solid border-primary">
      <span>{new Date().getFullYear()} Anand R. All rights reserved.</span>
      <div className="flex items-center">
        Designed and built with
        <span className="text-primary text-2xl px-1 dark:text-primaryDark">
          ♡
        </span>
        by&nbsp;
        <Link className="underline underline-offset-2" href="/about">
          Anand
        </Link>
      </div>
      <Link className="underline underline-offset-2" href="/#contact">
        Let&apos;s Talk
      </Link>
    </footer>
  );
};

export default Footer;
