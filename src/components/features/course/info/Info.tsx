import Image from 'next/image'

import { CourseBadge } from '@/components/ui/elements/course-list/course-card/course-badge/CourseBadge'
import { VideoPlayer } from '@/components/ui/elements/video-player/VideoPlayer'

import type { Course } from '@/types/course.interface'

import styles from './Info.module.scss'

interface InfoProps {
	course: Course
}

export function Info({ course }: InfoProps) {
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
			</div>
		</div>
	)
}
