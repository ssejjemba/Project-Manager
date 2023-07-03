import { FieldRenderProps } from "react-final-form";

interface SelectInputProps extends FieldRenderProps<string, any> {
  id: string;
  label?: string;
  className?: string;
  options: Array<Column>;
}

export default function SelectInput(props: SelectInputProps) {
  return (
    <div className={`${props.className} w-full flex flex-col`}>
      <label className="text-bM text-medGray mb-3" htmlFor={props.id}>
        {props.label}
      </label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-gray-200 border-[1px] border-solid border-[rgba(130,_143,_163,_0.25)] text-bL px-[1.6rem] py-[0.8rem] rounded-[4px] text-black  focus:outline-none focus:bg-white focus:border-[rgba(130,_143,_163,_0.25)]"
          id={props.id}
        >
          {props.options.map((option, index) => (
            <option key={index.toString()}>{option.id}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-purple">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
