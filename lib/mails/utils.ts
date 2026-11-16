import { APP } from "@/constants/APP";

const cover = `<a href="${APP.website}">
  <img src="${APP.website}/images/cover.png" alt="" width="100%" />
</a>
<p></p>`;

const regards = `
  <p style="margin-top:25px;"></p>
  Warm regards,<br/>
  ${APP.name},<br/>
  ${APP.address}</br>
  ${APP.tel}
  <p></p>
  <a href="${APP.website}">
    <img src="${APP.website}/icon.png" alt="" width="48" />
  </a>
`;

export const mailUtils = {
  cover,
  regards,
};
