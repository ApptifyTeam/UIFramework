"use client";

import * as React from "react";
import { TranslateIcon } from "@hugeicons/core-free-icons";
import { useLang } from "../providers/lang-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon,
} from "@apptify-labs/ui";
import { Button } from "@apptify-labs/ui";

export function LangSwitcher() {
  const { locale, setLocale, t } = useLang();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Icon icon={TranslateIcon} />
          <span className="sr-only">{t.common.language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => setLocale("en")}
          className={locale === "en" ? "font-bold bg-accent" : ""}
        >
          {t.common.english}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLocale("th")}
          className={locale === "th" ? "font-bold bg-accent" : ""}
        >
          {t.common.thai}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
