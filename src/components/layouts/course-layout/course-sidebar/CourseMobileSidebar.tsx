import { Menu } from 'lucide-react'

import {
	Sheet,
	SheetContent,
	SheetTrigger
} from '@/components/ui/common/sheet/Sheet'

import { ICourse } from '@/types/course.interface'

import { CourseSidebar } from './CourseSidebar'
import styles from './CourseSidebar.module.scss'

interface ICourseMobileSidebar {
	course: ICourse
	progressCount: number
}

export function CourseMobileSidebar({
	course,
	progressCount
}: ICourseMobileSidebar) {
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
