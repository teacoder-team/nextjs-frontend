import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { NotFound } from './(main)/(common)/404/NotFound'

export const metadata: Metadata = {
	title: 'Страница не существует',
	...NO_INDEX_PAGE
}

export default function NotFoundPage() {
	return <NotFound />
}
