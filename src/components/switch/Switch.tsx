"use client";
import classes from "./Switch.module.css";

type SwitchProps = {
  checked?: boolean;
  id: string;
  onChange: () => void;
};

export default function Switch(props: SwitchProps) {
  return (
    <label className={`${classes["container"]}`} htmlFor={props.id}>
      <input
        id={props.id}
        checked={props.checked}
        onChange={props.onChange}
        type="checkbox"
        className={`${classes["input"]} hidden`}
      />
      <div
        className={`${classes["control"]} p-1.5 bg-purple w-16 h-8 rounded-2xl flex items-center cursor-pointer`}
      >
        <span
          className={`rounded-full bg-white w-5 h-5 transition-all ease-in-out duration-150 ${classes.control_knob}`}
        />
      </div>
    </label>
  );
}
