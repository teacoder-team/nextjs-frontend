import { cookies } from 'next/headers'
import Link from 'next/link'
import { FaGithub, FaTelegram, FaYoutube } from 'react-icons/fa6'

import type { Course } from '@/types/course.interface'

import styles from './Links.module.scss'

interface LinksProps {
	course: Course
}

export function Links({ course }: LinksProps) {
	const session = cookies().get('session')?.value

	return (
		<div className={styles.links}>
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
			{session ? (
				<Link href={course.repositoryUrl} title='Исходный код'>
					<FaGithub />
					<span>Исходный код</span>
				</Link>
			) : (
				<Link href='/auth/sign-in' title='Авторизация'>
					<FaGithub />
					<span>Исходный код</span>
				</Link>
			)}
		</div>
	)
}
