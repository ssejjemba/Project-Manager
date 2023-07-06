import { ChangeEvent } from "react";
import { FieldRenderProps } from "react-final-form";

interface CheckInputProps extends FieldRenderProps<string, any> {
  id: string;
  label?: string;
  value?: string;
  className?: string;
  name?: string;
}

export default function CheckBoxInput(props: CheckInputProps) {
  return (
    <div
      className={`${props.className} w-full h-[4rem] bg-lightBg rounded-[4px] p-[1.2rem] flex items-center`}
    >
      <input
        id={props.id}
        type="checkbox"
        className={`peer relative appearance-none w-[1.6rem] h-[1.6rem] after:hidden checked:after:block border border-[rgba(130,_143,_163,_0.25)] checked:border-purple rounded-md focus:outline-none bg-white checked:bg-purple cursor-pointer after:absolute after:content-[''] after:w-full after:h-full after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:text-white after:bg-[length:1rem] after:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xLjI3NTg4IDMuMDY1OTdMNC4wMzIzNCA1LjgyMjQzTDkuMDMyMzQgMC44MjI0MzMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K")]`}
        {...props.input}
      />
      <label
        htmlFor={props.id}
        className="peer-checked:line-through peer-checked:opacity-50 pl-[1.6rem] text-bL text-black cursor-pointer"
      >
        {props.label}
      </label>
    </div>
  );
}
