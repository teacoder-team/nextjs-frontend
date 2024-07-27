import { axiosClassic } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import type { ICourse } from '@/types/course.interface'

class CourseService {
	async findAll() {
		const { data } = await axiosClassic.get<ICourse[]>(API_URL.courses())

		return data
	}

	async findBySlug(slug: string) {
		const { data } = await axiosClassic.get<ICourse>(
			API_URL.courses(`/by-slug/${slug}`)
		)

		return data
	}
}

export default new CourseService()
