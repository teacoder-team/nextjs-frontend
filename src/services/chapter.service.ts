import { axiosClassic } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import type { IChapter } from '@/types/chapter.interface'

class ChapterService {
	async findAll() {
		const { data } = await axiosClassic.get<IChapter[]>(API_URL.chapters())

		return data
	}

	async findBySlug(slug: string) {
		const { data } = await axiosClassic.get<IChapter>(
			API_URL.chapters(`/by-slug/${slug}`)
		)

		return data
	}
}

export default new ChapterService()
