import { ICourse } from '@/types/course.interface'

import styles from './Course.module.scss'
import { CourseDetails } from './course-details/CourseDetails'
import { CourseInfo } from './course-info/CourseInfo'

interface CourseProps {
	initialCourse: ICourse
}

export function Course({ initialCourse }: CourseProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<CourseInfo course={initialCourse} />
				<CourseDetails course={initialCourse} />
			</div>
		</div>
	)
}
