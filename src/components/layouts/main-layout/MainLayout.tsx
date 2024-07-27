import type { PropsWithChildren } from 'react'

import styles from './MainLayout.module.scss'
import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'

export default function MainLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className={styles.layout}>
			<div className={styles.header}>
				<Header />
			</div>
			<div className={styles.sidebar}>
				<Sidebar />
			</div>
			<main>{children}</main>
		</div>
	)
}
