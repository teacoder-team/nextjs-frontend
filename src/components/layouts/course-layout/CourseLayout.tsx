import type { PropsWithChildren } from 'react'

import type { ICourse } from '@/types/course.interface'

import styles from './CourseLayout.module.scss'
import { CourseNavbar } from './course-navbar/CourseNavbar'
import { CourseSidebar } from './course-sidebar/CourseSidebar'

interface CourseLayoutProps extends PropsWithChildren {
	course: ICourse
	progressCount: number
}

export function CourseLayout({
	children,
	course,
	progressCount
}: CourseLayoutProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.navbar}>
				<CourseNavbar course={course} progressCount={progressCount} />
			</div>
			<div className={styles.sidebar}>
				<CourseSidebar course={course} progressCount={progressCount} />
			</div>
			<main>{children}</main>
		</div>
	)
}
