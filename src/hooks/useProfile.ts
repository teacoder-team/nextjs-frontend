import { useQuery } from '@tanstack/react-query'

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

	return { user, isLoadingProfile, isError }
}
