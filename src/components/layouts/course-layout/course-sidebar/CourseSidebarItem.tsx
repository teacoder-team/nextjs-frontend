'use client'

import { CheckCircle, PauseCircle, PlayCircle } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { PUBLIC_URL } from '@/config/url.config'

import { IChapter } from '@/types/chapter.interface'
import { ICourse } from '@/types/course.interface'

import { cn } from '@/utils/clsx'

import styles from './CourseSidebar.module.scss'

interface ICourseSidebarItem {
	chapter: IChapter
	course: ICourse
	isCompleted: boolean
}

export function CourseSidebarItem({
	course,
	chapter,
	isCompleted
}: ICourseSidebarItem) {
	const pathname = usePathname()

	const isActive = pathname?.includes(chapter.slug)

	const Icon = isActive ? PauseCircle : isCompleted ? CheckCircle : PlayCircle

	return (
		<Link
			href={PUBLIC_URL.chapter(course.slug, chapter.slug)}
			className={cn(styles.item, {
				[styles.active]: isActive,
				[styles.completed]: isCompleted,
				[styles.active_completed]: isCompleted && isActive
			})}
		>
			<div className={styles.route}>
				<Icon
					size={22}
					className={cn({
						[styles.active]: isActive,
						[styles.completed]: isCompleted
					})}
				/>
				{chapter.name}
			</div>
		</Link>
	)
}
