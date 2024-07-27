import styles from './Sidebar.module.scss'
import { Menu } from './menu/Menu'

export function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<div className={styles.menu}>
				<Menu />
			</div>
		</div>
	)
}
