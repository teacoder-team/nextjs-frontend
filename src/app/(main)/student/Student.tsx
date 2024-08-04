'use client'

import { Construction } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import Loading from '@/app/loading'

import { Heading } from '@/components/ui/common/heading/Heading'
import { MainWrapper } from '@/components/ui/elements/main-wrapper/MainWrapper'

import { useProfile } from '@/hooks/useProfile'

import { saveTokenStorage } from '@/services/auth/auth.helper'

import styles from './Student.module.scss'

export function Student() {
	const searchParams = useSearchParams()

	useEffect(() => {
		const accessToken = searchParams.get('accessToken')

		if (accessToken) saveTokenStorage(accessToken)
	}, [searchParams])

	const { user, isLoading } = useProfile()

	if (isLoading) return <Loading />

	return (
		<div>
			<Heading title={`Привет, ${user?.profile.name}`} />
			<MainWrapper>
				<div className={styles.construction}>
					<Construction />
					<p>Данный раздел скоро появится!</p>
				</div>
			</MainWrapper>
		</div>
	)
}
