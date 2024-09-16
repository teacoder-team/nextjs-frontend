import type { Metadata } from 'next'

import { Settings } from '@/components/features/account/Settings'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Настройки профиля',
	...NO_INDEX_PAGE
}

export default function SettingsPage() {
	return <Settings />
}
