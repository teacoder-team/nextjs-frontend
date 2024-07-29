'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaDiscord, FaGithub, FaYandex } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

import { Button } from '@/components/ui/common/button/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/common/card/Card'

import { API_URL, SERVER_URL } from '@/config/api.config'
import { PUBLIC_URL } from '@/config/url.config'

import styles from './Auth.module.scss'

/**
 * Компонент Auth отображает форму авторизации с кнопками для входа
 * через различные провайдеры, такие как Google, GitHub, Яндекс и Discord.
 *
 * @returns {JSX.Element} Элемент формы авторизации.
 */
export function Auth() {
	const router = useRouter()

	const handleClick = (
		provider: 'google' | 'github' | 'yandex' | 'discord'
	) => {
		router.push(
			provider === 'discord'
				? `${process.env.DISCORD_AUTH_URL}`
				: SERVER_URL + API_URL.auth(`/${provider}`)
		)
	}

	return (
		<Card className={styles.card}>
			<CardHeader className={styles.header}>
				<CardTitle>Войти в аккаунт</CardTitle>
				<CardDescription>Войдите в систему с помощью:</CardDescription>
			</CardHeader>
			<CardContent className={styles.content}>
				<Button
					className={styles.button}
					variant='outline'
					onClick={() => handleClick('google')}
				>
					<FcGoogle className={styles.icon} />
					<span className={styles.text}>Продолжить через Google</span>
				</Button>
				<Button
					className={styles.button}
					variant='outline'
					onClick={() => handleClick('github')}
				>
					<FaGithub className={styles.icon} />
					<span className={styles.text}>Продолжить через Github</span>
				</Button>
				<Button
					className={styles.button}
					variant='outline'
					onClick={() => handleClick('yandex')}
				>
					<FaYandex className={styles.icon} color='#FE0000' />
					<span className={styles.text}>Продолжить через Яндекс</span>
				</Button>
				<Button
					className={styles.button}
					variant='outline'
					onClick={() => handleClick('discord')}
				>
					<FaDiscord className={styles.icon} color='#5562EA' />
					<span className={styles.text}>Продолжить через Discord</span>
				</Button>
			</CardContent>
			<CardFooter className={styles.footer}>
				При создании учетной записи вы соглашаетесь с нашим{' '}
				<Link
					target='_blank'
					className='text-primary hover:underline'
					href={PUBLIC_URL.agreement()}
				>
					Пользовательским соглашением
				</Link>{' '}
				и{' '}
				<Link
					target='_blank'
					className='text-primary hover:underline'
					href={PUBLIC_URL.privacy()}
				>
					Политикой конфиденциальности
				</Link>
				.
			</CardFooter>
		</Card>
	)
}
