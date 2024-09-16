import { Course } from '@/types/course.interface'

import styles from './CourseList.module.scss'
import { CourseCard } from './course-card/CourseCard'

interface CourseListProps {
	courses: Course[]
}

export function CourseList({ courses }: CourseListProps) {
	return (
		<>
			{courses.length ? (
				<div className={styles.courses}>
					{courses.map(course => (
						<CourseCard key={course.id} course={course} />
					))}
				</div>
			) : (
				<div className={styles.not_found}>Нечего не найдено.</div>
			)}
		</>
	)
}
