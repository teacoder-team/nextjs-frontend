import styles from './Sidebar.module.scss'
import { Menu } from './menu/Menu'
import { SocialLinks } from './social-links/SocialLinks'

/**
 * Компонент Sidebar отображает боковую панель приложения,
 * содержащую меню и ссылки на социальные сети.
 *
 * @returns {JSX.Element} Элемент боковой панели с меню и социальными ссылками.
 */
export function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<div className={styles.menu}>
				<Menu />
			</div>
			<SocialLinks />
		</div>
	)
}
