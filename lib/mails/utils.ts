import { APP } from "@/constants/APP";

const cover = `<a href="${APP.website}">
  <img src="${APP.website}/images/cover.png" alt="" width="100%" />
</a>
<p></p>`;

const regards = `<p style="margin-top:25px;"></p>
Regards,<br/>
<a href="${APP.website}">
  <img src="${APP.website}/icon.png" alt="" width="48" />
</a><br/>
${APP.name}`;

export const mailUtils = {
  cover,
  regards,
};
