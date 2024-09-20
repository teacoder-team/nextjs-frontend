import type { PropsWithChildren } from 'react'

import { CourseLayout } from '@/components/layouts/course-layout/CourseLayout'

export default async function Layout({
	params,
	children
}: PropsWithChildren<{
	params: { chapterSlug: string }
}>) {
	return (
		<CourseLayout chapterSlug={params.chapterSlug}>{children}</CourseLayout>
	)
}
