import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

import { userService } from '@/services/user.service'

export function useProfile() {
	const {
		data: user,
		isLoading: isLoadingProfile,
		isError
	} = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.findProfile()
	})

	useEffect(() => {
		if (!isError) return Cookies.remove('session')
	}, [isError])

	return { user, isLoadingProfile, isError }
}
