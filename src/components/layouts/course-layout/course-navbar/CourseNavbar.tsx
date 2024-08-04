import type { ICourse } from '@/types/course.interface'

import { HeaderMenu } from '../../main-layout/header/header-menu/HeaderMenu'
import { CourseMobileSidebar } from '../course-sidebar/CourseMobileSidebar'

import styles from './CourseNavbar.module.scss'

interface CourseNavbarProps {
	course: ICourse
	progressCount: number
}

export function CourseNavbar({ course, progressCount }: CourseNavbarProps) {
	// console.log(course)

	return (
		<div className={styles.navbar}>
			<CourseMobileSidebar course={course} progressCount={progressCount} />
			<div className={styles.header_menu}>
				{/* <Link href={PUBLIC_URL.course(course.slug)}>
					<Button variant='ghost'>
						<LogOut className={styles.icon} />
						Вернутся к курсу
					</Button>
				</Link> */}
				<HeaderMenu />
			</div>
		</div>
	)
}
