import type { Course } from './course.interface'
import type { Base } from './root.interface'

export interface Chapter extends Base {
	name: string
	slug: string
	description: string
	videoId: string
	isPublished: boolean
	course: Course
}
