import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-32 py-8 font-medium z-10 dark:text-light lg:px-16 relative z-1 md:px-12 sm:px-8 ">
      <nav className="gap-5 flex">
        <NavItem href="/" active>
          Home
        </NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/blog">Blog</NavItem>
      </nav>
      <Link href="/" className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Image
          src="/logo.png"
          alt="logo"
          width={64}
          height={64}
          className="hover:opacity-80"
        />
      </Link>
      <nav>
        <Link href="#" target="_blank">
          G
        </Link>
        <Link href="#" target="_blank">
          I
        </Link>
        <Link href="#" target="_blank">
          F
        </Link>
        <Link href="#" target="_blank">
          T
        </Link>
        <Link href="#" target="_blank">
          L
        </Link>
      </nav>
    </header>
  );
};

export default Header;
