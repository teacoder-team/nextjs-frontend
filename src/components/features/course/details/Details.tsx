import type { Course } from '@/types/course.interface'

import styles from './Details.module.scss'
import { Features } from './features/Features'
import { Links } from './links/Links'
import { Video } from './video/Video'

interface DetailsProps {
	course: Course
}

export function Details({ course }: DetailsProps) {
	return (
		<div className={styles.details}>
			<Video course={course} />
			<Features features={course.features} />
			<Links course={course} />
		</div>
	)
}
