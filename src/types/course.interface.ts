import type { Chapter } from './chapter.interface'
import type { Base } from './root.interface'

export interface Course extends Base {
	name: string
	slug: string
	description: string
	features: string[]
	imageUrl: string
	videoUrl: string
	repositoryUrl: string
	isPublished: boolean
	views: number
	chapters: Chapter[]
	progress: number
}
