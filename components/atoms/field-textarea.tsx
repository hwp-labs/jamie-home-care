import { CustomFieldError, CustomFieldLabel } from "./form-builder";

interface Props extends React.ComponentProps<"textarea"> {
  name: string;
  label?: string;
  onChangeText?: (value: string) => void;
  error?: string;
}

export const FieldTextarea = ({
  name,
  label,
  onChangeText = () => undefined,
  error,
  ...props
}: Props) => {
  const errorId = `${name}-error`;

  return (
    <div>
      <CustomFieldLabel name={name} label={label} required={props.required} />
      <textarea
        rows={4}
        {...props}
        id={name}
        onChange={(ev) => onChangeText(ev.target.value)}
        autoComplete={`new-${name}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="field-input"
      />
      <CustomFieldError id={errorId} error={error} />
    </div>
  );
};
