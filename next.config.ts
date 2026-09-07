import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const isRestrictedLocalBuild = process.env.CODEX_LOCAL_BUILD === "1";

const scriptSource = isProduction
  ? "script-src 'self' 'unsafe-inline'"
  : "script-src 'self' 'unsafe-inline' 'unsafe-eval'";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  scriptSource,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: isRestrictedLocalBuild
    ? {
        workerThreads: true,
        cpus: 1,
      }
    : undefined,
  typescript: {
    ignoreBuildErrors: isRestrictedLocalBuild,
  },
  async headers() {
    const headers = [
      { key: "Content-Security-Policy", value: contentSecurityPolicy },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
      },
    ];

    if (isProduction) {
      headers.push({
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      });
    }

    return [{ source: "/(.*)", headers }];
  },
};

export default nextConfig;
