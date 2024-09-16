import type { Metadata } from 'next'

import { Account } from '@/components/features/account/Account'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Личный кабинет',
	description: 'Здесь вы можете отслеживать свой прогресс по курсам.',
	...NO_INDEX_PAGE
}

export default function AccountPage() {
	return <Account />
}
