import type { IChapter } from './chapter.interface'
import type { IBase } from './root.interface'

export interface ICourse extends IBase {
	name: string
	slug: string
	description: string
	imageUrl: string
	videoUrl: string
	repositoryUrl: string
	isPublished: boolean
	views: number
	chapters: IChapter[]
}

export interface ICourseCreate extends Pick<ICourse, 'name'> {}
