import { BookOpen } from 'lucide-react'
import { FaYoutube } from 'react-icons/fa6'

import { Chapter } from '@/types/chapter.interface'

import { cn } from '@/utils/clsx'
import { getChapterWord } from '@/utils/string/get-chapter-word'

import styles from './CourseBadge.module.scss'

interface CourseBadgeProps {
	chapters: Chapter[]
}

/**
 * Компонент CourseBadge отображает информацию о количестве глав курса.
 * Он использует иконку книги, если главы присутствуют, и иконку YouTube, если их нет.
 *
 * Свойства:
 * - chapters (Chapter[]): Массив глав курса, который определяет, какие иконки и текст отображать.
 *
 * @returns {JSX.Element} Элемент значка курса с соответствующей иконкой и текстом.
 */
export function CourseBadge({ chapters }: CourseBadgeProps) {
	return (
		<div className={styles.badge}>
			<div
				className={cn({
					[styles.blue]: chapters.length,
					[styles.red]: !chapters.length
				})}
			>
				{chapters.length ? <BookOpen /> : <FaYoutube />}
				<span>
					{chapters.length ? getChapterWord(chapters.length) : `Youtube`}
				</span>
			</div>
		</div>
	)
}
