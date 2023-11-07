import * as React from "react";
import { useTheme } from "next-themes";
import Icons from "../Icons";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Icons.sun className="hidden h-[1.5rem] w-[1.3rem] dark:block" />
      <Icons.moon className="h-5 w-5 dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
