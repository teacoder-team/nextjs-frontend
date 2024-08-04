import { instance } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import { IProgressResponse } from '@/types/progress.interface'

class LogCourseService {
	async progress(chapterId: string, isCompleted: boolean) {
		const { data } = await instance.put<IProgressResponse>(
			API_URL.logsCourse(`/${chapterId}`),
			{ isCompleted: !isCompleted }
		)

		return data
	}
}

export default new LogCourseService()
