import type { MetadataRoute } from 'next'

import { APP_URL } from '@/config/constants'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: 'Yandex',
				allow: '/',
				disallow: '/manage/'
			},
			{
				userAgent: 'Googlebot',
				allow: '/',
				disallow: '/manage/'
			},
			{
				userAgent: '*',
				allow: '/',
				disallow: '/manage/'
			}
		],
		host: APP_URL,
		sitemap: APP_URL + '/sitemap.xml'
	}
}
