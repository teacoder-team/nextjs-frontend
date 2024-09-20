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

async function getCourse(params: { slug: string }) {
	try {
		const course = await courseService.findBySlug(params.slug)

		return { course }
	} catch (error) {
		return notFound()
	}
}

export async function generateMetadata({
	params
}: {
	params: { slug: string }
}): Promise<Metadata> {
	const { course } = await getCourse(params)

	return {
		title: course.name,
		description: course.description,
		openGraph: {
			title: course.name,
			description: course.description,
			url: APP_URL + `/projects/${course.slug}`,
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
	params: { slug: string }
}) {
	const { course } = await getCourse(params)

	return <Course initialCourse={course} />
}
