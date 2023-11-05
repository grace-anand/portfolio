import Image from "next/image";
import NavItem from "./NavItem";
import Icons from "../Icons";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-32 py-4 font-medium z-10 lg:px-16 relative z-1 md:px-12 sm:px-8 ">
      <nav className="gap-5 flex">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="https://anandr.vercel.app/">Blog</NavItem>
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
      <nav className="flex gap-8">
        <IconLink href="https://github.com/grace-anand" target="_blank">
          <Icons.github className="w-6" />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/anand-r-67b18925a"
          target="_blank"
        >
          <Icons.lindedIn className="w-6" />
        </IconLink>
        <IconLink href="https://twitter.com/graceanand99" target="_blank">
          <Icons.x className="w-6" />
        </IconLink>
        <IconLink href="https://instagram.com/an_and__r" target="_blank">
          <Icons.instagram className="w-6" />
        </IconLink>
        <ThemeToggle />
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
