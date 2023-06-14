"use client";

import { ButtonProps } from "./Button";

export default function DisabledButton(props: ButtonProps) {
  return (
    <button
      disabled
      className={`bg-secondary rounded-[2rem] h-16 w-[25.5rem] text-bM text-purple cursor-not-allowed ${props.className}`}
    >
      {props.text}
    </button>
  );
}
