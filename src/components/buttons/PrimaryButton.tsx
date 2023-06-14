"use client";

import { ButtonProps } from "./Button";

export default function PrimaryButton(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`bg-purple hover:bg-purpleHover rounded-[2rem] h-16 w-[25.5rem] text-bM transition-colors ease-in-out text-white cursor-pointer ${props.className}`}
    >
      {props.text}
    </button>
  );
}
