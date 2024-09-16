'use client'

import { Spinner } from '@nextui-org/spinner'
import { Settings, Shield, User } from 'lucide-react'
import Link from 'next/link'

import {
	Avatar,
	AvatarFallback,
	AvatarImage
} from '@/components/ui/common/avatar/Avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/common/dropdown-menu/DropdownMenu'

import { useProfile } from '@/hooks/useProfile'

import { UserRole } from '@/types/user.interface'

import { LogoutButton } from './LogoutButton'

export function HeaderMenu() {
	const { user, isLoadingProfile } = useProfile()

	return isLoadingProfile || !user ? (
		<Spinner size='sm' color='default' />
	) : (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar>
					<AvatarImage src={user.picture} alt={user.displayName} />
					<AvatarFallback>{user.displayName.slice(0, 1)}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='mt-1 w-[250px]'>
				<div className='flex flex-col space-y-2 p-2'>
					<DropdownMenuLabel className='p-0'>
						Привет, {user.displayName}
					</DropdownMenuLabel>
					<p className='text-xs leading-none text-muted-foreground'>
						{user.email}
					</p>
				</div>
				<DropdownMenuSeparator />
				<Link href='/account' passHref>
					<DropdownMenuItem>
						<User className='mr-2 size-4' />
						Личный кабинет
					</DropdownMenuItem>
				</Link>
				<Link href='/account/settings' passHref>
					<DropdownMenuItem>
						<Settings className='mr-2 size-4' />
						Настройки
					</DropdownMenuItem>
				</Link>
				{user.role === UserRole.Admin && (
					<Link href='/manage' passHref>
						<DropdownMenuItem>
							<Shield className='mr-2 size-4' />
							Админ панель
						</DropdownMenuItem>
					</Link>
				)}
				<LogoutButton />
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
