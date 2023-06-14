import DisabledButton from "./Disabled";
import IconButton from "./IconButton";
import PrimaryButton from "./PrimaryButton";

export type ButtonProps = {
  variant: "disabled" | "icon" | "primary";
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

  if (props.variant === "primary") {
    return <PrimaryButton {...props} />;
  }
}
