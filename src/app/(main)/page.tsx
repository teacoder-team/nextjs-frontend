import type { Metadata } from 'next'

import { CourseList } from '@/components/ui/elements/course-list/CourseList'

import courseService from '@/services/course.service'

export const metadata: Metadata = {
	title: 'Образовательная платформа для программистов'
}

export const revalidate = 60

async function getCourses(searchParams: { searchTerm: string }) {
	const courses = (
		await courseService.findAll(searchParams?.searchTerm as string)
	).filter(course => course.isPublished)

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
export default async function HomePage({
	searchParams
}: {
	searchParams: {
		searchTerm: string
	}
}) {
	const courses = await getCourses(searchParams)

	return (
		<div>
			<CourseList courses={courses} />
		</div>
	)
}
