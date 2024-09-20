'use client'

import { usePathname } from 'next/navigation'

import styles from './Menu.module.scss'
import { MenuItem } from './MenuItem'
import { adminMenu, userMenu } from './menu.data'

export function Menu() {
	const pathname = usePathname()

	const isAdminPage = pathname?.startsWith('/manage')

	const routes = isAdminPage ? adminMenu : userMenu

	return (
		<div className={styles.menu}>
			{routes.map(route => (
				<MenuItem key={route.link} route={route} />
			))}
		</div>
	)
}
