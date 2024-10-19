'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
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

import { useAuth } from '@/hooks/useAuth'

import { authService } from '@/services/auth.service'

import { UserRole } from '@/types/user.interface'

import { AuthWrapper } from '../AuthWrapper'

import {
	type TypeRegisterSchema,
	registerSchema
} from '@/schemes/auth/register.schema'

export function RegisterForm() {
	const router = useRouter()
	const { auth } = useAuth()

	const { mutate, isPending } = useMutation({
		mutationKey: ['sign up'],
		mutationFn: (data: TypeRegisterSchema) => authService.register(data),
		onSuccess(data) {
			auth()
			toast.success('Вы успешно зарегистрировались')
			router.push(data.user.role === UserRole.Admin ? '/manage' : '/account')
		},
		onError(error) {
			if (error.message) {
				toast.error(error.message)
			} else {
				toast.error('Ошибка при регистрации')
			}
		}
	})

	const form = useForm<TypeRegisterSchema>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: '',
			email: '',
			password: ''
		}
	})

	const onSubmit = (data: TypeRegisterSchema) => {
		mutate(data)
	}

	return (
		<AuthWrapper
			heading='Регистрация'
			description='Для регистрации достаточно ввести email и придумать пароль'
			backButtonLabel='Уже есть аккаунт? Войти'
			backButtonHref='/auth/sign-in'
			isShowSocial
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Имя</FormLabel>
								<FormControl>
									<Input
										placeholder='Иван'
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
								<FormLabel>Пароль</FormLabel>
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
