import type { Metadata } from 'next'

import { ResetPasswordForm } from '@/components/features/auth/forms/ResetPasswordForm'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Сброс пароля',
	...NO_INDEX_PAGE
}

export default function ResetPasswordPage() {
	return <ResetPasswordForm />
}
