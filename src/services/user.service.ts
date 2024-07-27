import { instance } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import { IUser } from '@/types/user.interface'

class UserService {
	async profile() {
		const { data } = await instance.get<IUser>(API_URL.users('/profile'))

		return data
	}
}

export default new UserService()
