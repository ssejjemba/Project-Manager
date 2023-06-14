import DisabledButton from "./Disabled";
import IconButton from "./IconButton";

export type ButtonProps = {
  variant: string;
  onClick: () => void;
  text?: string;
  icon?: React.ReactNode;
  className?: string;
};

export default function Button(props: ButtonProps) {
  if (props.variant === "disabled") {
    return <DisabledButton {...props} />;
  }

  if (props.variant === "icon") {
    return <IconButton {...props} />;
  }
}
