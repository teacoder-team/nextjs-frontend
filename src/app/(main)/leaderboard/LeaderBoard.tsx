'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

import Loading from '@/app/loading'

import { Heading } from '@/components/ui/common/heading/Heading'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/common/table/Table'

import { useProfile } from '@/hooks/useProfile'

import userService from '@/services/user.service'

import styles from './LeaderBoard.module.scss'

export function LeaderBoard() {
	const { user: currentUser } = useProfile()

	const { data, isLoading } = useQuery({
		queryKey: ['top users by points'],
		queryFn: () => userService.findTopUsersByPoints()
	})

	if (isLoading) return <Loading />

	return (
		<div>
			<Heading
				title='Таблица лидеров'
				description='Узнайте, кто заработал наибольшее количество очков за прохождение курсов и вдохновитесь их успехами.'
			/>
			<Table className='mt-3'>
				<TableHeader>
					<TableRow>
						<TableHead className='w-[230px]'>Ранг</TableHead>
						<TableHead className='w-[700px]'>Пользователь</TableHead>
						<TableHead>Кол-во очков</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{currentUser && (
						<TableRow>
							<TableCell className={styles.rank}>🚀</TableCell>
							<TableCell className={styles.user}>
								<Image
									src={currentUser.profile.picture}
									alt={currentUser.profile.name}
									width={35}
									height={35}
								/>
								{currentUser.profile.name}
								<div className={styles.success}>
									<span>Вы</span>
								</div>
							</TableCell>
							<TableCell>
								<div className={styles.success}>
									<span>{currentUser.profile.points}</span>
								</div>
							</TableCell>
						</TableRow>
					)}
					{data?.length ? (
						data.map((user, idx) => (
							<TableRow key={idx}>
								<TableCell className={styles.rank}>
									{idx + 1}.
								</TableCell>
								<TableCell className={styles.user}>
									<Image
										src={user.profile.picture}
										alt={user.profile.name}
										width={35}
										height={35}
									/>
									{user.profile.name}
								</TableCell>
								<TableCell>
									<div className={styles.success}>
										<span>{user.profile.points}</span>
									</div>
								</TableCell>
							</TableRow>
						))
					) : (
						<div>Пользователей не найдено</div>
					)}
				</TableBody>
			</Table>
		</div>
	)
}
