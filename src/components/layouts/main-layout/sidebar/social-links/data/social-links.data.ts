import { FaGithub, FaTelegram, FaYoutube } from 'react-icons/fa6'
import { IconType } from 'react-icons/lib'

/**
 * Интерфейс ISocialLinks определяет структуру объекта, содержащего информацию о социальной сети.
 */
interface ISocialLinks {
	link: string
	title: string
	icon: IconType
}

/**
 * Массив socialLinks содержит информацию о ссылках на социальные сети.
 * Он использует интерфейс ISocialLinks для определения структуры каждого объекта в массиве.
 *
 * Объекты в массиве содержат следующую информацию:
 * - link: URL-адрес профиля в социальной сети.
 * - title: Название социальной сети.
 * - icon: Иконка социальной сети, импортированная из react-icons/fa6.
 *
 * Массив содержит ссылки на YouTube, Telegram и GitHub.
 */
export const socialLinks: ISocialLinks[] = [
	{
		link: 'https://www.youtube.com/@TeaCoder52',
		title: 'YouTube',
		icon: FaYoutube
	},
	{
		link: 'https://t.me/TeaCoder_official',
		title: 'Telegram',
		icon: FaTelegram
	},
	{
		link: 'https://github.com/TeaCoder52',
		title: 'Github',
		icon: FaGithub
	}
]
