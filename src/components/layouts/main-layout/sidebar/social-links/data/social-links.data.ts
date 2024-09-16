import { FaGithub, FaTelegram, FaYoutube } from 'react-icons/fa6'
import type { IconType } from 'react-icons/lib'

interface ISocialLinks {
	link: string
	title: string
	icon: IconType
}

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
