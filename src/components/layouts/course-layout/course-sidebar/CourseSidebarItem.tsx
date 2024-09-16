'use client'

import { CheckCircle, PauseCircle, PlayCircle } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { Chapter } from '@/types/chapter.interface'
import type { Course } from '@/types/course.interface'

import { cn } from '@/utils/clsx'

import styles from './CourseSidebar.module.scss'

interface CourseSidebarItemProps {
	chapter: Chapter
	course: Course
	isCompleted: boolean
}

export function CourseSidebarItem({
	course,
	chapter,
	isCompleted
}: CourseSidebarItemProps) {
	const pathname = usePathname()

	const isActive = pathname?.includes(chapter.slug)

	const Icon = isActive ? PauseCircle : isCompleted ? CheckCircle : PlayCircle

	return (
		<Link
			href={`/courses/${course.slug}/chapters/${chapter.slug}`}
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
