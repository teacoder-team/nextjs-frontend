import { Menu } from 'lucide-react'

import {
	Sheet,
	SheetContent,
	SheetTrigger
} from '@/components/ui/common/sheet/Sheet'

import type { Course } from '@/types/course.interface'

import { CourseSidebar } from './CourseSidebar'
import styles from './CourseSidebar.module.scss'

interface CourseMobileSidebarProps {
	course: Course
	progressCount: number
}

export function CourseMobileSidebar({
	course,
	progressCount
}: CourseMobileSidebarProps) {
	return (
		<Sheet>
			<SheetTrigger className={styles.mobile_trigger}>
				<Menu />
			</SheetTrigger>
			<SheetContent side='left' className={styles.mobile_content}>
				<CourseSidebar course={course} progressCount={progressCount} />
			</SheetContent>
		</Sheet>
	)
}
