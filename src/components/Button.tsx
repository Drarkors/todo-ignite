import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "flex items-center gap-1 py-4 px-4  outline-none rounded font-semibold  text-sm " +
          "bg-blue-700 text-gray-100 focus:ring-2 ring-purple-500 " +
          "w-fit transition-all duration-500 ",
        {
          "hover:bg-blue-500": !props.disabled,
          "cursor-not-allowed bg-danger ": props.disabled,
        },
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
