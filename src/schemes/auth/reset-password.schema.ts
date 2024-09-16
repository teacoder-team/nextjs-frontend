import { z } from 'zod'

export const resetPasswordSchema = z.object({
	email: z.string().email({ message: 'Неверный формат Email' })
})

export type TypeResetPasswordSchema = z.infer<typeof resetPasswordSchema>
