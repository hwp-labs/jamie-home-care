import { APP } from "@/constants/APP";
import { FormDataType } from "@/components/molecules/contact-form/schema";
//
import { mailUtils } from "./utils";

export interface Params extends FormDataType {}

export const contactUsMail = (p: Params) => {
  return {
    subject: `We received your message`,
    body: `
      ${mailUtils.header}
      Hi ${p.firstName},
      <p></p>
      Thank you for contacting ${APP.name}. 
      We have received your message and a member of our team will get back to you shortly.
      <p></p>
      Your message: <br/>
      ${p.message}
      <p></p>
      If your question is urgent, call us at ${APP.tel}.
      ${mailUtils.regards}
      ${mailUtils.footer}
      ${mailUtils.unsubscribe}     
    `,
  };
};
