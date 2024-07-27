import { Compass, Trophy } from 'lucide-react'

import { PUBLIC_URL } from '@/config/url.config'

import type { IMenuItem } from '../menu.interface'

export const userMenu: IMenuItem[] = [
	{
		icon: Compass,
		value: 'Главная',
		link: PUBLIC_URL.home()
	},
	{
		icon: Trophy,
		value: 'Таблица лидеров',
		link: PUBLIC_URL.leaderboard()
	}
]
