import styles from './Sidebar.module.scss'
import { Menu } from './menu/Menu'

/**
 * Компонент Sidebar отображает боковую панель приложения,
 * включающую меню.
 *
 * @returns {JSX.Element} Элемент боковой панели с меню.
 */
export function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<div className={styles.menu}>
				<Menu />
			</div>
		</div>
	)
}
