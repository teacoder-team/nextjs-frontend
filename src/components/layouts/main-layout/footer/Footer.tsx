'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/common/button/Button'

import styles from './Footer.module.scss'

export function Footer() {
	const pathname = usePathname()

	const isAdminPage = pathname.includes('/manage')

	if (isAdminPage) return null

	return (
		<footer className={styles.footer}>
			<p className={styles.rights}>
				TeaCoder.ru © 2024 Все права защищены.
			</p>
			<Button variant='link'>
				<Link href='mailto:help@teacoder.ru'>Контакты</Link>
			</Button>
			<Button variant='link'>
				<Link href='/docs/agreement'>Cоглашение</Link>
			</Button>
			<Button variant='link'>
				<Link href='/docs/privacy'>Политика Конфиденциальности</Link>
			</Button>
		</footer>
	)
}
