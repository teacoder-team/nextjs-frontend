'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { useProfile } from '@/hooks/useProfile'

import { saveTokenStorage } from '@/services/auth/auth.helper'

export function Dashboard() {
	const searchParams = useSearchParams()

	useEffect(() => {
		const accessToken = searchParams.get('accessToken')

		if (accessToken) saveTokenStorage(accessToken)
	}, [searchParams])

	const { user, isLoading } = useProfile()

	return <div>{isLoading ? 'Загрузка...' : JSON.stringify(user)}</div>
}
