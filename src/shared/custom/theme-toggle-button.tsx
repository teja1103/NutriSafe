"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

//import { Button, type ButtonProps } from "~/shared/shadcn/ui/button";
import { Button, type ButtonProps } from "../shadcn/ui/button";
const ThemeToggleButton = (props: ButtonProps) => {
  const { setTheme, theme } = useTheme();

  return (
    <Button>
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggleButton;
