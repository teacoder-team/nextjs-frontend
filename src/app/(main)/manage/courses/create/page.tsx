import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { CreateCourse } from './CreateCourse'

export const metadata: Metadata = {
	title: 'Создание курса',
	description: 'Эта страница предназначена для создания нового курса.',
	...NO_INDEX_PAGE
}

export default function CreateCoursePage() {
	return <CreateCourse />
}
