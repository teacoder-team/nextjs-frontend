import { type NextRequest, NextResponse } from 'next/server'

import { ADMIN_URL, DASHBOARD_URL, PUBLIC_URL } from './config/url.config'
import { EnumTokens } from './services/auth/auth.helper'
import userService from './services/user.service'
import { EnumRole } from './types/user.interface'

export default async function middleware(request: NextRequest) {
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value
	const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value

	const isAuthPage = request.url.includes(PUBLIC_URL.auth())
	const isAdminPage = request.url.includes(ADMIN_URL.root())

	if (isAuthPage) {
		if (refreshToken && accessToken) {
			return NextResponse.redirect(
				new URL(DASHBOARD_URL.home(), request.url)
			)
		}

		return NextResponse.next()
	}

	if (refreshToken === undefined)
		return NextResponse.redirect(new URL(PUBLIC_URL.auth(), request.url))

	try {
		const user = await userService.getProfileByToken(accessToken as string)

		if (user.role === EnumRole.Admin) return NextResponse.next()

		if (isAdminPage) return NextResponse.rewrite(new URL('/404', request.url))

		return NextResponse.next()
	} catch (error) {
		request.cookies.delete(EnumTokens.ACCESS_TOKEN)
		console.log('Ошибка при получении профиля: ', error)
	}
}

export const config = {
	matcher: ['/manage/:path*', '/dashboard/:path*', '/sign-in']
}
