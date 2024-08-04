'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type PropsWithChildren, useState } from 'react'
import { Toaster } from 'react-hot-toast'

/**
 * Компонент MainProvider оборачивает дочерние элементы в контексты
 * для React Query и react-hot-toast, предоставляя доступ к
 * функциональности запросов и уведомлений в приложении.
 *
 * @param {PropsWithChildren} props - Свойства компонента, включая дочерние элементы.
 * @returns {JSX.Element} Элемент, обернутый в контексты.
 */
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
			{children}
		</QueryClientProvider>
	)
}
