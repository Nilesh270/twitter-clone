/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
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
      {
        protocol: "https",
        hostname: "localhost",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
