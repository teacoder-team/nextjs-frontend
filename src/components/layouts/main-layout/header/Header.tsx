import { LogOut } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'

import { Button } from '@/components/ui/common/button/Button'

import { MobileSidebar } from '../sidebar/MobileSidebar'

import styles from './Header.module.scss'
import { Logo } from './Logo'
import { HeaderMenu } from './header-menu/HeaderMenu'
import { SearchInput } from './search-input/SearchInput'

export function Header() {
	const session = cookies().get('session')?.value

	return (
		<div className={styles.header}>
			<MobileSidebar />
			<Logo />
			<div className={styles.search}>
				<SearchInput />
			</div>
			<div className={styles.header_menu}>
				{session ? (
					<HeaderMenu />
				) : (
					<Link href='/auth/sign-in'>
						<Button variant='outline'>
							<LogOut className={styles.icon} />
							Войти
						</Button>
					</Link>
				)}
			</div>
		</div>
	)
}
