'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/common/button/Button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/common/form-elements/form/Form'
import { Input } from '@/components/ui/common/form-elements/input/Input'

import { authService } from '@/services/auth.service'

import { UserRole } from '@/types/user.interface'

import { AuthWrapper } from '../AuthWrapper'

import { type TypeLoginSchema, loginSchema } from '@/schemes/auth/login.schema'

export function LoginForm() {
	const router = useRouter()

	const { mutate, isPending } = useMutation({
		mutationKey: ['sign in'],
		mutationFn: (data: TypeLoginSchema) => authService.login(data),
		onSuccess(data) {
			toast.success('Успешный вход в аккаунт')
			router.push(data.user.role === UserRole.Admin ? '/manage' : '/account')
		},
		onError(error) {
			if (error.message) {
				toast.error(error.message)
			} else {
				toast.error('Ошибка при авторизации')
			}
		}
	})

	const form = useForm<TypeLoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit = (data: TypeLoginSchema) => {
		mutate(data)
	}

	return (
		<AuthWrapper
			heading='Войти в аккаунт'
			description='Для входа на сайт используйте ваш email и пароль, которые были указаны при регистрации на сайте'
			backButtonLabel='Еще нет аккаунта? Регистрация'
			backButtonHref='/auth/sign-up'
			isShowSocial
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Почта</FormLabel>
								<FormControl>
									<Input
										placeholder='ivan@example.com'
										type='email'
										disabled={isPending}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<div className='flex items-center justify-between'>
									<FormLabel>Пароль</FormLabel>
									<Link
										href='/auth/reset-password'
										className='ml-auto inline-block text-sm underline'
									>
										Забыли пароль?
									</Link>
								</div>
								<FormControl>
									<Input
										placeholder='******'
										type='password'
										disabled={isPending}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type='submit'
						variant='primary'
						disabled={isPending}
						isLoading={isPending}
						className='w-full'
					>
						Продолжить
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
