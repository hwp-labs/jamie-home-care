import clsx from "clsx";

interface Props extends React.ComponentProps<"input"> {
  name: string;
  onChangeText?: (value: string) => void;
  hasError?: boolean;
  className?: string;
}

export const BaseInput = ({
  name,
  onChangeText = () => undefined,
  hasError,
  className,
  ...props
}: Props) => {
  const errorId = `${name}-error`;

  return (
    <input
      type="text"
      {...props}
      id={name}
      onChange={(ev) => onChangeText(ev.target.value)}
      autoComplete={`new-${name}`}
      aria-invalid={hasError}
      aria-describedby={hasError ? errorId : undefined}
      className={clsx("base-input", className)}
    />
  );
};
