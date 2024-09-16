import { z } from 'zod'

export const newPasswordSchema = z
	.object({
		password: z.string().min(6, { message: 'Пароль минимум 6 символов' }),
		passwordRepeat: z
			.string()
			.min(6, { message: 'Пароль подтверждения минимум 6 символов' })
	})
	.refine(data => data.password === data.passwordRepeat, {
		message: 'Пароли не совпадают',
		path: ['passwordRepeat']
	})

export type TypeNewPasswordSchema = z.infer<typeof newPasswordSchema>
