import { InputHTMLAttributes, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
  // error?: string;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex flex-col w-full gap-1">
      <div className="flex items-center gap-3 h-14 py-4 px-3 w-full rounded bg-gray-500 ring-2 ring-gray-700 focus-within:ring-2 focus-within:ring-purple-500 transition-shadow duration-500">
        {props.children}
      </div>
      {/* {props.error && <div></div>} */}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-gray-100 text-md placeholder:text-gray-300"
      {...props}
    />
  );
}

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
};
