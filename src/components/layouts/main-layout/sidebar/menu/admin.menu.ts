import { BarChart, Compass, type LucideIcon, Trophy } from 'lucide-react'

export interface MenuItem {
	icon: LucideIcon
	value: string
	link: string
}

export const userMenu: MenuItem[] = [
	{
		icon: Compass,
		value: 'Главная',
		link: '/'
	},
	{
		icon: Trophy,
		value: 'Таблица лидеров',
		link: '/leaderboard'
	}
]

export const adminMenu: MenuItem[] = [
	{
		icon: BarChart,
		value: 'Статистика',
		link: '/manage'
	}
	// {
	// 	icon: Users,
	// 	value: 'Пользователи',
	// 	link: ADMIN_URL.users()
	// },
	// {
	// 	icon: Book,
	// 	value: 'Курсы',
	// 	link: ADMIN_URL.courses()
	// }
]
