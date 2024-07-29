/**
 * URL сервера, получаемый из переменных окружения.
 */
export const SERVER_URL = process.env.SERVER_URL as string

/**
 * Объект API_URL содержит методы для генерации URL-адресов API приложения.
 */
export const API_URL = {
	root: (url = '') => `${url ? url : ''}`,

	auth: (url = '') => API_URL.root(`/auth${url}`),
	users: (url = '') => API_URL.root(`/users${url}`),
	courses: (url = '') => API_URL.root(`/courses${url}`)
}
