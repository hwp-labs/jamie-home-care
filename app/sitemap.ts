import type { MetadataRoute } from "next";
import { SITE_PATHS, SITE_URL } from "@/constants/SITE";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_PATHS.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
  }));
}