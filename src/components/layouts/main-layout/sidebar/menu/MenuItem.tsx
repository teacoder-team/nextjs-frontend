import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/utils/clsx'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'

interface MenuItemProps {
	route: IMenuItem
}

/**
 * Компонент MenuItem представляет собой отдельный пункт меню.
 * Он отображает значок и метку и подсвечивает активную ссылку.
 *
 * @param {MenuItemProps} props - Свойства для пункта меню, включая маршрут.
 * @returns {JSX.Element} Отрендеренный пункт меню.
 */
export function MenuItem({ route }: MenuItemProps) {
	const pathname = usePathname()

	return (
		<Link
			href={route.link}
			className={cn(styles.route, {
				[styles.active]: pathname === route.link
			})}
		>
			<div className={styles.link}>
				<route.icon size={22} />
				{route.value}
			</div>
			<div
				className={cn(styles.right, {
					[styles.active]: pathname === route.link
				})}
			/>
		</Link>
	)
}
