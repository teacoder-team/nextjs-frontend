'use client'

import { usePathname } from 'next/navigation'

import { ADMIN_URL } from '@/config/url.config'

import styles from './Menu.module.scss'
import { MenuItem } from './MenuItem'
import { adminMenu } from './data/admin.menu'
import { userMenu } from './data/user.menu'

export function Menu() {
	const pathname = usePathname()

	const isAdminPage = pathname?.startsWith(ADMIN_URL.root())

	const routes = isAdminPage ? adminMenu : userMenu

	return (
		<div className={styles.menu}>
			{routes.map(route => (
				<MenuItem key={route.link} route={route} />
			))}
		</div>
	)
}
