import type { Metadata } from 'next'

import { CourseList } from '@/components/ui/elements/course-list/CourseList'

import { SITE_TITLE } from '@/constants/seo.constants'

import { courseService } from '@/services/course.service'

export const metadata: Metadata = {
	title: SITE_TITLE
}

export const revalidate = 60

async function getCourses(searchParams: { searchTerm: string }) {
	const courses = await courseService.findAll(
		searchParams?.searchTerm as string
	)

	return courses
}

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
