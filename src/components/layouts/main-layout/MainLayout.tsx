import type { PropsWithChildren } from 'react'

import styles from './MainLayout.module.scss'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'

/**
 * MainLayout — это компонент макета, который предоставляет
 * согласованную структуру для приложения, включая заголовок,
 * боковую панель и основную область контента.
 *
 * @param {PropsWithChildren<unknown>} props - Свойства компонента,
 * включая дочерние элементы, которые будут отображаться в
 * основной области контента.
 * @returns {JSX.Element} Структура макета с заголовком,
 * боковой панелью и основной областью контента.
 */
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
