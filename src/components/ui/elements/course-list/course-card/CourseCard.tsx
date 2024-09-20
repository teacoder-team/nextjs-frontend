import Image from 'next/image'
import Link from 'next/link'

import type { Course } from '@/types/course.interface'

import { ProgressBar } from '../../progress-bar/ProgressBar'

import styles from './CourseCard.module.scss'
import { CourseBadge } from './course-badge/CourseBadge'

interface CourseCardProps {
	course: Course
}

export function CourseCard({ course }: CourseCardProps) {
	return (
		<Link href={`/courses/${course.slug}`} className={styles.card}>
			<div className={styles.image}>
				<Image src={course.imageUrl} alt={course.name} fill />
			</div>
			<div className={styles.info}>
				<h2>{course.name}</h2>
				<p>{course.description}</p>
				<CourseBadge chapters={course.chapters} />
				{course.progress && (
					<ProgressBar
						value={course.progress}
						variant={course.progress === 100 ? 'success' : 'default'}
					/>
				)}
			</div>
		</Link>
	)
}
