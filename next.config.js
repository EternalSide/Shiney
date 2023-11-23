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
				hostname: "blablabla.cdn.wikkeo.com",
			},
		],
	},
};

module.exports = nextConfig;
