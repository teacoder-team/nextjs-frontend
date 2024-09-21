import Image from 'next/image'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'

import { Button } from '@/components/ui/common/button/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/common/card/Card'

import styles from './Auth.module.scss'

interface AuthWrapperProps {
	heading: string
	description?: string
	backButtonLabel?: string
	backButtonHref?: string
	isShowSocial?: boolean
}

export function AuthWrapper({
	children,
	heading,
	description,
	backButtonLabel,
	backButtonHref,
	isShowSocial
}: PropsWithChildren<AuthWrapperProps>) {
	return (
		<Card className={styles.wrapper}>
			<CardHeader className={styles.header}>
				<Image
					src='/images/logo.svg'
					alt='Авторизация'
					width={70}
					height={70}
				/>
				<CardTitle className={styles.heading}>{heading}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className={styles.content}>
				{/* {isShowSocial && <Social />} */}
				{children}
			</CardContent>
			<CardFooter>
				{backButtonLabel && backButtonHref && (
					<Button variant='link' className={styles.switch}>
						<Link href={backButtonHref}>{backButtonLabel}</Link>
					</Button>
				)}
			</CardFooter>
		</Card>
	)
}
