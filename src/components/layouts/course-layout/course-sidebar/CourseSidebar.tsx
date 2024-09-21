import {
	ScrollArea,
	ScrollBar
} from '@/components/ui/common/scroll-area/ScrollArea'
import { ProgressBar } from '@/components/ui/elements/progress-bar/ProgressBar'

import type { Course } from '@/types/course.interface'

import styles from './CourseSidebar.module.scss'
import { CourseSidebarItem } from './CourseSidebarItem'

interface CourseSidebarProps {
	course: Course
	progressCount: number
}

export function CourseSidebar({ course, progressCount }: CourseSidebarProps) {
	return (
		<div className={styles.sidebar}>
			<div className={styles.course_info}>
				<h1>{course.name}</h1>
				<div className={styles.progress}>
					<ProgressBar variant='success' value={progressCount} />
				</div>
			</div>
			<ScrollArea className={styles.menu}>
				{course.chapters.map(chapter => {
					return (
						<CourseSidebarItem
							key={chapter.id}
							chapter={chapter}
							course={course}
							isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
						/>
					)
				})}
				<ScrollBar />
			</ScrollArea>
		</div>
	)
}
