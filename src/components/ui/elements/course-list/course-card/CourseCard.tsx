import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_URL } from '@/config/url.config'

import type { ICourse } from '@/types/course.interface'

import styles from './CourseCard.module.scss'
import { CourseBadge } from './course-badge/CourseBadge'

interface CourseCardProps {
	course: ICourse
}

/**
 * Компонент CourseCard отображает информацию о курсе в виде карточки,
 * включая изображение, название, описание, компонент CourseBadge и индикатор прогресса.
 *
 * @param {CourseCardProps} props - Свойства компонента.
 * @param {ICourse} props.course - Объект курса с информацией для отображения.
 *
 * @returns {JSX.Element} Элемент карточки курса, ссылающийся на страницу курса.
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
			</div>
		</Link>
	)
}
