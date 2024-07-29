/**
 * URL приложения, получаемый из переменных окружения.
 */
export const APP_URL = process.env.APP_URL as string

/**
 * Объект PUBLIC_URL содержит методы для генерации публичных URL-адресов приложения
 */
export const PUBLIC_URL = {
	root: (url = '') => `${url ? url : ''}`,

	home: () => PUBLIC_URL.root('/'),
	auth: () => PUBLIC_URL.root('/sign-in'),
	leaderboard: () => PUBLIC_URL.root('/leaderboard'),

	course: (slug = '') => PUBLIC_URL.root(`/courses/${slug}`),
	chapter: (courseSlug = '', chapterSlug = '') =>
		PUBLIC_URL.root(`/courses/${courseSlug}/chapters/${chapterSlug}`),

	privacy: () => PUBLIC_URL.root(`/docs/privacy`),
	agreement: () => PUBLIC_URL.root(`/docs/agreement`)
}

/**
 * Объект DASHBOARD_URL содержит методы для генерации URL-адресов личного кабинета
 */
export const DASHBOARD_URL = {
	root: (url = '') => `/dashboard${url ? '/' + url : ''}`,

	home: () => DASHBOARD_URL.root()
}

/**
 * Объект ADMIN_URL содержит методы для генерации URL-адресов админ панели
 */
export const ADMIN_URL = {
	root: (url = '') => `/manage${url ? '/' + url : ''}`,

	home: () => ADMIN_URL.root(),
	users: (url = '') => ADMIN_URL.root(`users${url}`),
	courses: (url = '') => ADMIN_URL.root(`courses${url}`)
}
