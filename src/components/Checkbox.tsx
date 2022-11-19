import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { clsx } from "clsx";

import { Check } from "phosphor-react";

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  onCheckedChange: () => void;
}

export function Checkbox({ onCheckedChange, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className={clsx(
        "flex items-center justify-center w-5 h-5 p-[2px] outline-none border-2 rounded-xl transition-color duration-500",
        {
          "bg-transparent border-blue-500 hover:border-blue-700 hover:bg-blue-700 hover:bg-opacity-20":
            !props.checked,
          " border-transparent bg-purple-700 hover:bg-purple-500":
            props.checked,
        }
      )}
      onCheckedChange={onCheckedChange}
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-3 w-3 text-gray-100" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
