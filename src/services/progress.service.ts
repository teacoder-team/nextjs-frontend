import { api } from '@/api/instance.api'

import { ProgressResponse } from '@/types/progress.interface'

class ProgressService {
	public async newProgress(chapterId: string, isCompleted: boolean) {
		const response = await api.put<ProgressResponse>(
			`progress/${chapterId}`,
			{ isCompleted: !isCompleted }
		)

		return response
	}
}

export const progressService = new ProgressService()
