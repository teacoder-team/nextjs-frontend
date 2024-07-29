import { axiosClassic } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import { removeFromStorage, saveTokenStorage } from './auth.helper'

/**
 * AuthService предоставляет методы для аутентификации пользователей.
 * Он включает функции для получения новых токенов и выхода из системы.
 */
class AuthService {
	async getNewTokens() {
		const response = await axiosClassic.post<{ accessToken: string }>(
			API_URL.auth('/login/access-token')
		)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	}

	async getNewTokensByRefresh(refreshToken: string) {
		const response = await axiosClassic.post<{ accessToken: string }>(
			API_URL.auth('/login/access-token'),
			{},
			{
				headers: {
					Cookie: `refreshToken=${refreshToken}`
				}
			}
		)

		return response.data
	}

	async logout() {
		const response = await axiosClassic.post<boolean>(API_URL.auth('/logout'))

		if (response.data) removeFromStorage()

		return response
	}
}

export default new AuthService()
