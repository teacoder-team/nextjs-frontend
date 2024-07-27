export enum UserRole {
	User = 'USER',
	Moderator = 'MODERATOR',
	Admin = 'ADMIN'
}

export interface IUser {
	id: number
	email: string
	role: UserRole
}
