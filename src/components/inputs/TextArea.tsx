import { ChangeEvent } from "react";
import { FieldRenderProps } from "react-final-form";

interface TextAreaProps extends FieldRenderProps<string, any> {
  id: string;
  label?: string;
  onChange?: (e: ChangeEvent) => void;
  value?: string;
  placeholder?: string;
  className?: string;
  name?: string;
}
export default function TextArea(props: TextAreaProps) {
  return (
    <div className={`${props.className} w-full flex flex-col`}>
      <label htmlFor={props.id} className="text-bM text-medGray mb-3">
        {props.label}
      </label>
      <textarea
        id={props.id}
        placeholder={props.placeholder}
        className="text-bL h-[11.2rem] px-[1.6rem] py-[0.8rem] rounded-[4px] border-[1px] border-solid border-[rgba(130,_143,_163,_0.25)] resize-none"
        {...props.input}
      />
    </div>
  );
}
