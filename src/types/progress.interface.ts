import { IChapter } from './chapter.interface'
import { IBase } from './root.interface'

interface ILogCourse extends IBase {
	isCompleted: boolean
	chapterId: number
	userId: number
}

export interface IProgressResponse {
	logCourse: ILogCourse
	nextChapter: IChapter
}
