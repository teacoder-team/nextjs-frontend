import { MetadataRoute } from 'next'

import { COLORS } from '@/constants/color.constants'
import {
	SITE_DESCRIPTION,
	SITE_KEYWORDS,
	SITE_NAME,
	SITE_TITLE
} from '@/constants/seo.constants'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: SITE_TITLE,
		short_name: SITE_NAME,
		categories: SITE_KEYWORDS,
		lang: 'ru_RU',
		description: SITE_DESCRIPTION,
		start_url: '/',
		display: 'standalone',
		background_color: COLORS.bg,
		theme_color: COLORS.primary,
		orientation: 'portrait-primary',
		icons: [
			{
				src: '/touch-icons/192x192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: '/touch-icons/512x512.png',
				sizes: '512x512',
				type: 'image/png'
			},
			{
				src: '/touch-icons/192x192-mask.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'maskable'
			},
			{
				src: '/touch-icons/512x512-mask.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'maskable'
			}
		]
	}
}
