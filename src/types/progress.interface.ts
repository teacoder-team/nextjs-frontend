import { Chapter } from './chapter.interface'
import { Base } from './root.interface'

export interface UserProgress extends Base {
	isCompleted: boolean
	chapterId: string
	userId: string
}

export interface ProgressResponse {
	userProgress: UserProgress
	nextChapter: Chapter
}
