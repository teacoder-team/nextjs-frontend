'use client'

import { Shield, User } from 'lucide-react'
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
import { Loader } from '@/components/ui/common/loader/Loader'

import { ADMIN_URL, DASHBOARD_URL } from '@/config/url.config'

import { useProfile } from '@/hooks/useProfile'

import { LogoutButton } from './LogoutButton'

/**
 * Компонент HeaderMenu отображает меню пользователя в шапке приложения.
 * Оно включает информацию о пользователе, ссылки на личный кабинет
 * и админ-панель (если пользователь является администратором),
 * а также кнопку выхода.
 *
 * @returns {JSX.Element | null} Элемент меню пользователя или null, если пользователь не загружен.
 */
export function HeaderMenu() {
	const { user, isAdmin, isLoading } = useProfile()

	if (!user) return <Loader size='sm' />

	return isLoading ? (
		<Loader size='sm' />
	) : (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar>
					<AvatarImage
						src={user.profile.picture}
						alt={user.profile.name}
					/>
					<AvatarFallback>{user.profile.name.slice(0, 1)}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='mt-1 w-[250px]'>
				<div className='flex flex-col space-y-2 p-2'>
					<DropdownMenuLabel className='p-0'>
						Привет, {user.profile.name}
					</DropdownMenuLabel>
					<p className='text-xs leading-none text-muted-foreground'>
						{user.email}
					</p>
				</div>
				<DropdownMenuSeparator />
				<Link href={DASHBOARD_URL.home()} passHref>
					<DropdownMenuItem>
						<User className='mr-2 size-4' />
						Личный кабинет
					</DropdownMenuItem>
				</Link>
				{isAdmin && (
					<Link href={ADMIN_URL.home()} passHref>
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
