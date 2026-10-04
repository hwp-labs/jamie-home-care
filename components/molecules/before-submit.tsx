import Link from "next/link";

export const BeforeSubmit = () => {
  return (
    <p className="text-base text-muted">
      By submitting this form you agree to our{" "}
      <Link
        href="/privacy-policy"
        className="font-medium text-brand underline underline-offset-4"
      >
        Privacy Policy
      </Link>
      .
    </p>
  );
};
