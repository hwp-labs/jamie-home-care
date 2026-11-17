import { useState } from "react";
import { useEmailAction } from "@/hooks/use-email-action";
import { contactUsMail } from "@/lib/mails/contact-us-mail";
import { zodUtils } from "@/utils/zod-utils";
import { MOCK } from "@/constants/MOCK";
//
import { FormDataType, formSchema, defaultValues, mockDefaultValues } from "./schema";

const M = MOCK.contactUs;

export const initialValues: FormDataType = M.formData ? mockDefaultValues : defaultValues;

export function useContactForm() {
  const { sending: submitting, handleSend, handleSendStub } = useEmailAction();
  const [formData, setFormData] = useState<FormDataType>(initialValues);
  const [errorBag, setErrorBag] = useState<Partial<FormDataType>>({});
  const [success, setSuccess] = useState(false);
  //
  const canSubmit = !submitting;
  //
  const mutateFormData = (formData: Partial<FormDataType>) => {
    setFormData((prev) => ({ ...prev, ...formData }));
  };

  const handleReset = () => {
    setFormData(defaultValues);
    setSuccess(false);
  };

  const handleSubmit = async () => {
    if (canSubmit) {
      setErrorBag({});

      const { success, data, errors } = zodUtils.validateFormSchema(formSchema, formData);

      if (!success) {
        setErrorBag(errors);
        return;
      }

      if (M.action) {
        await handleSendStub();
      } else {
        const mail = contactUsMail(data);
        await handleSend({
          to: formData.email,
          subject: mail.subject,
          body: mail.body,
        });
      }

      setSuccess(true);
    }

    // console.log("🚀 ~ handleSubmit ~ formData:", formData);
    // console.log("🚀 ~ handleSubmit ~ errorBag:", errorBag);
  };

  return {
    submitting,
    formData,
    errorBag,
    success,
    canSubmit,
    mutateFormData,
    handleReset,
    handleSubmit,
  };
}
