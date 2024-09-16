import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Manage } from './Manage'

export const metadata: Metadata = {
	title: 'Админ панель',
	description: 'Управляйте студентами и курсами. Отслеживайте статистику, анализируйте успеваемость и управляйте контентом на сайте.',
	...NO_INDEX_PAGE
}

export default function ManagePage() {
	return <Manage />
}
