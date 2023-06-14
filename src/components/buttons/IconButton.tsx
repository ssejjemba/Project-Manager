"use client";

import { ButtonProps } from "./Button";

export default function IconButton(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className={`${props.className}`}>
      {props.icon}
    </button>
  );
}
