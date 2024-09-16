import { z } from 'zod'

export const registerSchema = z.object({
	name: z.string().min(1, { message: 'Введите имя' }),
	email: z.string().email({ message: 'Некорректная почта' }),
	password: z.string().min(6, { message: 'Пароль минимум 6 символов' })
})

export type TypeRegisterSchema = z.infer<typeof registerSchema>
