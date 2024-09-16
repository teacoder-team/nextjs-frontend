import { useQuery } from '@tanstack/react-query'

import { userService } from '@/services/user.service'

export function useProfile() {
	const { data: user, isLoading: isLoadingProfile } = useQuery({
		queryKey: ['find user profile'],
		queryFn: () => userService.findProfile()
	})

	return { user, isLoadingProfile }
}
