'use client'

import { useQuery } from '@tanstack/react-query'

import Loading from '@/app/loading'

import {
	Avatar,
	AvatarFallback,
	AvatarImage
} from '@/components/ui/common/avatar/Avatar'
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

import { userService } from '@/services/user.service'

import styles from './LeaderBoard.module.scss'

export function LeaderBoard() {
	const { user: currentUser } = useProfile()

	const { data, isLoading } = useQuery({
		queryKey: ['find top users by points'],
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
								<Avatar>
									<AvatarImage
										src={currentUser.picture}
										alt={currentUser.displayName}
									/>
									<AvatarFallback>
										{currentUser.displayName.slice(0, 1)}
									</AvatarFallback>
								</Avatar>
								{currentUser.displayName}
								<div className={styles.success}>
									<span>Вы</span>
								</div>
							</TableCell>
							<TableCell>
								<div className={styles.success}>
									<span>{currentUser.points}</span>
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
									<Avatar>
										<AvatarImage
											src={user.picture}
											alt={user.displayName}
										/>
										<AvatarFallback>
											{user.displayName.slice(0, 1)}
										</AvatarFallback>
									</Avatar>
									{user.displayName}
								</TableCell>
								<TableCell>
									<div className={styles.success}>
										<span>{user.points}</span>
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
