import { CUR_YEAR, UNKNOWN } from "@/constants";
import { APP } from "@/constants/APP";
//
import { FormDataType } from "./schema";

const getNarration = (formData: FormDataType) =>
  `${formData.firstName} ${formData.lastName} booked ${formData._bookedServiceText || UNKNOWN} service for ${formData._bookedForText || UNKNOWN}. ${formData.notes || ""}`;

const getReferenceNo = (id: number | string = 0) =>
  `${APP.abbr}/${CUR_YEAR}/${String(id).padStart(6, "0")}`;

export const appointmentFormUtils = { getNarration, getReferenceNo };
