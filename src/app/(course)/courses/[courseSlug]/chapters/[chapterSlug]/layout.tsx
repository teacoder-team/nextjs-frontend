import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { PropsWithChildren } from 'react'

import { CourseLayout } from '@/components/layouts/course-layout/CourseLayout'

import chapterService from '@/services/chapter.service'

export const revalidate = 60
export const dynamic = 'force-static'

export async function generateStaticParams() {
	const response = await chapterService.findAll()

	const paths = response.map(chapter => {
		return {
			params: { chapterSlug: chapter.slug }
		}
	})

	return paths
}

async function getChapter(params: { chapterSlug: string }) {
	try {
		const chapter = await chapterService.findBySlug(params.chapterSlug)

		return chapter
	} catch (error) {
		console.log(error)
		return notFound()
	}
}

export async function generateMetadata({
	params
}: {
	params: { chapterSlug: string }
}): Promise<Metadata> {
	const chapter = await getChapter(params)

	return { title: chapter.name, description: chapter.description }
}

export default async function Layout({
	params,
	children
}: PropsWithChildren<{
	params: { chapterSlug: string }
}>) {
	const chapter = await getChapter(params)

	return (
		<CourseLayout course={chapter.course} progressCount={52}>
			{children}
		</CourseLayout>
	)
}
