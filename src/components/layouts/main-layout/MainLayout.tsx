import type { PropsWithChildren } from 'react'

import styles from './MainLayout.module.scss'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'

export default function MainLayout({ children }: PropsWithChildren) {
	return (
		<div className={styles.layout}>
			<div className={styles.content_wrapper}>
				<div className={styles.header}>
					<Header />
				</div>
				<div className={styles.sidebar}>
					<Sidebar />
				</div>
				<main>{children}</main>
			</div>
			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	)
}
