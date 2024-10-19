import { authStore } from '@/store/auth/auth.store'

export function useAuth() {
	const isAuthenticated = authStore(state => state.isAuthenticated)
	const setIsAuthenticated = authStore(state => state.setIsAuthenticated)

	const auth = () => setIsAuthenticated(true)
	const exit = () => setIsAuthenticated(false)

	return {
		isAuthenticated,
		auth,
		exit
	}
}
