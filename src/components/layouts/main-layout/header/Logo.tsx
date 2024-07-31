import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.scss'

/**
 * Компонент Logo отображает логотип приложения в шапке.
 * При клике на логотип происходит переход на главную страницу.
 *
 * @returns {JSX.Element} Элемент ссылки с логотипом.
 */
export function Logo() {
	return (
		<Link href='/' className={styles.logo}>
			<Image src='/images/logo.svg' alt='TeaCoder' width={44} height={44} />
			<p>TeaCoder</p>
		</Link>
	)
}
