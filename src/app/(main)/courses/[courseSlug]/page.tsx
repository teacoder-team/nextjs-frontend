import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { APP_URL } from '@/config/constants'

import { courseService } from '@/services/course.service'

import { Course } from '../../../../components/features/course/Course'

export const revalidate = 60

export async function generateStaticParams() {
	const response = await courseService.findAll()

	const paths = response.map(course => {
		return {
			params: { slug: course.slug }
		}
	})

	return paths
}

async function getCourse(params: { courseSlug: string }) {
	try {
		const course = await courseService.findBySlug(params.courseSlug)

		return { course }
	} catch (error) {
		return notFound()
	}
}

export async function generateMetadata({
	params
}: {
	params: { courseSlug: string }
}): Promise<Metadata> {
	const { course } = await getCourse(params)

	return {
		title: course.name,
		description: course.description,
		openGraph: {
			title: course.name,
			description: course.description,
			url: APP_URL + `/courses/${course.slug}`,
			images: [
				{
					url: APP_URL + course.imageUrl,
					width: 1280,
					height: 720,
					alt: course.name
				}
			]
		},
		twitter: {
			card: 'summary_large_image',
			title: course.name,
			description: course.description,
			images: [
				{
					url: APP_URL + course.imageUrl,
					width: 1280,
					height: 720,
					alt: course.name
				}
			]
		}
	}
}

export default async function CoursePage({
	params
}: {
	params: { courseSlug: string }
}) {
	const { course } = await getCourse(params)

	return <Course initialCourse={course} />
}
