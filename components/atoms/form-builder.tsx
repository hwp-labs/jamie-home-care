import clsx from "clsx";
import { PropsWithChildren } from "react";
import Link from "next/link";
import { SpinnerAlt } from "../shadcn/ui/spinner";

interface FormContainerProps extends PropsWithChildren {
  legend?: string;
}

export const FormContainer = ({ children, legend }: FormContainerProps) => {
  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10 lg:col-span-3">
      {legend ? <h2 className="text-brand-dark text-2xl font-bold">{legend}</h2> : null}
      <p className="text-muted mt-2 mb-8">
        Fields marked with <span className="text-red-600">*</span> are required.
      </p>
      {children}
    </div>
  );
};

export const FieldGrid = ({ children }: PropsWithChildren) => {
  return <div className="grid gap-6 sm:grid-cols-2">{children}</div>;
};

interface CustomFieldLabel {
  name: string;
  label?: string;
  required?: boolean;
}

export const CustomFieldLabel = ({ name, label, ...props }: CustomFieldLabel) => {
  if (!label) return;

  return (
    <label htmlFor={name} className="font-semibold">
      {label} {props.required ? <span className="text-red-600">*</span> : ""}
    </label>
  );
};

interface CustomFieldError {
  id: string;
  error?: string;
  className?: string;
}

export const CustomFieldError = ({ id, error, className }: CustomFieldError) => {
  if (!error) return;

  const errorId = id.endsWith("-error") ? id : `${id}-error`;

  return (
    <p id={errorId} className={clsx("mt-1 text-base text-red-600", className)}>
      {error}
    </p>
  );
};

export const HoneypotField = () => {
  /* Honeypot: hidden from people and screen readers */
  return (
    <div className="absolute -left-[9999px]" aria-hidden>
      <label htmlFor="website">Leave this field empty</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
};

export const SubmitButtonTerms = () => {
  return (
    <p className="text-muted text-base">
      By submitting this form you agree to our{" "}
      <Link href="/privacy-policy" className="text-brand font-medium underline underline-offset-4">
        Privacy Policy
      </Link>
      .
    </p>
  );
};

interface SubmitButtonProps extends PropsWithChildren {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  success?: boolean;
  className?: string;
}

export const SubmitButton = ({
  children,
  onClick,
  disabled,
  loading,
  success,
  className = "submit-button",
}: SubmitButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx("base-button", className, success && "bg-green-600")}
    >
      {loading && <SpinnerAlt />}
      {children}
    </button>
  );
};
