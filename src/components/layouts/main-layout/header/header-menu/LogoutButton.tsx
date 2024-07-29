import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { DropdownMenuItem } from '@/components/ui/common/dropdown-menu/DropdownMenu'

import { PUBLIC_URL } from '@/config/url.config'

import authService from '@/services/auth/auth.service'

/**
 * Компонент LogoutButton отображает кнопку выхода из системы
 * в меню пользователя. При клике на кнопку происходит выход
 * пользователя и перенаправление на страницу авторизации.
 *
 * @returns {JSX.Element} Элемент кнопки выхода.
 */
export function LogoutButton() {
	const router = useRouter()

	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			router.push(PUBLIC_URL.auth())
		}
	})

	return (
		<DropdownMenuItem onClick={() => logout()}>
			<LogOut className='mr-2 size-4' />
			Выйти
		</DropdownMenuItem>
	)
}
