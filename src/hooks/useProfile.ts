import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'

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

	if (isError) return Cookies.remove('session')

	return { user, isLoadingProfile, isError }
}
