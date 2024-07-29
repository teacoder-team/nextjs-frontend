import type { Metadata } from 'next'

import { Auth } from './Auth'

export const metadata: Metadata = {
	title: 'Авторизация', // Заголовок страницы авторизации
	description:
		'Войдите в свой аккаунт, используя один из доступных способов: Google, GitHub, Яндекс или Discord.' // Описание страницы авторизации
}

/**
 * Компонент AuthPage отображает страницу авторизации,
 * которая включает компонент Auth для аутентификации пользователя.
 *
 * @returns {JSX.Element} Элемент страницы авторизации.
 */
export default function AuthPage() {
	return <Auth />
}
