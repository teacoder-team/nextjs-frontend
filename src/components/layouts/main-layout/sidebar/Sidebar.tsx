import styles from './Sidebar.module.scss'
import { Menu } from './menu/Menu'
import { SocialLinks } from './social-links/SocialLinks'

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
