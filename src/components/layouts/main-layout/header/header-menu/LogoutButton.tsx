import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { DropdownMenuItem } from '@/components/ui/common/dropdown-menu/DropdownMenu'

import { authService } from '@/services/auth.service'

export function LogoutButton() {
	const router = useRouter()

	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			router.push('/auth/sign-in')
		}
	})

	return (
		<DropdownMenuItem onClick={() => logout()}>
			<LogOut className='mr-2 size-4' />
			Выйти
		</DropdownMenuItem>
	)
}
