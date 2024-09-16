import { api } from '@/api/instance.api'

import type { Course } from '@/types/course.interface'

class CourseService {
	public async findAll(searchTerm?: string) {
		const response = await api.get<Course[]>('courses', {
			params: searchTerm
				? {
						searchTerm
					}
				: {}
		})

		return response
	}

	public async findBySlug(slug: string) {
		const response = await api.get<Course>(`courses/by-slug/${slug}`)

		return response
	}
}

export const courseService = new CourseService()
