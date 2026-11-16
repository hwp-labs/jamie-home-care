import { APP } from "@/constants/APP";
import { mailUtils } from "./utils";

export interface BodyPayload {}

export const appointmentMail = {
  subject_User: `Thank You For Subscribing`,
  body_User: (x?: BodyPayload) => `
${mailUtils.cover}
Thank you for subscribing to ${APP.name} Newsletters. 
<p></p>
You are now on our mailing list for event planning tips, event organizer checklists, and ideas to make your events memorable.
${mailUtils.regards}
`,
};
