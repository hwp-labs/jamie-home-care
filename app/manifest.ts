import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jamie Home Care",
    short_name: "Jamie Care",
    start_url: "/",
    display: "standalone",
    background_color: "#f6ece2",
    theme_color: "#690b1d",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      // Remove this line if you do not have a 512x512 file in /public
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}