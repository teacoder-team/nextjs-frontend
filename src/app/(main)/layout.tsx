import type { PropsWithChildren } from 'react'

import MainLayout from '@/components/layouts/main-layout/MainLayout'

export default function Layout({ children }: PropsWithChildren) {
	return <MainLayout>{children}</MainLayout>
}
