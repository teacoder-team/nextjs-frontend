import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import '@/assets/styles/globals.scss'

import { APP_URL } from '@/config/constants'

import {
	SITE_DESCRIPTION,
	SITE_KEYWORDS,
	SITE_NAME,
	SITE_TITLE
} from '@/constants/seo.constants'

import { MainProvider } from '@/providers/MainProvider'

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
		google: '89H2Fy7soWLhbxVRVychKcfgyNik8guwZod8nIl6YTg',
		yandex: '834f7318f7c48963'
	},
	formatDetection: {
		telephone: false
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<GoogleTagManager gtmId='GTM-5V42JG7P' />
			<body className={GeistSans.variable}>
				<MainProvider>{children}</MainProvider>
			</body>
			<GoogleAnalytics gaId='G-89X740CDRX' />
		</html>
	)
}
