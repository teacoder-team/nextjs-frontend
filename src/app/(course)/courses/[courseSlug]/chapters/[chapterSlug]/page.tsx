import { notFound } from 'next/navigation'

import chapterService from '@/services/chapter.service'

import { Chapter } from './Chapter'

export const revalidate = 60

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

export default async function ChapterPage({
	params
}: {
	params: { chapterSlug: string }
}) {
	const chapter = await getChapter(params)

	return <Chapter chapter={chapter} course={chapter.course} />
}
