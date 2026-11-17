"use client";

import {
  FieldGrid,
  FormContainer,
  HoneypotField,
  SubmitButton,
  SubmitButtonTerms,
} from "@/components/atoms/form-builder";
import { FieldInputRadioGroup } from "@/components/atoms/field-input-radio";
import { FieldInput } from "@/components/atoms/field-input";
import { FieldSelect } from "@/components/atoms/field-select";
import { FieldTextarea } from "@/components/atoms/field-textarea";
//
import { AppointmentSummary } from "./ui/summary";
import { useAppointmentForm } from "./hook";

export function AppointmentForm() {
  const {
    submitting,
    formData,
    errorBag,
    success,
    canSubmit,
    bookedForOptions,
    bookedServiceOptions,
    mutateFormData,
    handleReset,
    handleSubmit,
  } = useAppointmentForm();

  return (
    <FormContainer legend="Enter appointment details">
      {success ? (
        <AppointmentSummary formData={formData} handleClose={handleReset} />
      ) : (
        <form noValidate className="space-y-6">
          <FieldInputRadioGroup
            name="bookedFor"
            label="Who is the appointment for?"
            data={bookedForOptions}
            value={formData.bookedFor}
            onChangeText={(bookedFor) => mutateFormData({ bookedFor })}
            error={errorBag.bookedFor}
            required
          />
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
          <FieldSelect
            name="bookedService"
            label="Required service"
            optionLabel="Choose a service"
            data={bookedServiceOptions}
            value={formData.bookedService}
            onChangeText={(bookedService) => mutateFormData({ bookedService })}
            error={errorBag.bookedDate}
            required
          />
          <FieldGrid>
            <FieldInput
              name="bookedDate"
              type="date"
              label="Preferred date"
              value={formData.bookedDate}
              onChangeText={(bookedDate) => mutateFormData({ bookedDate })}
              error={errorBag.bookedDate}
              required
            />
            <FieldInput
              name="bookedTime"
              type="time"
              label="Preferred time"
              value={formData.bookedTime}
              onChangeText={(bookedTime) => mutateFormData({ bookedTime })}
              error={errorBag.bookedTime}
              required
            />
          </FieldGrid>
          <FieldTextarea
            name="notes"
            label="Anything we should know? (optional)"
            value={formData.notes}
            onChangeText={(notes) => mutateFormData({ notes })}
            error={errorBag.notes}
          />
          <HoneypotField />
          <SubmitButtonTerms />
          <SubmitButton onClick={handleSubmit} disabled={!canSubmit} loading={submitting}>
            {submitting ? "Booking..." : "Book appointment"}
          </SubmitButton>
        </form>
      )}
    </FormContainer>
  );
}
