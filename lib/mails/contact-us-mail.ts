import { APP } from "@/constants/APP";
import { mailUtils } from "./utils";

interface ContactedUsMailBodyDto {
  name: string;
  email: string;
  message: string;
}

export const contactUsMail = {
  subject: `Thank You For Contacting Us`,
  body: (args: ContactedUsMailBodyDto) => `
${mailUtils.cover}
Hello ${args.name},
<p></p>
Thank you for contacting ${APP.name}. 
<p></p>
We have received your message and will get back to you within 1-2 business days with more details to share about your event.
<p></p>
Message received:<br/>
---<br/>
${args.message}<br/>
---
${mailUtils.regards}
`,
};