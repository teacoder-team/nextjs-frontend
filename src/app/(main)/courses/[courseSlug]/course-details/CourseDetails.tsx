import { ICourse } from '@/types/course.interface'

import styles from './CourseDetails.module.scss'
import { Features } from './features/Features'
import { Links } from './links/Links'
import { Video } from './video/Video'

interface CourseDetailsProps {
	course: ICourse
}

export function CourseDetails({ course }: CourseDetailsProps) {
	return (
		<div className={styles.details}>
			<Video course={course} />
			<Features features={course.features} />
			<Links course={course} />
		</div>
	)
}
