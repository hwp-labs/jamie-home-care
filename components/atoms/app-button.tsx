import React, { PropsWithChildren } from "react";
import { Button } from "../ui/button";
import clsx from "clsx";

interface Props extends PropsWithChildren {
  variant?: "primary" | "accent";
  invert?: boolean;
}

export const AppButton = ({ children, variant = "primary", invert }: Props) => {
  return (
    <Button
      variant="ghost"
      className={clsx(
        "h-[48px] px-8 hover:bg-foreground/90! hover:text-background/90!",
        {
          "bg-primary text-primary-foreground!": variant === "primary",
          "bg-primary-foreground text-primary!":
            variant === "primary" && invert,
          "bg-accent text-accent-foreground!": variant === "accent",
          "bg-accent-foreground text-accent!": variant === "accent" && invert,
        },
      )}
    >
      {children}
    </Button>
  );
};
