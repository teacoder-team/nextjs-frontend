import { ICourse } from '@/types/course.interface'

import styles from './Course.module.scss'
import { CourseDetails } from './course-details/CourseDetails'
import { CourseInfo } from './course-info/CourseInfo'

interface CourseProps {
	initialCourse: ICourse
}

/**
 * Компонент Course отображает информацию о курсе, включая основные сведения и детали.
 *
 * @param {CourseProps} props - Свойства компонента.
 * @param {ICourse} props.initialCourse - Объект курса с информацией для отображения.
 *
 * @returns {JSX.Element} Элемент курса, содержащий информацию и детали курса.
 */
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
