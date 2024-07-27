import { BarChart, Book, Users } from 'lucide-react'

import { ADMIN_URL } from '@/config/url.config'

import type { IMenuItem } from '../menu.interface'

export const adminMenu: IMenuItem[] = [
	{
		icon: BarChart,
		value: 'Статистика',
		link: ADMIN_URL.home()
	},
	{
		icon: Users,
		value: 'Пользователи',
		link: ADMIN_URL.users()
	},
	{
		icon: Book,
		value: 'Курсы',
		link: ADMIN_URL.courses()
	}
]
