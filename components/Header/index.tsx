import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";
import { Icons } from "../Icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-32 py-8 font-medium z-10 dark:text-light lg:px-16 relative z-1 md:px-12 sm:px-8 ">
      <nav className="gap-5 flex">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/blog">Blog</NavItem>
      </nav>
      <IconLink
        href="/"
        className="absolute left-[50%] top-2 translate-x-[-50%] hide-squiggly-line"
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={64}
          height={64}
          className="hover:opacity-80"
        />
      </IconLink>
      <nav className="flex gap-2">
        <IconLink href="#" target="_blank">
          <Icons.lindedIn className="w-8" />
        </IconLink>
        <IconLink href="#" target="_blank">
          <Icons.github className="w-8" />
        </IconLink>
        <IconLink href="#" target="_blank">
          <Icons.x className="w-8" />
        </IconLink>
        <IconLink href="#" target="_blank">
          <Icons.instagram className="w-8" />
        </IconLink>
      </nav>
    </header>
  );
};

const IconLink = (props: React.ComponentProps<typeof motion.a>) => {
  return (
    <motion.a
      {...props}
      className="hide-squiggly-line"
      whileHover={{ y: -2 }}
      whileTap={{ y: -2 }}
    >
      {props.children}
    </motion.a>
  );
};

export default Header;
