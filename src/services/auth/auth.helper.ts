import Cookies from 'js-cookie'

/**
 * Перечисление токенов, используемых для аутентификации.
 */
export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}

/**
 * Получает accessToken из cookie.
 *
 * @returns {string | null} accessToken или null, если он не найден.
 */
export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}

/**
 * Сохраняет accessToken в cookie.
 *
 * @param {string} accessToken - accessToken для сохранения.
 */
export const saveTokenStorage = (accessToken: string) => {
	Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
		domain: process.env.APP_DOMAIN,
		sameSite: 'strict',
		expires: 1
	})
}

/**
 * Удаляет accessToken из cookie.
 */
export const removeFromStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN)
}
