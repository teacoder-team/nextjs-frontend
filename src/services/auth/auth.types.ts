import { EnumRole } from '@/types/user.interface'

export interface ITokenInside {
	id: number
	role: EnumRole
	iat: number
	exp: number
}
