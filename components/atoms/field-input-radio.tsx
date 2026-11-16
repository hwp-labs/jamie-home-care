import { OptionType } from "@/types";
import { CustomFieldError, CustomFieldLabel } from "./form-builder";

interface Props extends React.ComponentProps<"input"> {
  name: string;
  label?: string;
  data?: OptionType[];
  onChangeText?: (value: string) => void;
  error?: string;
}

export const FieldInputRadioGroup = ({
  name,
  label,
  data = [],
  onChangeText = () => undefined,
  error,
  ...props
}: Props) => {
  const errorId = `${name}-error`;

  return (
    <div>
      <CustomFieldLabel name={name} label={label} required={props.required} />
      <div className="mt-3 flex flex-wrap gap-4">
        {data.map((item) => (
          <label
            key={item.value}
            className="has-[:checked]:border-brand has-[:checked]:bg-brand-soft flex cursor-pointer items-center gap-3 rounded-xl border border-black/15 px-5 py-3"
          >
            <input
              type="radio"
              name={name}
              value={item.value}
              onChange={() => onChangeText(item.value)}
              defaultChecked={props.value === item.value}
              aria-describedby={error ? errorId : undefined}
              className="accent-brand size-5"
            />
            {item.label}
          </label>
        ))}
      </div>
      <CustomFieldError id={errorId} error={error} />
    </div>
  );
};
