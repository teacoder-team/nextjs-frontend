import { UserProgress } from './progress.interface'

export enum UserRole {
	Student = 'STUDENT',
	Admin = 'ADMIN'
}

export enum AuthMethod {
	Credentials = 'CREDENTIALS',
	Google = 'GOOGLE',
	Yandex = 'YANDEX'
}

export interface User {
	id: string
	createdAt: Date
	updatedAt: Date
	email: string
	password: string
	displayName: string
	username: string
	picture: string
	points: number
	method: AuthMethod
	role: UserRole
	userProgress: UserProgress[]
}
