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
      Thank you for contacting ${APP.name}. 
      We have received your appointment request and a member of our team will call or email you shortly to confirm.
      <p></p>
      Appointment details: <br/>
      <b>Booked For:</b> ${p._bookedForText} <br/>
      <b>Service Type:</b> ${p._bookedServiceText} <br/>
      <b>Date/Time:</b> ${schedule} <br/>
      <b>Notes:</b> ${p.notes}
      <p></p>
      If you need to change your request or have any questions, 
      call us at ${APP.tel}, quoting your reference number <b>${referenceNo}</b>.
      ${mailUtils.regards}
      ${mailUtils.footer}
    `,
  };
};
