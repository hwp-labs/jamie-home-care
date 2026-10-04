import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "jamiehomecare.ca" }],
        destination: "https://www.jamiehomecare.ca/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;