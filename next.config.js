/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["png.img.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "help.twitter.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "pngimg.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
