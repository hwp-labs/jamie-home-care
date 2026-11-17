import { APP } from "@/constants/APP";
import { FormDataType } from "@/components/molecules/appointment-form/schema";
import { appointmentFormUtils } from "@/components/molecules/appointment-form/utils";
import { momentUtils } from "@/utils/moment-utils";
//
import { mailUtils } from "./utils";

export interface Params extends FormDataType {}

export const appointmentUserMail = (p: Params) => {
  const referenceNo = appointmentFormUtils.getReferenceNo(p._id);
  const schedule = momentUtils.verbose(`${p.bookedDate} ${p.bookedTime}`);
  //
  return {
    subject: `We received your appointment request ${referenceNo}`,
    body: `
      Hi ${p.firstName},
      <p></p>
      Thank you for contacting ${APP.name}. We have received your appointment request and a member of our team will call or email you shortly to confirm.
      <p></p>
      Your request details:<br/>
      <b>Appointment For:</b> ${p._bookedForText}<br/>
      <b>Appointment Service:</b> ${p._bookedServiceText}<br/>
      <b>Appointment Schedule:</b> ${schedule}<br/>
      <b>Appointment Notes:</b> ${p.notes}
      <p></p>
      If you need to change your request or have any questions, call us at ${APP.tel}, quoting your reference number <b>${referenceNo}</b>.
      ${mailUtils.regards}
    `,
  };
};
