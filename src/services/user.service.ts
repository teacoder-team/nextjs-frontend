import { api } from '@/api/instance.api'

import { Course } from '@/types/course.interface'
import type { User } from '@/types/user.interface'

class UserService {
	public async findTopUsersByPoints() {
		const response = await api.get<User[]>('users/find-top')

		return response
	}

	public async findProfile() {
		const response = await api.get<User>('users/profile')

		return response
	}

	public async findUserProgress(courseId: string) {
		const response = await api.get<number>(`users/progress/${courseId}`)

		return response
	}

	public async findCoursesByProgress() {
		const response = await api.get<{
			coursesInProgress: Course[]
			completedCourses: Course[]
		}>(`users/course-by-progress`)

		return response
	}
}

export const userService = new UserService()
