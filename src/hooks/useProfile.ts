import { useQuery } from '@tanstack/react-query'

import { userService } from '@/services/user.service'

import { User } from '@/types/user.interface'

import { useAuth } from './useAuth'

export function useProfile() {
	const { exit } = useAuth()
	const {
		data: user,
		isLoading: isLoadingProfile,
		error
	} = useQuery<User, Error>({
		queryKey: ['profile'],
		queryFn: async () => {
			try {
				return await userService.findProfile()
			} catch (err) {
				exit()
				throw new Error('Ошибка при получении профиля')
			}
		}
	})

	// useEffect(() => {
	// 	if (error) {
	// 		exit()
	// 	}
	// }, [error, exit])

	return {
		user,
		isLoadingProfile,
		error
	}
}
