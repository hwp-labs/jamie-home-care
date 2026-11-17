import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";
//
import { mailUtils } from "./utils";

export interface Params {}

export const newsletterMail = () => {
  return {
    subject: `Thank you for subscribing to our newsletter`,
    body: `
      ${mailUtils.header}
      Thank you for subscribing to the ${APP.name} newsletter. 
      You are now on our list to receive practical care tips, helpful articles and updates for families caring for a loved one at home.
      <p></p>
      What to expect: <br/>
      - Care tips for seniors and individuals with disabilities <br/>
      - News and updates from our team <br/>
      - Helpful resources, delivered periodically
      <p></p>      
      If you have a question about care for someone you love, we are happy to talk it through with no pressure. 
      Call us at ${APP.tel}, or book an appointment at ${APP.website}${PATH.bookAppointment}.
      ${mailUtils.regards}
      ${mailUtils.footer}
      ${mailUtils.unsubscribe}     
    `,
  };
};
