'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { FaYandex } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { Button } from '@/components/ui/common/button/Button'

import { authService } from '@/services/auth.service'

import styles from './Social.module.scss'

export function Social() {
	const router = useRouter()

	const { mutateAsync, isPending } = useMutation({
		mutationKey: ['oauth by provider'],
		mutationFn: async (provider: 'google' | 'yandex') =>
			await authService.oauthByProvider(provider)
	})

	const onClick = async (provider: 'google' | 'yandex') => {
		const response = await mutateAsync(provider)

		if (response) {
			router.push(response.url)
		}
	}

	return (
		<>
			<div className={styles.social}>
				<Button
					onClick={() => onClick('google')}
					variant='outline'
					disabled={isPending}
				>
					<FcGoogle />
				</Button>
				<Button
					onClick={() => onClick('yandex')}
					variant='outline'
					disabled={isPending}
				>
					<FaYandex color='#fc3f1d' />
				</Button>
			</div>
			<div className={styles.separator}>
				<div className={styles.line}>
					<span />
				</div>
				<div className={styles.text_wrapper}>
					<span>Или</span>
				</div>
			</div>
		</>
	)
}
