import { APP } from "@/constants/APP";
import { FormDataType } from "@/components/molecules/appointment-form/schema";
import { appointmentFormUtils } from "@/components/molecules/appointment-form/utils";
import { momentUtils } from "@/utils/moment-utils";
// 
import { mailUtils } from "./utils";

momentUtils;
export interface BodyPayload {}

export const appointmentUserMail = (payload: FormDataType) => {
  const referenceNo = appointmentFormUtils.getReferenceNo(payload._id);
  const schedule = momentUtils.verbose(`${payload.bookedDate} ${payload.bookedTime}`);
  //
  return {
    subject: `We received your appointment request ${referenceNo}`,
    body: `
      Hi ${payload.firstName},
      <p></p>
      Thank you for contacting ${APP.name}. We have received your appointment request and a member of our team will call or email you shortly to confirm.
      <p></p>
      Your requestdetails:<br/>
      <b>Appointment For:</b> ${payload._bookedForText}<br/>
      <b>Appointment Service:</b> ${payload._bookedServiceText}<br/>
      <b>Appointment Schedule:</b> ${schedule}<br/>
      <b>Appointment Notes:</b> ${payload.notes}
      <p></p>
      If you need to change your request or have any questions, call us at ${APP.tel}, quoting your reference number <b>${referenceNo}</b>.
      ${mailUtils.regards}
      `,
  };
};
