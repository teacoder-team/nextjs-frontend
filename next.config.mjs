/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		APPLICATION_ENV: process.env.APPLICATION_ENV,
		APPLICATION_URL: process.env.APPLICATION_URL,
		SERVER_URL: process.env.SERVER_URL,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'avatars.yandex.net',
			},
		],
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: `${this.env.SERVER_URL}/uploads/:path*`
			}
		]
	}
};

export default nextConfig;
