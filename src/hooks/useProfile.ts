import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { saveTokenStorage } from '@/services/auth/auth.helper'
import authService from '@/services/auth/auth.service'
import userService from '@/services/user.service'

import { EnumRole } from '@/types/user.interface'

/**
 * Хук useProfile управляет загрузкой данных профиля пользователя
 * и обновлением токенов аутентификации.
 *
 * @returns {Object} Объект с данными пользователя, статусом загрузки и информацией о том, является ли пользователь администратором.
 */
export function useProfile() {
	const { data: user, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
		refetchInterval: 1800000
	})

	const { isSuccess, data: dataTokens } = useQuery({
		queryKey: ['new tokens'],
		queryFn: () => authService.getNewTokens(),
		enabled: !user
	})

	useEffect(() => {
		if (!isSuccess) return

		if (dataTokens.data.accessToken)
			saveTokenStorage(dataTokens.data.accessToken)
	}, [isSuccess])

	return {
		user,
		isLoading,
		isAdmin: user?.role === EnumRole.Admin
	}
}
