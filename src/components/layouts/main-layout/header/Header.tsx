import { MobileSidebar } from '../sidebar/MobileSidebar'

import styles from './Header.module.scss'
import { Logo } from './Logo'
import { HeaderMenu } from './header-menu/HeaderMenu'
import { SearchInput } from './search-input/SearchInput'

export function Header() {
	return (
		<div className={styles.header}>
			<MobileSidebar />
			<Logo />
			<div className={styles.search}>
				<SearchInput />
			</div>
			<HeaderMenu />
		</div>
	)
}
