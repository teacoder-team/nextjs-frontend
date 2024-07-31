import { Compass, Trophy } from 'lucide-react'

import { PUBLIC_URL } from '@/config/url.config'

import type { IMenuItem } from '../menu.interface'

/**
 * Массив userMenu определяет элементы меню, доступные для обычных пользователей.
 */
export const userMenu: IMenuItem[] = [
	{
		icon: Compass,
		value: 'Главная',
		link: '/'
	},
	{
		icon: Trophy,
		value: 'Таблица лидеров',
		link: PUBLIC_URL.leaderboard()
	}
]
