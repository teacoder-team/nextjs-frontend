import { LogOut } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/common/button/Button'

import type { Course } from '@/types/course.interface'

import { HeaderMenu } from '../../main-layout/header/header-menu/HeaderMenu'
import { CourseMobileSidebar } from '../course-sidebar/CourseMobileSidebar'

import styles from './CourseNavbar.module.scss'

interface CourseNavbarProps {
	course: Course
	progressCount: number
}

export function CourseNavbar({ course, progressCount }: CourseNavbarProps) {
	return (
		<div className={styles.navbar}>
			<CourseMobileSidebar course={course} progressCount={progressCount} />
			<div className={styles.header_menu}>
				<Link href={`/projects/${course.slug}`}>
					<Button variant='ghost'>
						<LogOut className={styles.icon} />
						Вернутся к курсу
					</Button>
				</Link>
				<HeaderMenu />
			</div>
		</div>
	)
}
