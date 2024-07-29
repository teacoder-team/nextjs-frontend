import { instance } from '@/api/api.interceptors'

import { API_URL, SERVER_URL } from '@/config/api.config'

import type { IUser } from '@/types/user.interface'

/**
 * UserService предоставляет методы для взаимодействия с API пользователей.
 * В данный момент он включает функцию для получения профиля текущего пользователя.
 */
class UserService {
	async getProfile() {
		const { data } = await instance.get<IUser>(API_URL.users('/profile'))

		return data
	}

	async getProfileByToken(accessToken: string) {
		const response = await fetch(SERVER_URL + API_URL.users('/profile'), {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		})

		return response.json()
	}
}

export default new UserService()
