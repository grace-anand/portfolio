import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  active?: boolean;
  children: React.ReactNode;
  href: string;
  className?: string;
};

const NavItem = (props: Props) => {
  return (
    <Link
      href={props.href}
      className={cn("underline-offset-1 decoration-wavy", props.className, {
        underline: props.active,
      })}
    >
      {props.children}
    </Link>
  );
};

export default NavItem;
