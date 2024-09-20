import { Chapter } from '@/components/features/course/chapter/Chapter'

export const dynamic = 'force-dynamic'

export default async function ChapterPage({
	params
}: {
	params: { chapterSlug: string }
}) {
	return <Chapter chapterSlug={params.chapterSlug} />
}
