import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import type { AuthStore } from './auth.types'

export const authStore = create(
	persist<AuthStore>(
		set => ({
			isAuthenticated: false,
			setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value })
		}),
		{
			name: 'auth',
			storage: createJSONStorage(() => localStorage)
		}
	)
)
