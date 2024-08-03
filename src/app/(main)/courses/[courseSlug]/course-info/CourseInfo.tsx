import Image from 'next/image'

import { CourseBadge } from '@/components/ui/elements/course-list/course-card/course-badge/CourseBadge'
import { ProgressBar } from '@/components/ui/elements/progress-bar/ProgressBar'
import { VideoPlayer } from '@/components/ui/elements/video-player/VideoPlayer'

import { ICourse } from '@/types/course.interface'

import styles from './CourseInfo.module.scss'

interface CourseInfoProps {
	course: ICourse
}

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
