import Image from "next/image";
import { NavItem, MobileNavItem } from "./NavItem";
import Icons from "../Icons";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const onMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full flex items-center justify-between lg:px-32 py-4 font-medium z-10 md:px-16 relative z-1 sm:px-12 px-8">
      <button
        type="button"
        className="flex-col items-center justify-center flex md:hidden"
        aria-controls="mobile-menu"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <span
          className={cn(
            "bg-foreground block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out",
            isMenuOpen ? "rotate-45 translate-y-1" : "rotate-0 -translate-y-0.5"
          )}
        ></span>
        <span
          className={cn(
            "bg-foreground block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out my-0.5",
            isMenuOpen ? "opacity-0" : "opacity-100"
          )}
        ></span>
        <span
          className={cn(
            "bg-foreground block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out",
            isMenuOpen
              ? "-rotate-45 -translate-y-1"
              : "rotate-0 translate-y-0.5"
          )}
        ></span>
      </button>
      <IconLink
        href="/"
        className="absolute left-[50%] top-2 translate-x-[-50%] hover:bg-none dark:hover:bg-none"
        type="Home"
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={48}
          height={48}
          className="hover:opacity-80 md:hidden"
        />
      </IconLink>
      <ThemeToggle className="md:hidden" />
      {isMenuOpen && (
        <motion.div
          className="sm:min-w-[70vw] min-w-[90vw] flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-32 rounded-lg z-50 dark:bg-white/50 bg-black/70 backdrop-blur-lg text-secondary"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex flex-col text-center mb-5">
            <MobileNavItem onClick={onMobileLinkClick} href="/">
              Home
            </MobileNavItem>
            <MobileNavItem onClick={onMobileLinkClick} href="/about">
              About
            </MobileNavItem>
            <MobileNavItem onClick={onMobileLinkClick} href="/projects">
              Projects
            </MobileNavItem>
            <MobileNavItem
              onClick={onMobileLinkClick}
              href={process.env.NEXT_PUBLIC_BLOG_URL || "/"}
            >
              Blog
            </MobileNavItem>
          </nav>
          <nav className="flex gap-5">
            <IconLink
              href="https://github.com/grace-anand"
              target="_blank"
              type="Github"
            >
              <Icons.github className="w-6" />
            </IconLink>
            <IconLink
              href="https://www.linkedin.com/in/anand-r-67b18925a"
              target="_blank"
              type="LinkedIn"
            >
              <Icons.lindedIn className="w-6" />
            </IconLink>
            <IconLink
              href="https://twitter.com/graceanand99"
              target="_blank"
              type="Twitter"
            >
              <Icons.x className="w-6" />
            </IconLink>
            <IconLink
              href="https://instagram.com/an_and__r"
              target="_blank"
              type="Instagram"
            >
              <Icons.instagram className="w-6" />
            </IconLink>
          </nav>
        </motion.div>
      )}
      <div className="hidden md:flex items-center justify-between w-full">
        <nav className="flex gap-5">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href={process.env.NEXT_PUBLIC_BLOG_URL || "/"}>Blog</NavItem>
        </nav>
        <IconLink
          href="/"
          className="absolute left-[50%] top-2 translate-x-[-50%] hover:bg-none dark:hover:bg-none"
          type="Home"
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
          <IconLink
            href="https://github.com/grace-anand"
            target="_blank"
            type="Github"
          >
            <Icons.github className="w-6" />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/anand-r-67b18925a"
            target="_blank"
            type="LinkedIn"
          >
            <Icons.lindedIn className="w-6" />
          </IconLink>
          <IconLink
            href="https://twitter.com/graceanand99"
            target="_blank"
            type="Twitter"
          >
            <Icons.x className="w-6" />
          </IconLink>
          <IconLink
            href="https://instagram.com/an_and__r"
            target="_blank"
            type="Instagram"
          >
            <Icons.instagram className="w-6" />
          </IconLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

const IconLink = (
  props: React.ComponentProps<typeof motion.a> & { type: string }
) => {
  return (
    <motion.a
      {...props}
      className="hover:bg-none dark:hover:bg-none"
      whileHover={{ y: -2 }}
      whileTap={{ y: -2 }}
      aria-label={"Visit my" + props.type}
    >
      {props.children}
    </motion.a>
  );
};

export default Header;
