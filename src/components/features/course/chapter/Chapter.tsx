'use client'

import { useQuery } from '@tanstack/react-query'

import Loading from '@/app/loading'

import { chapterService } from '@/services/chapter.service'

import styles from './Chapter.module.scss'
import { ProgressButton } from './progress-button/ProgressButton'

interface ChapterProps {
	chapterSlug: string
}

export function Chapter({ chapterSlug }: ChapterProps) {
	const { data, isLoading } = useQuery({
		queryKey: ['chapter by slug'],
		queryFn: () => chapterService.findBySlug(chapterSlug)
	})

	if (isLoading || !data) return <Loading />

	return (
		<div className={styles.wrapper}>
			<div>
				<div className={styles.video_player}>
					<iframe
						src={`https://kinescope.io/embed/${data.chapter.videoId}`}
						allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
						allowFullScreen
						className='h-full w-full'
					/>
				</div>
				<div className={styles.info_wrapper}>
					<div>
						<div className={styles.info}>
							<div>
								<h2>{data.chapter.name}</h2>
								<ProgressButton
									chapterId={data.chapter.id}
									course={data.chapter.course}
									isCompleted={!!data.userProgress?.isCompleted}
								/>
							</div>
							<div className={styles.description}>
								{data.chapter.description}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
