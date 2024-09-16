'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
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
	type TypeResetPasswordSchema,
	resetPasswordSchema
} from '@/schemes/auth/reset-password.schema'

export function ResetPasswordForm() {
	const { mutate, isPending } = useMutation({
		mutationKey: ['reset password'],
		mutationFn: (data: TypeResetPasswordSchema) =>
			passwordRecoveryService.reset(data),
		onSuccess() {
			toast.success('Проверьте вашу почту')
		},
		onError(error) {
			if (error.message) {
				toast.error(error.message)
			} else {
				toast.error('Ошибка при сбросе пароля')
			}
		}
	})

	const form = useForm<TypeResetPasswordSchema>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			email: ''
		}
	})

	const onSubmit = (data: TypeResetPasswordSchema) => {
		mutate(data)
	}

	return (
		<AuthWrapper
			heading='Сброс пароля'
			description='Для сброса пароля введите свою почту'
			backButtonLabel='Войти в аккаунт'
			backButtonHref='/auth/sign-in'
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
