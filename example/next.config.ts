import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["@apptify-labs/ui"],
  outputFileTracingRoot: path.join(__dirname, "../"),
  turbopack: {
    root: path.join(__dirname, "../"),
  },
};

export default nextConfig;
