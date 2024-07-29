import type { IChapter } from './chapter.interface'
import type { IBase } from './root.interface'

/**
 * Интерфейс ICourse описывает структуру курса, включая
 * его название, ссылку, описание, URL изображения, URL видео,
 * URL репозитория, статус публикации, количество просмотров
 * и главы, входящие в курс.
 */
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

/**
 * Интерфейс ICourseCreate описывает структуру данных,
 * необходимых для создания нового курса, включая только
 * название курса.
 */
export interface ICourseCreate extends Pick<ICourse, 'name'> {}
