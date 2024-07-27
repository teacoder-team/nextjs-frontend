import type { ICourse } from './course.interface'
import type { IBase } from './root.interface'

export interface IChapter extends IBase {
	name: string
	slug: string
	description: string
	videoId: string
	isPublished: boolean
	course: ICourse
}
