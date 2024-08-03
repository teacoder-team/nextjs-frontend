import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_URL } from '@/config/url.config'

import type { ICourse } from '@/types/course.interface'

import { ProgressBar } from '../../progress-bar/ProgressBar'

import styles from './CourseCard.module.scss'
import { CourseBadge } from './course-badge/CourseBadge'

interface CourseCardProps {
	course: ICourse
}

/**
 * Компонент CourseCard отображает информацию о курсе в виде карточки,
 * включая изображение, название, описание и индикатор прогресса.
 *
 * Свойства:
 * - course (ICourse): Объект курса, содержащий информацию для отображения.
 *
 * @returns {JSX.Element} Элемент карточки курса.
 */
export function CourseCard({ course }: CourseCardProps) {
	return (
		<Link href={PUBLIC_URL.course(course.slug)} className={styles.card}>
			<div className={styles.image}>
				<Image src={course.imageUrl} alt={course.name} fill />
			</div>
			<div className={styles.info}>
				<h2>{course.name}</h2>
				<p>{course.description}</p>
				<CourseBadge chapters={course.chapters} />
				<ProgressBar value={52} />
			</div>
		</Link>
	)
}
