import type { MetadataRoute } from "next";
import { APP } from "@/constants/APP";
import { PATHS } from "@/constants/PATH";

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({
    url: `${APP.website}${path === "/" ? "" : path}`,
  }));
}