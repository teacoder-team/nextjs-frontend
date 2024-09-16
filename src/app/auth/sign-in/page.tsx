import type { Metadata } from 'next'

import { LoginForm } from '@/components/features/auth/forms/LoginForm'

export const metadata: Metadata = {
	title: 'Войти в аккаунт'
}

export default function SignInPage() {
	return <LoginForm />
}
