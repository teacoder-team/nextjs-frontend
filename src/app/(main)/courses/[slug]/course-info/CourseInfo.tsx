import { ProgressBar } from '@/components/ui/elements/progress-bar/ProgressBar'

import { ICourse } from '@/types/course.interface'

import styles from './CourseInfo.module.scss'
import { CourseVideo } from './CourseVideo'

interface CourseInfoProps {
	course: ICourse
}

export function CourseInfo({ course }: CourseInfoProps) {
	return (
		<div className={styles.course_info}>
			<CourseVideo course={course} />
			<div className={styles.info}>
				<h2>{course.name}</h2>
				<p>{course.description}</p>
				{/* Добавить вывод категорий */}
				<ProgressBar value={52} />
			</div>
		</div>
	)
}
