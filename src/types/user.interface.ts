import type { IBase } from './root.interface'

/**
 * EnumAuthProvider перечисляет доступные провайдеры аутентификации.
 */
export enum EnumAuthProvider {
	Google = 'GOOGLE',
	Github = 'GITHUB',
	Yandex = 'YANDEX',
	Discord = 'DISCORD'
}

/**
 * EnumRole перечисляет доступные роли пользователей в системе.
 */
export enum EnumRole {
	Student = 'STUDENT',
	Moderator = 'MODERATOR',
	Admin = 'ADMIN'
}

/**
 * Интерфейс IProfile описывает структуру профиля пользователя,
 * включая идентификатор, имя, изображение и количество очков,
 * а также провайдер аутентификации.
 */
export interface IProfile {
	id: number
	name: string
	picture: string
	points: number
	provider: EnumAuthProvider
}

/**
 * Интерфейс IUser описывает структуру пользователя, включая
 * его электронную почту, роль и профиль.
 */
export interface IUser extends IBase {
	email: string
	role: EnumRole
	profile: IProfile
}
