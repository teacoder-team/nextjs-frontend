import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { NewPasswordForm } from '@/components/features/auth/forms/NewPasswordForm'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Новый пароль',
	...NO_INDEX_PAGE
}

export default function NewPasswordPage({
	searchParams
}: {
	searchParams: { token: string }
}) {
	if (!searchParams.token) return redirect('/auth/reset-password')

	return <NewPasswordForm />
}
