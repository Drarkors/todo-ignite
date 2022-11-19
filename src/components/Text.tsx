import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface TextProps {
  title?: string;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({
  title,
  size = "md",
  children,
  className,
  asChild,
}: TextProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      title={title}
      className={clsx(
        "text-gray-100 font-sans leading-snug",
        {
          "text-xs": size === "sm",
          "text-sm": size === "md",
          "text-md": size === "lg",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}
