import type { MetadataRoute } from "next";
import { APP } from "@/constants/APP";

export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV !== "production") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${APP.website}/sitemap.xml`,
    host: APP.website,
  };
}