import { CheckCircle2Icon } from "lucide-react";
import { SubmitButton } from "@/components/atoms/form-builder";
//
import { FormDataType } from "../schema";

interface Props {
  formData: FormDataType;
  handleClose: () => void;
}

export function ContactSummary({ formData, handleClose }: Props) {
  return (
    <div className="space-y-6">
      <div role="status" className="bg-brand-soft mt-8 flex items-start gap-4 rounded-2xl p-6">
        <CheckCircle2Icon className="text-brand mt-1 size-7 shrink-0" aria-hidden />
        <div>
          <h3 className="text-brand-dark text-xl font-semibold">
            Thank you {formData.firstName}, your message is on its way
          </h3>
          <p className="text-muted mt-1">We will get back to you as soon as we can.</p>
        </div>
      </div>
      <SubmitButton onClick={handleClose}>Done</SubmitButton>
    </div>
  );
}
