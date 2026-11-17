import { useState } from "react";
import { useEmailAction } from "@/hooks/use-email-action";
import { newsletterMail } from "@/lib/mails/newsletter-mail";
import { zodUtils } from "@/utils/zod-utils";
import { MOCK } from "@/constants/MOCK";
//
import { FormDataType, formSchema, defaultValues, mockDefaultValues } from "./schema";

const M = MOCK.newsletter;

export const initialValues: FormDataType = M.formData ? mockDefaultValues : defaultValues;

export function useNewsletter() {
  const { sending: submitting, sent: submitted, handleSend, handleSendStub } = useEmailAction();
  const [formData, setFormData] = useState<FormDataType>(initialValues);
  const [errorBag, setErrorBag] = useState<Partial<FormDataType>>({});
  //
  const canSubmit = !submitting;
  //
  const mutateFormData = (formData: Partial<FormDataType>) => {
    setFormData((prev) => ({ ...prev, ...formData }));
  };

  const handleReset = () => {
    setFormData(defaultValues);
  };

  const handleSubmit = async () => {
    if (canSubmit) {
      setErrorBag({});

      const { success, errors } = zodUtils.validateFormSchema(formSchema, formData);

      if (!success) {
        setErrorBag(errors);
        return;
      }

      if (M.action) {
        await handleSendStub();
      } else {
        const mail = newsletterMail();
        await handleSend({
          to: formData.email,
          subject: mail.subject,
          body: mail.body,
        });
      }

      handleReset();
    }

    // console.log("🚀 ~ handleSubmit ~ formData:", formData);
    // console.log("🚀 ~ handleSubmit ~ errorBag:", errorBag);
  };

  return {
    submitting,
    submitted,
    formData,
    errorBag,
    canSubmit,
    mutateFormData,
    handleReset,
    handleSubmit,
  };
}
