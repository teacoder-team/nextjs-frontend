import { ICourse } from '@/types/course.interface'

import styles from './CourseDetails.module.scss'
import { Features } from './features/Features'
import { Links } from './links/Links'

interface CourseDetailsProps {
	course: ICourse
}

/**
 * Компонент CourseDetails отображает детали курса, включая видео, особенности и ссылки.
 *
 * @param {CourseDetailsProps} props - Свойства компонента.
 * @param {ICourse} props.course - Объект курса с информацией для отображения деталей.
 *
 * @returns {JSX.Element} Элемент с деталями курса.
 */
export function CourseDetails({ course }: CourseDetailsProps) {
	return (
		<div className={styles.details}>
			{/* <Video course={course} /> */}
			<Features features={course.features} />
			<Links course={course} />
		</div>
	)
}
