import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_URL } from '@/config/url.config'

import type { ICourse } from '@/types/course.interface'

import { ProgressBar } from '../progress-bar/ProgressBar'

import styles from './CourseCard.module.scss'

interface CourseCardProps {
	course: ICourse
}

/**
 * Компонент CourseCard отображает карточку курса, содержащую
 * изображение, название, описание и прогресс обучения.
 *
 * @param {ICourse} course - Объект курса, который содержит
 * информацию о названии, описании, изображении и слаге.
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
				<ProgressBar value={52} />
			</div>
		</Link>
	)
}
