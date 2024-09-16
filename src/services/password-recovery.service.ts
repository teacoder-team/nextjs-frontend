import { api } from '@/api/instance.api'

import { TypeNewPasswordSchema } from '@/schemes/auth/new-password.schema'
import { TypeResetPasswordSchema } from '@/schemes/auth/reset-password.schema'

class PasswordRecoveryService {
	public async reset(body: TypeResetPasswordSchema) {
		const response = await api.post<boolean>(
			'auth/password-recovery/reset',
			body
		)

		return response
	}

	public async new(body: TypeNewPasswordSchema, token: string | null) {
		const response = await api.post<boolean>(
			`auth/password-recovery/new/${token}`,
			body
		)

		return response
	}
}

export const passwordRecoveryService = new PasswordRecoveryService()
