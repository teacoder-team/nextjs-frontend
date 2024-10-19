import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { DropdownMenuItem } from '@/components/ui/common/dropdown-menu/DropdownMenu'

import { useAuth } from '@/hooks/useAuth'

import { authService } from '@/services/auth.service'

export function LogoutButton() {
	const router = useRouter()
	const { exit } = useAuth()

	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			exit()
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
