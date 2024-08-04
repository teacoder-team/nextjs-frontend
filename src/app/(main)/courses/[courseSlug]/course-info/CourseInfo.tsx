import Image from 'next/image'

import { CourseBadge } from '@/components/ui/elements/course-list/course-card/course-badge/CourseBadge'
import { ProgressBar } from '@/components/ui/elements/progress-bar/ProgressBar'
import { VideoPlayer } from '@/components/ui/elements/video-player/VideoPlayer'

import { ICourse } from '@/types/course.interface'

import styles from './CourseInfo.module.scss'

interface CourseInfoProps {
	course: ICourse
}

/**
 * Компонент CourseInfo отображает информацию о курсе,
 * включая видео (или изображение), название, описание и значок курса.
 *
 * @param {CourseInfoProps} props - Свойства компонента.
 * @param {ICourse} props.course - Объект курса с информацией для отображения.
 *
 * @returns {JSX.Element} Элемент с информацией о курсе.
 */
export function CourseInfo({ course }: CourseInfoProps) {
	return (
		<div className={styles.course_info}>
			<div className={styles.video}>
				{course.chapters.length && course.chapters[0].isPublished ? (
					<VideoPlayer videoId={course.chapters[0].videoId} />
				) : (
					<Image src={course.imageUrl} alt={course.name} fill priority />
				)}
			</div>
			<div className={styles.info}>
				<CourseBadge chapters={course.chapters} />
				<h2>{course.name}</h2>
				<p>{course.description}</p>
				{/* Добавить вывод категорий */}
				<ProgressBar value={52} />
			</div>
		</div>
	)
}
