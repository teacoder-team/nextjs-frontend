import type { Metadata } from 'next'

import { Auth } from './Auth'

export const metadata: Metadata = {
	title: 'Авторизация',
	description: 'Войдите в свой аккаунт, используя один из доступных способов: Google, GitHub, Яндекс или Discord.'
}

export default function AuthPage() {
	return <Auth />
}
