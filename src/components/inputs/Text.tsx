import { ChangeEvent } from "react";
import { FieldRenderProps } from "react-final-form";

interface TextInputProps extends FieldRenderProps<string, any> {
  id: string;
  label?: string;
  onChange?: (e: ChangeEvent) => void;
  value?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  name?: string;
}

export default function TextInput(props: TextInputProps) {
  return (
    <div className={`${props.className} w-full flex flex-col`}>
      <label htmlFor={props.id} className="text-bM text-medGray mb-3">
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className="text-bL px-[1.6rem] py-[0.8rem] rounded-[4px] border-[1px] border-solid border-[rgba(130,_143,_163,_0.25)]"
        {...props.input}
      />
    </div>
  );
}
