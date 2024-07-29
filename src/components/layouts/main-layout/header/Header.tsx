import { LogOut } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'

import { Button } from '@/components/ui/common/button/Button'

import { PUBLIC_URL } from '@/config/url.config'

import { EnumTokens } from '@/services/auth/auth.helper'

import { MobileSidebar } from '../sidebar/MobileSidebar'

import styles from './Header.module.scss'
import { Logo } from './Logo'
import { HeaderMenu } from './header-menu/HeaderMenu'
import { SearchInput } from './search-input/SearchInput'

/**
 * Компонент Header отображает шапку приложения, включающую логотип,
 * поиск, меню пользователя и кнопку входа/выхода.
 *
 * @returns {JSX.Element} Элемент шапки приложения.
 */
export function Header() {
	const accessToken = cookies().get(EnumTokens.ACCESS_TOKEN)?.value
	const refreshToken = cookies().get(EnumTokens.REFRESH_TOKEN)?.value

	return (
		<div className={styles.header}>
			<MobileSidebar />
			<Logo />
			<div className={styles.search}>
				<SearchInput />
			</div>
			<div className={styles.header_menu}>
				{accessToken || refreshToken ? (
					<HeaderMenu />
				) : (
					<Link href={PUBLIC_URL.auth()}>
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
