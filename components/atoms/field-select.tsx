import { OptionType } from "@/types";
import { CustomFieldError, CustomFieldLabel } from "./form-builder";

interface Props extends React.ComponentProps<"select"> {
  name: string;
  label?: string;
  optionLabel?: string;
  data?: OptionType[];
  onChangeText?: (value: string) => void;
  error?: string;
}

export const FieldSelect = ({
  name,
  label,
  optionLabel,
  data = [],
  onChangeText = () => undefined,
  error,
  ...props
}: Props) => {
  const errorId = `${name}-error`;

  return (
    <div>
      <CustomFieldLabel name={name} label={label} required={props.required} />
      <select
        {...props}
        onChange={(ev) => onChangeText(ev.target.value)}
        autoComplete={`new-${name}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="field-input"
      >
        <option value="" className="text-muted/60!">
          {optionLabel}
        </option>
        {data.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <CustomFieldError id={errorId} error={error} />
    </div>
  );
};
