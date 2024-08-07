import { jwtVerify } from 'jose'
import { type NextRequest, NextResponse } from 'next/server'

import { ADMIN_URL, DASHBOARD_URL, PUBLIC_URL } from './config/url.config'
import { EnumTokens } from './services/auth/auth.helper'
import { ITokenInside } from './services/auth/auth.types'
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

	if (refreshToken === undefined) {
		if (isAdminPage) {
			return NextResponse.rewrite(new URL('/404', request.url))
		} else {
			return NextResponse.redirect(new URL(PUBLIC_URL.auth(), request.url))
		}
	}

	try {
		const { payload }: { payload: ITokenInside } = await jwtVerify(
			accessToken as string,
			new TextEncoder().encode(`${process.env.JWT_SECRET}`)
		)

		if (payload?.role === EnumRole.Admin) return NextResponse.next()

		if (isAdminPage) {
			console.log(
				'Попытка несанкционированного доступа в админ-панель: ',
				JSON.stringify(payload)
			)
			return NextResponse.rewrite(new URL('/404', request.url))
		}

		return NextResponse.next()
	} catch (error) {
		if (
			error instanceof Error &&
			error.message.includes('exp claim timestamp check failed')
		) {
			console.log('Токен истек')
			return NextResponse.redirect(new URL(PUBLIC_URL.auth(), request.url))
		}
		// console.log('Ошибка при верификации токена: ', error)
		// return NextResponse.redirect(new URL(PUBLIC_URL.auth(), request.url))
	}
}

export const config = {
	matcher: [
		'/manage/:path*',
		'/courses/:path*/chapters/:path*',
		'/student/:path*',
		'/sign-in'
	]
}
