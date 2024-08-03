import type { IChapter } from '@/types/chapter.interface'
import { ICourse } from '@/types/course.interface'

import styles from './Chapter.module.scss'
import { CourseProgressButton } from './CourseProgressButton'

interface ChapterProps {
	chapter: IChapter
	course: ICourse
}

export function Chapter({ chapter, course }: ChapterProps) {
	return (
		<div className={styles.wrapper}>
			<div>
				<div className={styles.video_player}>
					<iframe
						src={`https://kinescope.io/embed/${chapter.videoId}`}
						allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
						allowFullScreen
						className='h-full w-full'
					/>
				</div>
				<div className={styles.info_wrapper}>
					<div>
						<div className={styles.info}>
							<div>
								<h2>{chapter.name}</h2>
								<CourseProgressButton
									chapterId={chapter.id}
									course={course}
									// isCompleted={!!userProgress?.isCompleted}
								/>
							</div>
							<div className={styles.description}>
								{chapter.description}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
