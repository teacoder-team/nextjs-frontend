import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { ManageCourses } from './ManageCourses'

export const metadata: Metadata = {
	title: 'Все курсы',
	description: 'Эта страница для управления всеми курсами на сайте.',
	...NO_INDEX_PAGE
}

export default function ManageCoursesPage() {
	return <ManageCourses />
}
