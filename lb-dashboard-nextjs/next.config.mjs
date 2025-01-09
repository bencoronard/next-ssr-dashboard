import properties from "../properties";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: properties.client.publicApiUrl,
  },
};

export default nextConfig;
