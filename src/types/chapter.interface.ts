import type { ICourse } from './course.interface'
import type { IBase } from './root.interface'

/**
 * Интерфейс IChapter описывает структуру главы курса,
 * включая её название, ссылку, описание, идентификатор видео,
 * статус публикации и связанный курс.
 */
export interface IChapter extends IBase {
	name: string
	slug: string
	description: string
	videoId: string
	isPublished: boolean
	course: ICourse
}
