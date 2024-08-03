import Link from 'next/link'

import { buttonVariants } from '@/components/ui/common/button/Button'

import styles from './SocialLinks.module.scss'
import { socialLinks } from './data/social-links.data'

/**
 * Компонент SocialLinks отображает ссылки на социальные сети в виде иконок.
 * Он использует данные из модуля data/social-links.data для отображения ссылок.
 *
 * @returns {JSX.Element} Элемент с ссылками на социальные сети в виде иконок.
 */
export function SocialLinks() {
	return (
		<div className={styles.links}>
			{socialLinks.map(item => (
				<Link
					key={item.link}
					href={item.link}
					target='_blank'
					rel='noopener noreferrer'
					className={buttonVariants({
						variant: 'ghost'
					})}
					title={item.title}
				>
					<item.icon />
				</Link>
			))}
		</div>
	)
}
