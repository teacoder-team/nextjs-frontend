import { Chapter } from './chapter.interface'
import { Base } from './root.interface'

export interface UserProgress extends Base {
	isCompleted: boolean
	chapterId: number
	userId: number
}

export interface ProgressResponse {
	userProgress: UserProgress
	nextChapter: Chapter
}
