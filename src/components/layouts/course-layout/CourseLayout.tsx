'use client'

import { useQuery } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'

import Loading from '@/app/loading'

import { chapterService } from '@/services/chapter.service'
import { userService } from '@/services/user.service'

import styles from './CourseLayout.module.scss'
import { CourseNavbar } from './course-navbar/CourseNavbar'
import { CourseSidebar } from './course-sidebar/CourseSidebar'

interface CourseLayoutProps {
	chapterSlug: string
}

export function CourseLayout({
	children,
	chapterSlug
}: PropsWithChildren<CourseLayoutProps>) {
	const { data, isLoading } = useQuery({
		queryKey: ['chapter by slug for course layout'],
		queryFn: () => chapterService.findBySlug(chapterSlug)
	})

	const { data: progressCount, isLoading: isLoadingProgress } = useQuery({
		queryKey: ['find user progress'],
		queryFn: () => userService.findUserProgress(data?.chapter.course.id!)
	})

	if (isLoading || isLoadingProgress || !progressCount || !data)
		return <Loading />

	return (
		<div className={styles.wrapper}>
			<div className={styles.navbar}>
				<CourseNavbar
					course={data.chapter.course}
					progressCount={progressCount || 52}
				/>
			</div>
			<div className={styles.sidebar}>
				<CourseSidebar
					course={data.chapter.course}
					progressCount={progressCount || 52}
				/>
			</div>
			<main>{children}</main>
		</div>
	)
}
