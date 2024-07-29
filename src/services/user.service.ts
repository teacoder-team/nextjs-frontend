import { instance } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import { IUser } from '@/types/user.interface'

/**
 * UserService предоставляет методы для взаимодействия с API пользователей.
 * В данный момент он включает функцию для получения профиля текущего пользователя.
 */
class UserService {
	async profile() {
		const { data } = await instance.get<IUser>(API_URL.users('/profile'))

		return data
	}
}

export default new UserService()
