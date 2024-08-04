import { deleteCookie, getCookie, setCookie } from 'cookies-next'

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
	const accessToken = getCookie(EnumTokens.ACCESS_TOKEN, {
		path: '/'
	})
	return accessToken || null
}

/**
 * Сохраняет accessToken в cookie.
 *
 * @param {string} accessToken - accessToken для сохранения.
 */
export const saveTokenStorage = (accessToken: string) => {
	setCookie(EnumTokens.ACCESS_TOKEN, accessToken, {
		domain: process.env.APP_DOMAIN,
		sameSite: 'strict',
		maxAge: 60 * 60 * 24
	})
}

/**
 * Удаляет accessToken из cookie.
 */
export const removeFromStorage = () => {
	deleteCookie(EnumTokens.ACCESS_TOKEN, {
		domain: process.env.APP_DOMAIN
	})
}
