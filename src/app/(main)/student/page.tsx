import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Student } from './Student'

export const metadata: Metadata = {
	title: 'Личный кабинет',
	description: 'Здесь вы можете отслеживать свой прогресс по курсам.',
	...NO_INDEX_PAGE
}

export default function StudentPage() {
	return <Student />
}
