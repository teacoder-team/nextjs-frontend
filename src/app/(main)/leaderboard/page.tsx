import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { LeaderBoard } from './LeaderBoard'

export const metadata: Metadata = {
	title: 'Таблица лидеров',
	description:
		'Посмотрите на 10 самых продуктивных пользователей нашей платформы! Узнайте, кто заработал наибольшее количество очков за прохождение курсов и вдохновитесь их успехами.',
	...NO_INDEX_PAGE
}

/**
 * Компонент страницы, отображающий таблицу лидеров, используя компонент LeaderBoard.
 *
 * @returns {JSX.Element} Элемент страницы с таблицей лидеров.
 */
export default function LeaderBoardPage() {
	return <LeaderBoard />
}
