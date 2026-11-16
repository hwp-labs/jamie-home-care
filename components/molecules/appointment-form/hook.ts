import { useMemo, useState } from "react";
import { useEmailAction } from "@/hooks/use-email-action";
import { zodUtils } from "@/utils/zod-utils";
import { MOCK } from "@/constants/MOCK";
//
import {
  FormDataType,
  defaultValues,
  mockDefaultValues,
  mockBookedServiceOptions,
  mockBookedForOptions,
  createFormSchema,
} from "./schema";
import { appointmentUserMail } from "@/lib/mails/appointment-mail";

export const initialValues: FormDataType = MOCK.bookAppointment.formData
  ? mockDefaultValues
  : defaultValues;

export function useAppointmentForm() {
  const { sending: submitting, handleSend, handleSendStub } = useEmailAction();
  const [formData, setFormData] = useState<FormDataType>(initialValues);
  const [errorBag, setErrorBag] = useState<Partial<FormDataType>>({});
  const [success, setSuccess] = useState(false);
  //
  const canSubmit = !submitting;
  const bookedForOptions = mockBookedForOptions;
  const bookedServiceOptions = mockBookedServiceOptions;
  const formSchema = useMemo(
    () => createFormSchema(bookedForOptions, bookedServiceOptions),
    [bookedForOptions, bookedServiceOptions],
  );
  //
  const mutateFormData = (formData: Partial<FormDataType>) => {
    if (formData.bookedFor) {
      const option = bookedForOptions.find((item) => item.value === formData.bookedFor);
      setFormData((prev) => ({ ...prev, ...formData, _bookedForText: option?.label }));
    } else if (formData.bookedService) {
      const option = bookedServiceOptions.find((item) => item.value === formData.bookedService);
      setFormData((prev) => ({ ...prev, ...formData, _bookedServiceText: option?.label }));
    } else {
      setFormData((prev) => ({ ...prev, ...formData }));
    }
  };

  const handleReset = () => {
    setFormData(defaultValues);
    setErrorBag({});
    setSuccess(false);
  };

  const handleSubmit = async () => {
    if (canSubmit) {
      setErrorBag({});

      const { success, errors } = zodUtils.validateFormSchema(formSchema, formData);

      if (!success) {
        setErrorBag(errors);
        return;
      }

      if (MOCK.bookAppointment.action) {
        mutateFormData({ _id: 0 });        
        await handleSendStub();
      } else {
        mutateFormData({ _id: 1 });

        const mail = appointmentUserMail({ ...formData, _id: 1 });
        await handleSend({
          to: formData.email,
          subject: mail.subject,
          body: mail.body,
        });
      }

      setSuccess(true);
    }

    console.log("🚀 ~ handleSubmit ~ formData:", formData);
    console.log("🚀 ~ handleSubmit ~ errorBag:", errorBag);
  };

  return {
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
  };
}
