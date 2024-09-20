'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type PropsWithChildren, useState } from 'react'
import { Toaster } from 'react-hot-toast'

import { ConfettiProvider } from './ConfettiProvider'

export function MainProvider({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)

	return (
		<QueryClientProvider client={client}>
			<Toaster
				position='top-center'
				toastOptions={{
					duration: 2000
				}}
			/>
			<ConfettiProvider />
			{children}
		</QueryClientProvider>
	)
}
