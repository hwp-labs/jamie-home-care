"use client";

import {
  FieldGrid,
  FormContainer,
  HoneypotField,
  SubmitButton,
  SubmitButtonTerms,
} from "@/components/atoms/form-builder";
import { FieldInput } from "@/components/atoms/field-input";
import { FieldTextarea } from "@/components/atoms/field-textarea";
//
import { ContactSummary } from "./ui/summary";
import { useContactForm } from "./hook";

export function ContactForm() {
  const {
    submitting,
    formData,
    errorBag,
    success,
    canSubmit,
    mutateFormData,
    handleReset,
    handleSubmit,
  } = useContactForm();

  return (
    <FormContainer legend="Send us a message">
      {success ? (
        <ContactSummary formData={formData} handleClose={handleReset} />
      ) : (
        <form noValidate className="space-y-6">
          <FieldGrid>
            <FieldInput
              name="firstName"
              label="First name"
              value={formData.firstName}
              onChangeText={(firstName) => mutateFormData({ firstName })}
              error={errorBag.firstName}
              required
            />
            <FieldInput
              name="lastName"
              label="Last name"
              placeholder="Surname"
              value={formData.lastName}
              onChangeText={(lastName) => mutateFormData({ lastName })}
              error={errorBag.lastName}
              required
            />
          </FieldGrid>
          <FieldGrid>
            <FieldInput
              name="email"
              type="email"
              label="Email"
              value={formData.email}
              onChangeText={(email) => mutateFormData({ email })}
              error={errorBag.email}
              required
            />
            <FieldInput
              name="tel"
              type="tel"
              label="Phone"
              value={formData.tel}
              onChangeText={(tel) => mutateFormData({ tel })}
              error={errorBag.tel}
            />
          </FieldGrid>
          <FieldTextarea
            name="message"
            label="How can we help?"
            value={formData.message}
            onChangeText={(message) => mutateFormData({ message })}
            error={errorBag.message}
            required
          />
          <HoneypotField />
          <SubmitButtonTerms />
          <SubmitButton onClick={handleSubmit} disabled={!canSubmit} loading={submitting}>
            {submitting ? "Sending..." : "Send message"}
          </SubmitButton>
        </form>
      )}
    </FormContainer>
  );
}
