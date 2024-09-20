'use client'

import { useQuery } from '@tanstack/react-query'
import { CheckCircle, Clock } from 'lucide-react'

import Loading from '@/app/loading'

import { CourseList } from '@/components/ui/elements/course-list/CourseList'

import { useProfile } from '@/hooks/useProfile'

import { userService } from '@/services/user.service'

import styles from './Account.module.scss'
import { AccountCard } from './AccountCard'

export function Account() {
	const { user, isLoadingProfile } = useProfile()

	const { data } = useQuery({
		queryKey: ['get course for user account'],
		queryFn: () => userService.findCoursesByProgress()
	})

	if (isLoadingProfile || !data) return <Loading />

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div>
					<h2>Привет, {user?.displayName}</h2>
					<p>Здесь вы можете отслеживать свой прогресс по курсам.</p>
				</div>
			</div>
			<div className={styles.cards}>
				<AccountCard
					icon={Clock}
					label='В прогрессе'
					numberOfItems={data.coursesInProgress.length}
				/>
				<AccountCard
					icon={CheckCircle}
					label='Выполнено'
					variant='success'
					numberOfItems={data.completedCourses.length}
				/>
			</div>
			<div>
				<CourseList
					courses={[...data.coursesInProgress, ...data.completedCourses]}
				/>
			</div>
		</div>
	)
}
