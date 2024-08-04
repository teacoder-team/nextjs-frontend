'use client'

import { PlayCircle } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/common/button/Button'

import { PUBLIC_URL } from '@/config/url.config'

import { ICourse } from '@/types/course.interface'

import styles from './Video.module.scss'

interface VideoProps {
	course: ICourse
}

/**
 * Компонент Video отображает информацию о видео курса и кнопку для просмотра.
 *
 * @param {VideoProps} props - Свойства компонента.
 * @param {ICourse} props.course - Объект курса с информацией о видео.
 *
 * @returns {JSX.Element} Элемент с информацией о видео курса и кнопкой просмотра.
 */
export function Video({ course }: VideoProps) {
	return (
		<div className={styles.video}>
			<h4>
				{course.chapters.length
					? 'Смотреть курс'
					: 'Пока только на YouTube.'}
			</h4>
			<p>
				{course.chapters.length
					? 'Отслеживайте свой прогресс, меняйте качество, скорость и многое другое.'
					: 'Этот курс пока доступен только на YouTube.'}
			</p>
			{course.chapters.length ? (
				<Link
					href={PUBLIC_URL.chapter(course.slug, course.chapters[0].slug)}
				>
					<Button variant='secondary'>
						<PlayCircle />
						Смотреть
					</Button>
				</Link>
			) : (
				<Link href={course.videoUrl} target='_blank'>
					<Button variant='secondary'>Смотреть на YouTube</Button>
				</Link>
			)}
		</div>
	)
}
