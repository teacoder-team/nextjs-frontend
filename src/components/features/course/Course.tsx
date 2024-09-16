import type { Course } from '@/types/course.interface'

import styles from './Course.module.scss'
import { Details } from './details/Details'
import { Info } from './info/Info'

interface CourseProps {
	initialCourse: Course
}
export function Course({ initialCourse }: CourseProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Info course={initialCourse} />
				<Details course={initialCourse} />
			</div>
		</div>
	)
}
