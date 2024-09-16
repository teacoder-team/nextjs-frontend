'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
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

import { passwordRecoveryService } from '@/services/password-recovery.service'

import { AuthWrapper } from '../AuthWrapper'

import {
	type TypeNewPasswordSchema,
	newPasswordSchema
} from '@/schemes/auth/new-password.schema'

export function NewPasswordForm() {
	const router = useRouter()
	const searchParams = useSearchParams()

	const token = searchParams.get('token')

	const { mutate, isPending } = useMutation({
		mutationKey: ['new password'],
		mutationFn: (data: TypeNewPasswordSchema) =>
			passwordRecoveryService.new(data, token),
		onSuccess() {
			toast.success('Пароль успешно изменён')
			router.push('/auth/sign-in')
		},
		onError(error) {
			if (error.message) {
				toast.error(error.message)
			} else {
				toast.error('Ошибка при установлении нового пароля')
			}
		}
	})

	const form = useForm<TypeNewPasswordSchema>({
		resolver: zodResolver(newPasswordSchema),
		defaultValues: {
			password: '',
			passwordRepeat: ''
		}
	})

	const onSubmit = (data: TypeNewPasswordSchema) => {
		mutate(data)
	}

	return (
		<AuthWrapper
			heading='Новый пароль'
			description='Придумайте новый пароль для вашего аккаунта'
			backButtonLabel='Войти в аккаунт'
			backButtonHref='/auth/sign-in'
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
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
					<FormField
						control={form.control}
						name='passwordRepeat'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Повторите пароль</FormLabel>
								<FormControl>
									<Input
										placeholder='******'
										disabled={isPending}
										type='password'
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
