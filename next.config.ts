import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    // Root layout lives at app/[locale]/layout.tsx (dynamic segment),
    // so a global 404 cannot be composed from a static root layout.
    globalNotFound: true,
  },
};

export default withNextIntl(nextConfig);
