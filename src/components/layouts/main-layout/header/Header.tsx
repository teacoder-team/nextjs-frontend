'use client'

import { Spinner } from '@nextui-org/spinner'
import { useQuery } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/common/button/Button'

import { MobileSidebar } from '../sidebar/MobileSidebar'

import styles from './Header.module.scss'
import { Logo } from './Logo'
import { HeaderMenu } from './header-menu/HeaderMenu'
import { SearchInput } from './search-input/SearchInput'

export function Header() {
	const { data, isLoading } = useQuery({
		queryKey: ['get session from cookie'],
		queryFn: async () => {
			const response = await fetch('/api/cookie')
			if (!response.ok) throw new Error('Network response was not ok')
			return response.json()
		}
	})

	return (
		<div className={styles.header}>
			<MobileSidebar />
			<Logo />
			<div className={styles.search}>
				<SearchInput />
			</div>
			<div className={styles.header_menu}>
				{isLoading ? (
					<Spinner size='md' color='default' />
				) : data?.session ? (
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
