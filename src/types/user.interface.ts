import type { IBase } from './root.interface'

export enum EnumAuthProvider {
	Google = 'GOOGLE',
	Github = 'GITHUB',
	Yandex = 'YANDEX',
	Discord = 'DISCORD'
}

export enum EnumRole {
	Student = 'STUDENT',
	Moderator = 'MODERATOR',
	Admin = 'ADMIN'
}

export interface IProfile {
	id: number
	name: string
	picture: string
	points: number
	provider: EnumAuthProvider
}

export interface IUser extends IBase {
	email: string
	role: EnumRole
	profile: IProfile
}
