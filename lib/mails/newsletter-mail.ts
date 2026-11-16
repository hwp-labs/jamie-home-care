import { APP } from "@/constants/APP";
import { mailUtils } from "./utils";

export const newsletterMail = {
  subject: `Thank You For Subscribing`,
  body: `
${mailUtils.cover}
Thank you for subscribing to ${APP.name} Newsletters. 
<p></p>
You are now on our mailing list for event planning tips, event organizer checklists, and ideas to make your events memorable.
${mailUtils.regards}
`,
};
