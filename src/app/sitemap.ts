import type { MetadataRoute } from 'next'

import { APP_URL } from '@/config/constants'

import { courseService } from '@/services/course.service'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const courses = await courseService.findAll()

	const courseEntries: MetadataRoute.Sitemap = courses.map(({ slug }) => ({
		url: APP_URL + `/projects/${slug}`,
		lastModified: new Date(),
		changeFrequency: 'daily',
		priority: 0.9
	}))

	return [
		{
			url: APP_URL,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1
		},
		...courseEntries
	]
}
