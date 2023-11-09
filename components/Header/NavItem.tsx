import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
  className?: string;
} & LinkProps;

export const NavItem = (props: Props) => {
  const router = useRouter();

  return (
    <Link
      href={props.href}
      className={cn(
        "mr-4 rounded relative group",
        props.className,
        {
          "squiggly-line": router.asPath === props.href,
        },
        router.asPath === props.href ? "font-bold" : "font-medium"
      )}
    >
      {props.children}
    </Link>
  );
};

export const MobileNavItem = (props: Props) => {
  const router = useRouter();

  return (
    <Link
      {...props}
      className={cn(
        "w-min mx-auto my-2",
        props.className,
        {
          "squiggly-line": router.asPath === props.href,
        },
        router.asPath === props.href ? "font-bold" : "font-medium"
      )}
    >
      {props.children}
    </Link>
  );
};
