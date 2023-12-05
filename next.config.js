/** @type {import('next').NextConfig} */

const nextConfig = {
      images: {
            remotePatterns: [
                  {
                        protocol: "https",
                        hostname: "i.pinimg.com",
                  },
                  {
                        protocol: "https",
                        hostname: "files.edgestore.dev",
                  },
                  {
                        protocol: "https",
                        hostname: "s3.timeweb.com",
                  },
                  {
                        protocol: "https",
                        hostname: "blablabla.cdn.wikkeo.com",
                  },
                  {
                        protocol: "https",
                        hostname: "wikkeo.com",
                  },
            ],
      },
};

module.exports = nextConfig;
