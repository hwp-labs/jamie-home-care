import { APP } from "@/constants/APP";
import { FormDataType } from "@/components/molecules/appointment-form/schema";
import { appointmentFormUtils } from "@/components/molecules/appointment-form/utils";
import { momentUtils } from "@/utils/moment-utils";
//
import { mailUtils } from "./utils";

export interface Params {}

export const newsletterMail = () => {
  return {
    subject: `Thank You For Subscribing`,
    body: `
      Thank you for subscribing to ${APP.name} Newsletters. 
      <p></p>
      You are now on our mailing list for event planning tips, event organizer checklists, and ideas to make your events memorable.
      ${mailUtils.regards}
    `,
  };
};
