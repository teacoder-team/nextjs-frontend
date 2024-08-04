import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import '@/assets/styles/globals.scss'

import { APP_URL } from '@/config/url.config'

import {
	SITE_DESCRIPTION,
	SITE_KEYWORDS,
	SITE_NAME,
	SITE_TITLE
} from '@/constants/seo.constants'

import { MainProvider } from '@/providers/MainProvider'

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME, // Полное название сайта
		template: `%s | ${SITE_NAME}` // Шаблон для заголовка страницы
	},
	description: SITE_DESCRIPTION, // Описание сайта
	metadataBase: new URL(APP_URL), // Базовый URL для метаданных
	applicationName: SITE_TITLE, // Название приложения
	authors: [
		{
			url: new URL('https://github.com/teacoder-team'), // URL автора
			name: 'TeaCoder Team' // Имя автора
		}
	],
	keywords: SITE_KEYWORDS, // Ключевые слова для SEO
	generator: 'Next.js', // Генератор сайта
	creator: 'TeaCoder Team', // Создатель сайта
	publisher: 'TeaCoder Team', // Издатель сайта
	icons: {
		icon: '/images/favicon.ico', // Иконка сайта
		shortcut: '/images/favicon.ico', // Иконка для ярлыка
		apple: '/touch-icons/192x192.png', // Иконка для устройств Apple
		other: {
			rel: 'touch-icons',
			url: '/touch-icons/192x192.png',
			sizes: '192x192',
			type: 'image/png'
		}
	},
	manifest: '/manifest.webmanifest', // Путь к манифесту PWA
	openGraph: {
		title: SITE_TITLE, // Заголовок для Open Graph
		description: SITE_DESCRIPTION, // Описание для Open Graph
		type: 'website', // Тип контента
		emails: ['help@teacoder.ru'], // Контактные email
		siteName: SITE_NAME, // Название сайта
		locale: 'ru_RU', // Локализация
		images: [
			{
				url: new URL(APP_URL + '/touch-icons/512x512.png'), // URL изображения
				width: 512, // Ширина изображения
				height: 512, // Высота изображения
				alt: SITE_TITLE // Альтернативный текст для изображения
			}
		],
		url: APP_URL // URL сайта
	},
	twitter: {
		card: 'summary_large_image', // Тип карточки Twitter
		title: SITE_TITLE, // Заголовок для Twitter
		description: SITE_DESCRIPTION, // Описание для Twitter
		images: [
			{
				url: new URL(APP_URL + '/touch-icons/512x512.png'), // URL изображения для Twitter
				width: 512,
				height: 512,
				alt: SITE_TITLE
			}
		]
	},
	verification: {
		google: process.env.GOOGLE_TOKEN_VERIFICATION, // Токен верификации Google
		yandex: process.env.YANDEX_TOKEN_VERIFICATION // Токен верификации Яндекс
	},
	formatDetection: {
		telephone: false // Отключение автоматического определения телефонных номеров
	}
}

/**
 * Компонент RootLayout определяет корневую структуру приложения.
 * Он оборачивает дочерние элементы в провайдер MainProvider
 * и задает язык страницы.
 *
 * @param {Readonly<{ children: React.ReactNode }>} props - Дочерние элементы для рендеринга.
 * @returns {JSX.Element} Корневой элемент приложения.
 */
export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<GoogleTagManager gtmId='GTM-5V42JG7P' />
			<body className={GeistSans.variable}>
				<MainProvider>{children}</MainProvider>
			</body>
			<GoogleAnalytics gaId='G-89X740CDRX' />
		</html>
	)
}
