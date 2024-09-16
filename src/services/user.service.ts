import { api } from '@/api/instance.api'

import type { User } from '@/types/user.interface'

class UserService {
	public async findTopUsersByPoints() {
		const response = await api.get<User[]>('users/find-top')

		return response
	}

	public async findProfile() {
		const response = await api.get<User>('users/profile')

		return response
	}
}

export const userService = new UserService()
