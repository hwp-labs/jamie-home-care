import { CalendarCheck } from "lucide-react";
import { SubmitButton } from "@/components/atoms/form-builder";
import { momentUtils } from "@/utils/moment-utils";
//
import { FormDataType } from "../schema";
import { appointmentFormUtils } from "../utils";

interface Props {
  formData: FormDataType;
  handleClose: () => void;
}

export function AppointmentSummary({ formData, handleClose }: Props) {
  return (
    <div className="space-y-6">
      <div role="status" className="bg-brand-soft rounded-2xl p-8">
        <div className="flex items-start gap-4">
          <CalendarCheck className="text-brand mt-1 size-8 shrink-0" aria-hidden />
          <h3 className="text-brand-dark text-2xl font-bold">Appointment request received!</h3>
        </div>
        <dl className="mt-6 grid gap-4 rounded-xl bg-white p-6">
          <dl>
            <dt className="text-muted text-base">Appointment Narration</dt>
            <dd className="font-semibold">
              {appointmentFormUtils.getNarration(formData)}
            </dd>
          </dl>
          <dl>
            <dt className="text-muted text-base">Appointment Schedule</dt>
            <dd className="font-semibold">
              {momentUtils.verbose(`${formData.bookedDate} ${formData.bookedTime}`)}
            </dd>
          </dl>
          <dl>
            <dt className="text-muted text-base">Reference Number</dt>
            <dd className="font-semibold">{appointmentFormUtils.getReferenceNo(formData._id)}</dd>
          </dl>
        </dl>
      </div>
      <SubmitButton onClick={handleClose}>Done</SubmitButton>
    </div>
  );
}
