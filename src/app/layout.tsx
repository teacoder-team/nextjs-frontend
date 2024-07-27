import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import '@/assets/styles/globals.scss'

import { APP_URL } from '@/config/url.config'
import { SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME, SITE_TITLE } from '@/constants/seo.constants'
import { Providers } from './providers'

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: SITE_DESCRIPTION,
	metadataBase: new URL(APP_URL),
	applicationName: SITE_TITLE,
	authors: [
		{
			url: new URL('https://github.com/teacoder-team'),
			name: 'TeaCoder Team'
		}
	],
	keywords: SITE_KEYWORDS,
	generator: 'Next.js',
	creator: 'TeaCoder Team',
	publisher: 'TeaCoder Team',
	icons: {
		icon: '/images/favicon.ico',
		shortcut: '/images/favicon.ico',
		apple: '/touch-icons/192x192.png',
		other: {
			rel: 'touch-icons',
			url: '/touch-icons/192x192.png',
			sizes: '192x192',
			type: 'image/png'
		}
	},
	manifest: '/manifest.webmanifest',
	openGraph: {
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		type: 'website',
		emails: ['help@teacoder.ru'],
		siteName: SITE_NAME,
		locale: 'ru_RU',
		images: [
			{
				url: new URL(APP_URL + '/touch-icons/512x512.png'),
				width: 512,
				height: 512,
				alt: SITE_TITLE
			}
		],
		url: APP_URL
	},
	twitter: {
		card: 'summary_large_image',
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		images: [
			{
				url: new URL(APP_URL + '/touch-icons/512x512.png'),
				width: 512,
				height: 512,
				alt: SITE_TITLE
			}
		]
	},
	verification: {
		google: '666',
		yandex: '666'
	},
	formatDetection: {
		telephone: false
	},
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={GeistSans.variable}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
