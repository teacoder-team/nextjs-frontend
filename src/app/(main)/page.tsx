import type { Metadata } from 'next'

import { CourseCard } from '@/components/ui/elements/course-card/CourseCard'

import courseService from '@/services/course.service'

import styles from './Home.module.scss'

export const metadata: Metadata = {
	title: 'Образовательная платформа для программистов'
}

export const revalidate = 60

async function getCourses() {
	const courses = (await courseService.findAll()).filter(
		course => course.isPublished
	)

	return courses
}

/**
 * Главная страница приложения, отображающая список всех
 * опубликованных курсов. Использует компонент CourseCard
 * для отображения информации о каждом курсе.
 *
 * Метаданные страницы:
 * - title: "Образовательная платформа для программистов"
 */
export default async function HomePage() {
	const courses = await getCourses()

	return (
		<div className={styles.wrapper}>
			<div className={styles.courses}>
				{courses.map(course => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
		</div>
	)
}
