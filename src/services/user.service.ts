import { axiosClassic, instance } from '@/api/api.interceptors'

import { API_URL, SERVER_URL } from '@/config/api.config'

import type { IUser } from '@/types/user.interface'

/**
 * Класс UserService предоставляет методы для взаимодействия с API пользователей.
 * Он включает функции для получения профиля текущего пользователя, поиска топовых пользователей по очкам и получения профиля пользователя по токену.
 */
class UserService {
	async findTopUsersByPoints() {
		const { data } = await axiosClassic.get<IUser[]>(
			API_URL.users('/find-top')
		)

		return data
	}

	async findProfile() {
		const { data } = await instance.get<IUser>(API_URL.users('/profile'))

		return data
	}

	async findProfileByToken(accessToken: string) {
		const response = await fetch(SERVER_URL + API_URL.users('/profile'), {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		})

		return response.json()
	}

	async findProgress(courseId: string) {
		const { data } = await instance.get(
			API_URL.users(`/progress/${courseId}`)
		)

		return data
	}
}

export default new UserService()
