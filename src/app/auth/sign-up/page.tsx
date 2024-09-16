import type { Metadata } from 'next'

import { RegisterForm } from '@/components/features/auth/forms/RegisterForm'

export const metadata: Metadata = {
	title: 'Регистрация'
}

export default function SignUpPage() {
	return <RegisterForm />
}
