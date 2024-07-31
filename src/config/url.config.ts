/**
 * URL приложения, получаемый из переменных окружения.
 */
export const APP_URL = process.env.APP_URL as string

/**
 * Объект PUBLIC_URL содержит методы для генерации публичных URL-адресов приложения
 */
export const PUBLIC_URL = {
	auth: () => '/sign-in',
	leaderboard: () => '/leaderboard',

	course: (slug = '') => `/courses/${slug}`,
	chapter: (courseSlug = '', chapterSlug = '') =>
		`/courses/${courseSlug}/chapters/${chapterSlug}`,

	privacy: () => `/docs/privacy`,
	agreement: () => `/docs/agreement`
}

/**
 * Объект DASHBOARD_URL содержит методы для генерации URL-адресов личного кабинета
 */
export const DASHBOARD_URL = {
	root: (url = '') => `/student${url ? '/' + url : ''}`,

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
