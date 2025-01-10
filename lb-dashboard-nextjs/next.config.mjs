import properties from "./properties.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: properties.BASE_URL,
  },
};

export default nextConfig;
