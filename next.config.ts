/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "guru-almacen.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/quechua/**",
      },
    ],
  },
};

module.exports = nextConfig;
