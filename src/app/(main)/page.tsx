import type { Metadata } from 'next'

import { CourseItem } from '@/components/ui/elements/course-item/CourseItem'

import courseService from '@/services/course.service'

export const metadata: Metadata = {
	title: 'Образовательная платформа для программистов'
}

export const revalidate = 60

async function getCourses() {
	const courses = await courseService.findAll()

	return courses
}

export default async function HomePage() {
	const courses = await getCourses()

	return (
		<div>
			{courses.map(course => (
				<CourseItem key={course.id} course={course} />
			))}
		</div>
	)
}
