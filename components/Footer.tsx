import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container py-8 flex-col flex lg:flex-row justify-between items-center border-t-2 border-solid border-primary">
      <span>2023 © All Rights Reserved.</span>
      <div className="flex items-center">
        Built with
        <span className="text-primary text-2xl px-1 dark:text-primaryDark">
          ♡
        </span>
        by&nbsp;
        <Link target="_blank" className="underline underline-offset-2" href="">
          Anand
        </Link>
      </div>
      <Link
        target="_blank"
        className="underline underline-offset-2"
        href="/about"
      >
        Say Hello
      </Link>
    </footer>
  );
};

export default Footer;
