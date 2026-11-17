import { APP } from "@/constants/APP";

const header = `
  <p>
    <img src="${APP.website}/images/email-header.png" alt="" width="100%" />
  </p>
`;

const footer = `
  <p style="margin-top:50px;">
    <img src="${APP.website}/images/email-footer.png" alt="" width="100%" />
  </p>
`;

const regards = `
  <p style="margin-top:25px;">
    Warm regards,<br/>
    ${APP.abbr} Care Team
  </p>
`;

const unsubscribe = `
  <p style="margin-top:50px; font-size:10px; text-align:center;">
    You are receiving this email because you subscribed to our newsletter. 
    <a href="${APP.website}">Unsubscribe</a>
  </p>
`;

export const mailUtils = {
  header,
  footer,
  regards,
  unsubscribe,
};
