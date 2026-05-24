import * as React from "react";
import { DirectionProvider } from "@radix-ui/react-direction";

export interface DirectionProps {
  dir: "ltr" | "rtl";
  children: React.ReactNode;
}

function Direction({ dir, children }: DirectionProps) {
  return <DirectionProvider dir={dir}>{children}</DirectionProvider>;
}

export { Direction, DirectionProvider };
