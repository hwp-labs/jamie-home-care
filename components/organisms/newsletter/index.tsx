"use client";

import { CustomFieldError, SubmitButton } from "@/components/atoms/form-builder";
import { BaseInput } from "@/components/atoms/base-input";
//
import { useNewsletter } from "./hook";

export function Newsletter() {
  const { submitting, submitted, formData, errorBag, canSubmit, mutateFormData, handleSubmit } =
    useNewsletter();

  return (
    <div>
      <h4 className="text-lg font-bold">Newsletter</h4>
      <p className="mt-4 text-white/80">Stay up to date with our latest news.</p>
      <form className="gap-2_ mt-4 flex">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <BaseInput
          name="newsletter-email"
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChangeText={(email) => mutateFormData({ email })}
          hasError={Boolean(errorBag.email)}
          required
          className="rounded-l-full px-5 py-3"
        />
        <SubmitButton
          onClick={handleSubmit}
          disabled={!canSubmit}
          loading={submitting}
          success={submitted}
          className="bg-accent rounded-r-full px-6 py-3"
        >
          {submitted ? "Subscribed!" : "Join"}
        </SubmitButton>
      </form>
      <CustomFieldError id="newsletter-email" error={errorBag.email} className="px-4 py-1" />
    </div>
  );
}
