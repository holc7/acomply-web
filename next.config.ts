import type { NextConfig } from "next";
import path from "node:path";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // Pin Turbopack's workspace root to this project — Denis's home dir has a
  // stray package-lock.json that confuses Next 16's auto-detection.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default withNextIntl(nextConfig);
