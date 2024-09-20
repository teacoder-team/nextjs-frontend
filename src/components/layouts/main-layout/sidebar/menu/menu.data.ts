import {
	BarChart,
	Book,
	Compass,
	type LucideIcon,
	Trophy,
	Users
} from 'lucide-react'

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
	},
	{
		icon: Users,
		value: 'Пользователи',
		link: '/manage/users'
	},
	{
		icon: Book,
		value: 'Курсы',
		link: '/manage/courses'
	}
]
