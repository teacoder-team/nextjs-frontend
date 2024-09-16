import { api } from '@/api/instance.api'

import type { AuthResponse } from '@/types/auth.interface'

import type { TypeLoginSchema } from '@/schemes/auth/login.schema'
import type { TypeRegisterSchema } from '@/schemes/auth/register.schema'

class AuthService {
	public async register(body: TypeRegisterSchema) {
		const response = await api.post<AuthResponse>('auth/register', body)

		return response
	}

	public async login(body: TypeLoginSchema) {
		const response = await api.post<AuthResponse>('auth/login', body)

		return response
	}

	public async oauthByProvider(provider: 'google' | 'github' | 'yandex') {
		const response = await api.get<{ url: string }>(
			`auth/oauth/connect/${provider}`
		)

		return response
	}

	public async logout() {
		return api.post('auth/logout')
	}
}

export const authService = new AuthService()
