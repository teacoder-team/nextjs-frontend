'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { FaGithub, FaTelegram, FaYoutube } from 'react-icons/fa6'

import { Skeleton } from '@/components/ui/common/skeleton/Skeleton'

import type { Course } from '@/types/course.interface'

import { getMediaSource } from '@/utils/string/get-media-source'

import styles from './Links.module.scss'

interface LinksProps {
	course: Course
}

export function Links({ course }: LinksProps) {
	const { data, isLoading } = useQuery({
		queryKey: ['get session from cookie'],
		queryFn: async () => {
			const response = await fetch('/api/cookie')
			if (!response.ok) throw new Error('Network response was not ok')
			return response.json()
		}
	})

	return (
		<div className={styles.links}>
			{isLoading ? (
				<>
					<Skeleton className='h-20 w-40' />
					<Skeleton className='h-20 w-40' />
					<Skeleton className='h-20 w-40' />
				</>
			) : (
				<>
					{course.chapters.length !== 0 && (
						<Link
							href={course.videoUrl}
							target='_blank'
							rel='noopener noreferrer'
							title='YouTube'
						>
							<FaYoutube className='text-rose-600' />
							<span>YouTube</span>
						</Link>
					)}
					<Link
						href='https://t.me/TeaCoder_official'
						target='_blank'
						rel='noopener noreferrer'
						title='Telegram'
					>
						<FaTelegram className='text-blue-500' />
						<span>Telegram</span>
					</Link>
					{data.session ? (
						<Link
							href={getMediaSource(course.repositoryUrl)}
							title='Исходный код'
						>
							<FaGithub />
							<span>Исходный код</span>
						</Link>
					) : (
						<Link href='/auth/sign-in' title='Авторизация'>
							<FaGithub />
							<span>Исходный код</span>
						</Link>
					)}
				</>
			)}
		</div>
	)
}
