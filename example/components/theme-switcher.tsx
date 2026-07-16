"use client";

import * as React from "react";
import { SunIcon, MoonIcon } from "@hugeicons/core-free-icons";
import { useTheme } from "next-themes";
import { useLang } from "../providers/lang-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon,
} from "@apptify-labs/ui";
import { Button } from "@apptify-labs/ui";

export function ThemeSwitcher() {
  const { setTheme } = useTheme();
  const { t } = useLang();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Icon icon={SunIcon} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icon icon={MoonIcon} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t.common.theme}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {t.common.light}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {t.common.dark}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {t.common.system}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
