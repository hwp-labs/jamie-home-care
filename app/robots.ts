import { SITE_URL } from "@/constants/SITE";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV !== "production") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}