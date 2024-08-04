import Link from 'next/link'

import { Button } from '@/components/ui/common/button/Button'
import { MainWrapper } from '@/components/ui/elements/main-wrapper/MainWrapper'

import styles from './NotFound.module.scss'

export function NotFound() {
	return (
		<MainWrapper>
			<div className={styles.area}>
				<h1 className={styles.heading}>404. Страница не найдена</h1>
				<p className={styles.description}>
					Хм, похоже, эта страница не существует.
				</p>
				<Link href='/'>
					<Button variant='secondary'>Перейти на главную</Button>
				</Link>
			</div>
		</MainWrapper>
	)
}
