import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string().email({ message: 'Неверный формат Email' }),
	password: z.string().min(6, { message: 'Пароль минимум 6 символов' })
})

export type TypeLoginSchema = z.infer<typeof loginSchema>
